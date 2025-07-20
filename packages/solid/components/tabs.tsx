import { createSignal, createContext } from "solid-js";
import { useContext, onMount, Show } from "solid-js";

type CtxProps = {
  active: () => string;
  tabLabels: () => string[];
  setActive: (x: any) => void;
  setTabLabels: (x: any) => void;
};

const context = createContext<CtxProps | null>(null);

export const TabsList = (props: any) => {
  const { active, tabLabels, setActive } = useContext(context) as CtxProps;
  const activeIndex = () => tabLabels().indexOf(active());

  const handleKeyDown = (e: KeyboardEvent) => {
    e.preventDefault();
    const currentIndex = activeIndex();
    if (e.key === "ArrowLeft" && currentIndex !== 0) {
      setActive(tabLabels()[currentIndex - 1]);
    } else if (
      e.key === "ArrowRight" &&
      currentIndex !== tabLabels().length - 1
    ) {
      setActive(tabLabels()[currentIndex + 1]);
    }
  };

  return (
    <div
      role="tablist"
      class="rounded bg-slate-100 flex p-2"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {props.children}
    </div>
  );
};

interface Props {
  value: string;
  children: any;
}

export const Tab = (x: Props) => {
  const { active, setActive, setTabLabels } = useContext(context) as CtxProps;
  const setActiveTab = () => setActive(x.value);

  onMount(() => {
    setTabLabels((prev: any) => [...new Set([...prev, x.value])]);
  });

  return (
    <button
      role="tab"
      onClick={setActiveTab}
      aria-selected={active() === x.value}
      class={`btn-ghost ${active() === x.value ? "btn-soft" : ""}`}
    >
      {x.children}
    </button>
  );
};

export const TabsContent = (x: Props) => {
  const { active, setActive, tabLabels } = useContext(context) as CtxProps;

  onMount(() => {
    if (!active()) setActive(tabLabels()[0]);
  });

  return (
    <Show when={active() === x.value}>
      <div role="tabpanel" aria-labelledby={`tab-${active()}`}>
        {x.children}
      </div>
    </Show>
  );
};

export const Tabs = (x: { children: any; defaultValue: string }) => {
  const [active, setActive] = createSignal(x.defaultValue);
  const [tabLabels, setTabLabels] = createSignal([]);

  const ctxValue: CtxProps = { active, setActive, tabLabels, setTabLabels };

  return <context.Provider value={ctxValue}>{x.children}</context.Provider>;
};
