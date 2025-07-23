type PortalTarget = string | null | undefined;

const resolve = (t: PortalTarget): HTMLElement | null => {
  if (!t) return null;
  return typeof t === "string" ? document.querySelector<HTMLElement>(t) : t;
};

export function portal(node: HTMLElement, target: PortalTarget = "body") {
  resolve(target)?.appendChild(node);

  return {
    update: (newTarget: PortalTarget) => {
      if (newTarget !== target) {
        node.parentNode?.removeChild(node);
        resolve(newTarget)?.appendChild(node);
      }
    },
    destroy: () => {
      node.parentNode?.removeChild(node);
    },
  };
}
