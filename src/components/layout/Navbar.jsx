import React from "react";
import Logo from "../shared/Logo";
import Link from "next/link";
import NavLink from "../shared/Navlink";

const Navbar = () => {
  const links = 
  <>
  <li><NavLink href="/">Home</NavLink></li>
  <li><NavLink href="/services">services</NavLink></li>
  <li><NavLink href="/about">About</NavLink></li>
  <li><NavLink href="/contact">Contact</NavLink></li>
  </>;
  return (
    <div>
      <div className="navbar max-w-[1200px] mx-auto bg-transparent">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content nav-li z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Logo />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex justify-between md:gap-4 items-center nav-li">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-transparent text-white font-bold">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
