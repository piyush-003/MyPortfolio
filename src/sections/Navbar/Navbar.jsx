import React, { useRef } from "react";
import styles from "./NavbarStyles.module.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { TfiMenuAlt } from "react-icons/tfi";
import { GrClose } from "react-icons/gr";
const Navbar = () => {
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className={styles.navbar}>
      <TfiMenuAlt onClick={openMenu} className={styles.open} />
      <ul ref={menuRef} className={styles.navmenu}>
        <GrClose onClick={closeMenu} className={styles.close} />
        <li>
          <AnchorLink className="anchor-link" href="#hero">
            <h3>Home</h3>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#projects">
            <h3>Projects</h3>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#skills">
            <h3>Skills</h3>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <h3>Contact</h3>
          </AnchorLink>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
