import { NavLink } from "react-router-dom";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">MyBlog</div>
      <ul>
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
            Trang chủ
          </NavLink>
        </li>
        <li>
          <NavLink to="/create" className={({ isActive }) => isActive ? "active" : ""}>
            Viết bài mới
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
