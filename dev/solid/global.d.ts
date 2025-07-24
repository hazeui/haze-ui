import "solid-js";

declare module "solid-js" {
  namespace JSX {
    interface Directives {
      clickOutside: () => void;
      model: [() => any, (v: any) => any];
    }
  }
}
