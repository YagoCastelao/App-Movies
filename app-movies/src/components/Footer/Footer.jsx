import styles from "./Footer.module.css";
import { FaGithubSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
      <footer className={styles.footer}>
        <span>WhatFlix © Desenvolvido por Yago Cima Castelao 2024</span>
        <ul className={styles.social_list}>
          <li>
            <a
              href="https://github.com/YagoCastelao"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/yagocastelao/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/yagocimacastelao/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://x.com/yagocastelau"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter />
            </a>
          </li>
        </ul>
      </footer>
    );
};

export default Footer;