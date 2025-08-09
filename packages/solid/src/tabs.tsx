import { createSignal, createContext } from "solid-js";
import { useContext, onMount, Show } from "solid-js";
import type { TabsProps } from "types/tabs";

type CtxProps = {
  value: () => string;
  tabLabels: () => string[];
  setValue: (x: any) => void;
  setTabLabels: (x: any) => void;
};

const context = createContext<CtxProps | null>(null);

export const TabsList = (x: any) => {
  const { value, tabLabels, setValue } = useContext(context) as CtxProps;
  const activeIndex = () => tabLabels().indexOf(value());

  const handleKeyDown = (e: KeyboardEvent) => {
    e.preventDefault();
    const currentIndex = activeIndex();
    if (e.key === "ArrowLeft" && currentIndex !== 0) {
      setValue(tabLabels()[currentIndex - 1]);
    } else if (
      e.key === "ArrowRight" &&
      currentIndex !== tabLabels().length - 1
    ) {
      setValue(tabLabels()[currentIndex + 1]);
    }
  };

  onMount(() => {});

  return (
    <div
      role="tablist"
      class={x?.class?.includes("tabs-") ? x.class : `tabs ${x.class}`}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      {x.children}
    </div>
  );
};

interface Props {
  value: string;
  children: any;
  class?: string;
}

export const Tab = (x: Props) => {
  const { value, setValue, setTabLabels } = useContext(context) as CtxProps;
  const setActiveTab = () => setValue(x.value);

  onMount(() => {
    setTabLabels((prev: any) => {
      if (!value()) setValue(x.value);
      return [...prev, x.value];
    });
  });

  return (
    <button
      role="tab"
      onClick={setActiveTab}
      aria-selected={value() === x.value}
    >
      {x.children}
    </button>
  );
};

export const TabsContent = (x: Props) => {
  const { value } = useContext(context) as CtxProps;

  return (
    <Show when={value() === x.value}>
      <div
        role="tabpanel"
        aria-labelledby={`tabpanel-${value()}`}
        class={x.class || ""}
      >
        {x.children}
      </div>
    </Show>
  );
};

export const Tabs = (x: TabsProps) => {
  const [va, setVal] = createSignal(x.defaultValue);
  const [tabLabels, setTabLabels] = createSignal([]);

  const ctxValue: CtxProps = {
    value: x.value ?? va,
    setValue: x.setValue ?? setVal,
    tabLabels,
    setTabLabels,
  };

  return <context.Provider value={ctxValue}>{x.children}</context.Provider>;
};
