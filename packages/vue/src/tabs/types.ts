import type { Ref } from "vue";

export interface CtxProps {
  value: Ref<string>;
  tabLabels: Ref<string[]>;
  setValue: (x: string) => void;
  addTabLabel: (x: string) => void;
}
