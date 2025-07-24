import { useState, useContext } from "react";
import { createContext, useEffect, type KeyboardEvent } from "react";

type Variant = "box" | "line" | "outline" | "classic" | "subtle" | "plain";

type CtxProps = {
  variant: Variant;
  active: string;
  tabLabels: string[];
  setActive: (x: any) => void;
  setTabLabels: (x: any) => void;
};

const context = createContext<CtxProps | null>(null);

const variantClasses: Record<Variant, { list: string; tab: string }> = {
  box: { list: "tabs", tab: "tab" },
  line: { list: "tabs-line", tab: "tab-line" },
  outline: { list: "tabs-outline", tab: "tab-outline" },
  classic: { list: "tabs-classic", tab: "tab-classic" },
  subtle: { list: "tabs-subtle", tab: "tab-subtle" },
  plain: { list: "tabs-plain", tab: "tab-plain" },
};

interface Props {
  value: string;
  children: any;
  className?: string;
}

const TabsList = ({ children, className = "" }: Props) => {
  const { variant, active, tabLabels, setActive } = useContext(
    context,
  ) as CtxProps;

  let activeIndex = tabLabels.indexOf(active);

  const handleKeyDown = (e: KeyboardEvent) => {
    e.preventDefault();

    if (e.key == "ArrowLeft" && activeIndex != 0) {
      setActive(tabLabels[activeIndex - 1]);
    } //
    else if (e.key == "ArrowRight" && activeIndex != tabLabels.length - 1) {
      setActive(tabLabels[activeIndex + 1]);
    }
  };

  useEffect(() => {
    if (!active) setActive(tabLabels[0]);
  }, [tabLabels]);

  return (
    <div
      role="tablist"
      className={variantClasses[variant].list + " " + className}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {children}
    </div>
  );
};

type TabProps = { iconL?: string } & Props;

const Tab = ({ iconL, value, children, className = "" }: TabProps) => {
  const { variant, active, setActive, setTabLabels } = useContext(
    context,
  ) as CtxProps;

  const setActiveTab = () => setActive(value);

  useEffect(() => {
    setTabLabels((prev: any) => [...new Set([...prev, value])]);
  }, []);

  return (
    <button
      role="tab"
      onClick={setActiveTab}
      aria-selected={active == value}
      className={variantClasses[variant].tab + " " + className}
    >
      {iconL && <span className={iconL}></span>}
      {children}
    </button>
  );
};

const TabsContent = ({ value, children }: Props) => {
  const { active } = useContext(context) as CtxProps;

  return active == value ? (
    <div role="tabpanel" aria-labelledby={`tab-${active}`}>
      {children}
    </div>
  ) : null;
};

const Tabs = ({
  variant = "box",
  children,
  defaultValue,
}: {
  variant?: Variant;
  children: any;
  defaultValue: string;
}) => {
  const [active, setActive] = useState(defaultValue);
  const [tabLabels, setTabLabels] = useState([]);

  const ctxValue: CtxProps = {
    variant,
    active,
    setActive,
    tabLabels,
    setTabLabels,
  };

  return <context.Provider value={ctxValue}>{children}</context.Provider>;
};

export { Tabs, TabsList, Tab, TabsContent };
