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
  type?: "success" | "warning" | "error";
  pos?: posType;
  duration?: number;
}

export type ToastFnProps = Omit<ToastObj, "id">;
