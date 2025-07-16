import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { proxy, useSnapshot } from "valtio";
import Btn from "haze-ui/button";

type pos =
  | "topleft"
  | "topmid"
  | "topright"
  | "botleft"
  | "botmid"
  | "botright";

interface ToastProps {
  id: string;
  txt: string;
  title: string;
  type?: "success" | "warning" | "error";
  pos?: pos;
  duration?: number;
}

type StoreProps = {
  [key in pos]: ToastProps[];
};

export const store = proxy<StoreProps>({
  topleft: [],
  topmid: [],
  topright: [],
  botleft: [],
  botmid: [],
  botright: [],
});

export const Toast = ({
  id,
  title,
  txt,
  type,
  duration = 3000,
  pos = "topmid",
}: ToastProps) => {
  useEffect(() => {
    setTimeout(() => {
      store[pos] = store[pos].filter((t) => t.id !== id);

      if (store[pos].length == 0) {
        document.getElementById("toasts-" + pos)?.remove();
      }
    }, duration);
  }, []);

  const bgs = {
    success: "bg-emerald",
  };

  return (
    <div className="min-w-md animate-(fade-in-up duration-300) bg-white shadow-lg rounded border-(1 solid border) grid gap3 p3 mb3">
      <b>{title}</b>
      <p className="!m0 text-zinc6">{txt}</p>
      <Btn
        iconL="i-pajamas:close"
        variant="ghost"
        className="size-sm p1 absolute right-3"
      />
    </div>
  );
};

const positionCss = {
  topright: "top-3 right-3",
  topleft: "top-3 left-3",
  botleft: "bottom-3 left-3",
  botright: "bottom-3 right-3",
  topmid: "top-3 left-1/2 -translate-x-1/2",
  botmid: "bottom-3 left-1/2 -translate-x-1/2",
};

export const ToastManager = ({ pos }: { pos: pos }) => {
  const list = useSnapshot(store)[pos];

  return (
    <>
      {list.map((t) => (
        <Toast {...t} key={t.id} />
      ))}
    </>
  );
};

export const createToast = (x: any) => {
  x.pos = x.pos || "topmid";
  const id = "toast-" + x.pos;
  let div = document.getElementById(id);

  if (!div) {
    div = document.createElement("div");
    div.id = id;
    div.className = "absolute " + positionCss[x.pos];
    document.body.appendChild(div);
    createRoot(div).render(<ToastManager pos={x.pos} />);
  }

  store[x.pos].push({ ...x, id: crypto.randomUUID() });
};
