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
    <div class="flex flex-wrap gap-2">
      <button class="btn" onClick={() => newToast("topleft")}>
        Top left
      </button>

      <button class="btn" onClick={() => newToast("topmid")}>
        Top center
      </button>

      <button class="btn" onClick={() => newToast("topright")}>
        Top right
      </button>

      <button class="btn" onClick={() => newToast("botleft")}>
        Bottom left
      </button>

      <button class="btn" onClick={() => newToast("botmid")}>
        Bottom center
      </button>

      <button class="btn" onClick={() => newToast("botright")}>
        Bottom right
      </button>
    </div>
  );
};
