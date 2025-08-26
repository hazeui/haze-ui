export interface PassedProps {
  open: () => boolean;
  nested?:boolean;
  ref: HTMLButtonElement | null;
  toggleDropdown: () => void;
  closeDropdown: () => void;
}
