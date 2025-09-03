const NavItem = ({ styles, path, children }) => {
  return (
    <li className={styles.navItem}>
      <a href={path || "/"} className={styles.navLink}>
        {children}
      </a>
    </li>
  );
};

export default NavItem;
