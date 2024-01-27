import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="flex justify-between items-center p-8 px-24">
        <div className="text-3xl font-bold">
          <Link to="/">
            Edu<span className="text-blue-600">Cate</span>
          </Link>
        </div>
        <div className="flex gap-6 text-xl">
          <Link to="/ParentAwareness">Parent Awareness</Link>
          <Link to="/LastDay">LastDay</Link>
        </div>
        <div className="flex gap-6 text-2xl">
          <Link to="/login" className=" hover:text-blue-500">
            Login
          </Link>
          <Link to="/signup" className=" hover:text-blue-500">
            Signup
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
