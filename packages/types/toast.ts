export type posType =
  | "topleft"
  | "topmid"
  | "topright"
  | "botleft"
  | "botmid"
  | "botright";

export interface ToastObj {
  id?: string;
  txt: string;
  title: string;
  pos?: posType;
  duration?: number;
  css?: string;
  icon?: string;
}

export type ToastFnProps = Omit<ToastObj, "id">;
