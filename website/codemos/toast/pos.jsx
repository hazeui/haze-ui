import { toast } from "@haze-ui/react";

const newToast = (position) => {
  toast({
    title: "Toast Activated",
    txt: "Customize this text to suit your message",
    pos: position,
  });
};

export default () => {
  return (
    <div className="flex flex-wrap gap-2">
      <button className="btn" onClick={() => newToast("topleft")}>
        Top left
      </button>

      <button className="btn" onClick={() => newToast("topmid")}>
        Top center
      </button>

      <button className="btn" onClick={() => newToast("topright")}>
        Top right
      </button>

      <button className="btn" onClick={() => newToast("botleft")}>
        Bottom left
      </button>

      <button className="btn" onClick={() => newToast("botmid")}>
        Bottom center
      </button>

      <button className="btn" onClick={() => newToast("botright")}>
        Bottom right
      </button>
    </div>
  );
};
