import type { Ref, VNodeRef } from "vue";

export interface PassedProps {
  opened: Ref<boolean>;
  nested?: boolean;
  btnref: VNodeRef | undefined;
  toggleDropdown: () => void;
  closeDropdown: () => void;
}
