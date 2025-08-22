import { Btn } from "@haze-ui/react";

export default () => {
  return (
    <>
      <Btn txt="Primary" className="btn-primary" />
      <Btn className="btn-soft" txt="Soft" />
      <Btn className="btn-outline" txt="Outline" />
      <Btn className="btn-ghost" txt="Ghost" />
    </>
  );
};
