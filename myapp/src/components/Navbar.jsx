import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
  return (
    <nav>
      <div className={styles.navbar}>
        <div></div>
        <div>
          <GiHamburgerMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
