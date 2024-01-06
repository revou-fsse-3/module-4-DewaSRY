import { FC, AnchorHTMLAttributes, PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";
interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}
type LinkComponents = FC<LinkProps> & PropsWithChildren;
const Link: LinkComponents = ({ children, to, ...resProps }) => {
  return (
    <NavLink
      {...resProps}
      to={to}
      className={({ isActive, isPending }) =>
        ` ${isPending ? "  " : isActive ? "" : ""}` +
        ` ${resProps.className ? resProps.className : " "} ` +
        " text-black inline-block font-light text-2xl border-b-2 w-full " +
        "  hover:translate-x-[-5px] transition-all"
      }
    >
      {children}
    </NavLink>
  );
};

export default Link;
