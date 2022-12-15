import React from 'react';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
  return (
    <nav>
      <div className={styles.navbar}>
        <div></div>
        <div>Menu</div>
      </div>
    </nav>
  );
};

export default Navbar;
