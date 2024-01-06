import {
  FC,
  HTMLAttributes,
  PropsWithChildren,
  Fragment,
  useState,
  useRef,
  ReactNode,
} from "react";
import Panel from "./Panel";
interface indexProps extends HTMLAttributes<HTMLDivElement> {
  expended: ReactNode | string;
}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ children, expended, ...resProps }) => {
  const [expanded, setExpand] = useState(false);
  const divEl = useRef<HTMLDivElement | null>(null);
  const handleClick = () => {
    setExpand((prev) => !prev);
  };
  const handleClose = () => () => {
    setExpand(false);
  };

  return (
    <Fragment>
      <div ref={divEl}>
        <div
          className={
            "cursor-pointer outline-none w-full " +
            `${resProps.className ? resProps.className : ""}`
          }
          {...resProps}
          onClick={handleClick}
        >
          {expended}
        </div>
        {expanded ? (
          <Panel handleClose={handleClose()} parent={divEl.current!}>
            {children}
          </Panel>
        ) : null}
      </div>
    </Fragment>
  );
};

export default index;
