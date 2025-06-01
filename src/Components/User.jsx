import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function User() {
  return (
    <div>
      <div className="flex flex-col w-1/2 m-auto mt-10 p-3 rounded-[2vw]">
        <Link
          className="p-3 bg-red-200 text-2xl mb-3 hover:bg-red-300"
          to="/user/john"
        >
          John
        </Link>
        <Link
          className="p-3 bg-red-200 text-2xl mb-3 hover:bg-red-300"
          to="/user/aysh"
        >
          Ayush
        </Link>
        <Link
          className="p-3 bg-red-200 text-2xl mb-3 hover:bg-red-300"
          to="/user/anubhav"
        >
          Anubhav
        </Link>
      </div>

      <hr />
      <Outlet />
    </div>
  );
}
