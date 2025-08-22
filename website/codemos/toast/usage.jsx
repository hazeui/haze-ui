import { toast } from "@haze-ui/react";

const createToast = () => {
  toast({
    title: "Toast Activated",
    txt: "Customize this text to suit your message",
  });
};

export default () => {
  return (
    <button className="btn" onClick={createToast}>
      Show toast
    </button>
  );
};
