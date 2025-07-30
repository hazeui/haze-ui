import { Btn } from "@haze-ui/react";

export default () => {
  return (
    <>
      <Btn txt="Primary" class="btn-primary" />
      <Btn class="soft" txt="Soft" />
      <Btn class="btn-outline" txt="Outline" />
      <Btn class="btn-ghost" txt="Ghost" />
    </>
  );
};
