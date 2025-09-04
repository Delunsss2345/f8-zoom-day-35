import Container from "@/components/Container";
import NavItem from "@/components/NavItem";
import clsx from "clsx";
import { useState } from "react";
import styles from "./Navigation.module.css";
const navItems = [
  { name: "Home", path: "/" },
  { name: "Counter", path: "/counter" },
  { name: "Todo", path: "/todo" },
  { name: "Profile", path: "/profile" },
  { name: "Products", path: "/products" },
  { name: "Weather", path: "/weather" },
  { name: "CommentSystem", path: "/commentSystem" },
  { name: "Buttons", path: "/buttons" },
];
const Navigation = () => {
  const [clickMenu, setClickMenu] = useState();

  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.logo}>
          <img className={styles.logoImage} src="devHuy-logo.png" alt="" />
        </div>
        <div
          onClick={() => {
            setClickMenu(!clickMenu);
          }}
          className={styles.menuMinize}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z" />
          </svg>
        </div>
        <ul className={clsx(styles.navMenu, clickMenu ? styles.showMenu : "")}>
          {navItems.map((nav, index) => (
            <NavItem key={index} styles={styles} path={nav.path}>
              {nav.name}
            </NavItem>
          ))}
        </ul>
      </Container>
    </nav>
  );
};

export default Navigation;
