import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.navBar}>
      <Link className={styles.linkStyle} to="/">Streamy</Link>
      <div>
        <Link className={styles.linkStyle}  to="/">All Streams</Link>
      </div>
    </div>
  );
};

export default Header;
