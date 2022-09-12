import React from "react";
import { Routes, Link, Route } from "react-router-dom";
import ProfileCopy from "../Profile/ProfileCopy";
import Users from "../Users/Users";
import Home from "../Home/Home";

const Menu = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/addUser"> Add User </Link>
          </li>
          <li>
            <Link to="/users"> User</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addUser" element={<ProfileCopy />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
};

export default Menu;
