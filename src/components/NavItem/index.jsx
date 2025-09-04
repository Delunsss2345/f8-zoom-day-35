import { NavLink } from "react-router";

const NavItem = ({ styles, path, children }) => {
  return (
    <li className={styles.navItem}>
      <NavLink to={path || "/"} className={styles.navLink}>
        {children}
      </NavLink>
    </li>
  );
};

export default NavItem;
