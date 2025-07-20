import { useState, useContext } from "react";
import { createContext, useEffect, KeyboardEvent } from "react";

type CtxProps = {
  active: string;
  tabLabels: string[];
  setActive: (x: any) => void;
  setTabLabels: (x: any) => void;
};

const context = createContext<CtxProps | null>(null);

export const TabsList = ({ children }: any) => {
  const { active, tabLabels, setActive } = useContext(context) as CtxProps;

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
      className="rounded bg-slate-100 flex p-2"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {children}
    </div>
  );
};

interface Props {
  value: string;
  children: any;
}

export const Tab = ({ value, children }: Props) => {
  const { active, setActive, setTabLabels } = useContext(context) as CtxProps;
  const setActiveTab = () => setActive(value);

  useEffect(() => {
    setTabLabels((prev: any) => [...new Set([...prev, value])]);
  }, []);

  return (
    <button
      role="tab"
      onClick={setActiveTab}
      aria-selected={active == value}
      className={`btn-ghost ${active == value ? "btn-soft" : ""}`}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({ value, children }: Props) => {
  const { active } = useContext(context) as CtxProps;

  return active == value ? (
    <div role="tabpanel" aria-labelledby={`tab-${active}`}>
      {children}
    </div>
  ) : null;
};

export const Tabs = ({
  children,
  defaultValue,
}: {
  children: any;
  defaultValue: string;
}) => {
  const [active, setActive] = useState(defaultValue);
  const [tabLabels, setTabLabels] = useState([]);

  const ctxValue: CtxProps = { active, setActive, tabLabels, setTabLabels };

  return <context.Provider value={ctxValue}>{children}</context.Provider>;
};
