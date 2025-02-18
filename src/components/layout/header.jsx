import { NavLink } from "react-router-dom";
import "./header.css";
export const HeaderPage = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/users">Users</NavLink>
      </li>
      <li>
        <NavLink to="/products">Products</NavLink>
      </li>
    </ul>
  );
};
