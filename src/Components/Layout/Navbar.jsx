import React, { useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const menu = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "/about-us",
    },
    {
      name: "Mini Projects",
      path: "/mini-projects",
    },
    {
      name: "Projects",
      path: "/projects",
    },
  ];

  useEffect(() => {
    setIsLoading(!isLoading);
  }, []);
  return (
    <header className="top-0 sticky bg-slate-800 text-white">
      <nav className="flex items-center justify-between md:w-10/12 mx-auto w-full md:px-0 px-6 py-2">
        <button
          className="bg-orange-100 text-4xl px-6 border-2 border-orange-500 text-orange-500 rounded-md shadow-md "
          style={{
            fontFamily: "Qwitcher Grypen",
            fontWeight: 700,
            fontStyle: "normal",
            boxShadow: "0 0 5px #ffedd5 ",
          }}
        >
          Amar
        </button>
        <div className="hidden md:flex gap-8 text-lg font-semibold">
          {menu.map((items, index) => {
            // let location = location.pathname;
            let isActive = location.pathname == items.path;
            return (
              <Link
                key={index}
                className={`${isActive ? "text-indigo-400" : "text-white"}`}
                to={items.path}
              >
                {items.name}
              </Link>
            );
          })}
        </div>

        <button
          className=" md:hidden text-3xl text-indigo-400
        "
        >
          <i className="ri-menu-4-line"></i>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
