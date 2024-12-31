import styles from "./Header.module.css";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <span>WhatFlix</span>
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/watch">Assistir</Link>
      </nav>
    </header>
  );
};

export default Header;
