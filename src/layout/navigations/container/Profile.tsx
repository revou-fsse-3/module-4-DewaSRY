import { FC, HTMLAttributes, PropsWithChildren } from "react";
// import { Link } from "react-router-dom";
import Expand from "@common/Expanded";
// import Button, { ButtonTypes } from "@/common/Button";
import { FaRegUser } from "react-icons/fa";
import { CgNotes, CgLogIn } from "react-icons/cg";
import Link from "../components/Link";
interface ProfileProps extends HTMLAttributes<HTMLDivElement> {}
type ProfileComponents = FC<ProfileProps> & PropsWithChildren;
const Profile: ProfileComponents = ({ children, ...resProps }) => {
  return (
    <div
      {...resProps}
      className={
        " w-[15rem] " + ` ${resProps.className ? resProps.className : ""}`
      }
    >
      <Expand
        expended={
          <div
            className={
              "hover:brightness-90 transition-all " +
              "text-[3rem] absolute right-2 translate-y-[-20%]"
            }
          >
            <FaRegUser />
          </div>
        }
      >
        <div
          className={
            "w-full " +
            " absolute right-0 translate-y-14" +
            " bg-white text-right " +
            "border-b-[0.5rem] border-r-[0.5rem] border-gray-500 rounded-lg" +
            "  px-4  py-2 "
          }
        >
          <Link
            to={"/auth?mode=log-in"}
            className="flex gap-4 justify-end items-center"
          >
            <span className="inline">log In</span>
            <CgLogIn className="inline" />
          </Link>
          <Link
            to={"/auth?mode=sign-up"}
            className="flex gap-4 justify-end items-center"
          >
            <span>Sign Up </span>
            <CgNotes />
          </Link>
        </div>
      </Expand>
    </div>
  );
};

export default Profile;
