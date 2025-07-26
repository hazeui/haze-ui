import { Btn } from "@haze-ui/react";

export default () => {
  return (
    <div class="flex-(~ gap3 wrap) items-center brd p5 rounded">
      <Btn class="btn-success" txt="Success" />
      <Btn class="btn-warning" txt="Warning" />
      <Btn class="btn-danger" txt="danger" />
    </div>
  );
};
