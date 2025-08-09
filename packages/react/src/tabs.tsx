import { useState, useContext } from "react";
import { createContext, useEffect, type KeyboardEvent } from "react";

import type { TabsProps } from "types/tabs";

type CtxProps = {
  value: string | undefined;
  tabLabels: string[];
  setValue: (x: any) => void;
  setTabLabels: (x: any) => void;
};

const context = createContext<CtxProps | null>(null);

type Props = React.HTMLAttributes<HTMLDivElement> & {
  value?: string;
  children: React.ReactNode;
  className?: string;
};

const TabsList = ({ children, className = "" }: Props) => {
  const { value, tabLabels, setValue } = useContext(context) as CtxProps;

  let activeIndex = tabLabels.indexOf(value || tabLabels[0]);

  const handleKeyDown = (e: KeyboardEvent) => {
    e.preventDefault();

    if (e.key == "ArrowLeft" && activeIndex != 0) {
      setValue(tabLabels[activeIndex - 1]);
    } //
    else if (e.key == "ArrowRight" && activeIndex != tabLabels.length - 1) {
      setValue(tabLabels[activeIndex + 1]);
    }
  };

  useEffect(() => {
    if (!value) setValue(tabLabels[0]);
  }, [tabLabels]);

  return (
    <div
      role="tablist"
      className={className.includes("tabs-") ? className : `tabs ${className}`}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      {children}
    </div>
  );
};

type TabProps = {
  iconL?: string;
  value: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Tab = ({ iconL, value, children }: TabProps) => {
  const {
    value: active,
    setValue,
    setTabLabels,
  } = useContext(context) as CtxProps;

  const setActiveTab = () => setValue(value);

  useEffect(() => {
    setTabLabels((prev: any) => [...new Set([...prev, value])]);
  }, []);

  return (
    <button role="tab" onClick={setActiveTab} aria-selected={active == value}>
      {iconL && <span className={iconL}></span>}
      {children}
    </button>
  );
};

const TabsContent = ({ value, children, ...rest }: Props) => {
  const { value: curval } = useContext(context) as CtxProps;

  return curval == value ? (
    <div role="tabpanel" aria-labelledby={`tabpanel-${curval}`} {...rest}>
      {children}
    </div>
  ) : null;
};

const Tabs = ({ children, defaultValue, value, setValue }: TabsProps) => {
  const [val, setVal] = useState(defaultValue);
  const [tabLabels, setTabLabels] = useState([]);

  const ctxValue: CtxProps = {
    value: value ?? val,
    setValue: setValue ?? setVal,
    tabLabels,
    setTabLabels,
  };

  return <context.Provider value={ctxValue}>{children}</context.Provider>;
};

export { Tabs, TabsList, Tab, TabsContent };
