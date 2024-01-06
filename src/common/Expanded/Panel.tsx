import { FC, HTMLAttributes, PropsWithChildren, useEffect } from "react";

interface PanelProps extends HTMLAttributes<HTMLDivElement> {
  parent: HTMLDivElement;
  handleClose: () => void;
}
type PanelComponents = FC<PanelProps> & PropsWithChildren;
const Panel: PanelComponents = ({
  children,
  parent,
  handleClose,
  ...resProps
}) => {
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (!parent) return;
      if (!parent.contains(event.target as HTMLElement)) {
        handleClose();
      }
    };
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);
  return (
    <div
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      {children}
    </div>
  );
};

export default Panel;
