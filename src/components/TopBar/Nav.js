import React from "react";
import { NavLink } from "react-router-dom";
// import nav data
import { navData } from "../../data/data";

const Nav = () => {
  // destructure nav data
  const { items } = navData;
  return (
    <nav>
      <ul className="flex gap-x-[58px]">
        {items.map((item, index) => {
          return (
            <li key={index} className="font-medium uppercase">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "link hover:border-b-2 hover:border-dark transition duration-300"
                    : isActive
                    ? "link border-b-2 border-dark transition duration-300"
                    : ""
                }
                to={item.href}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
