import Container from "@/components/Container";
import NavItem from "@/components/NavItem";
import styles from "./Navigation.module.css";
const navItems = [
  { name: "Home", path: "/" },
  { name: "Counter", path: "/counter" },
  { name: "Todo", path: "/todo" },
  { name: "Profile", path: "/profile" },
  { name: "Products", path: "/products" },
  { name: "Weather", path: "/weather" },
  { name: "Buttons", path: "/buttons" },
];
const Navigation = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.logo}>
          <img className={styles.logoImage} src="devHuy-logo.png" alt="" />
        </div>
        <ul className={styles.navMenu}>
          {navItems.map((nav, index) => (
            <NavItem key={index} styles={styles} path={nav.path}>
              {nav.name}
            </NavItem>
          ))}
        </ul>
        <div className={styles.authButtons}>
          <button className={styles.signInBtn}>Sign in</button>
          <button className={styles.registerBtn}>Register</button>
        </div>
      </Container>
    </nav>
  );
};

export default Navigation;
