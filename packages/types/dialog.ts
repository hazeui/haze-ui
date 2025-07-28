export interface DialogProps {
  open: boolean;
  close: () => void;
  closeIcon?: boolean;
  children: any;
}
