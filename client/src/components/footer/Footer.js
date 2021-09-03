import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container">
      <footer className="footer">
        <nav>
          <a href="">내 친 소</a>
          <ul className="menu-ul">
            <li><a href="">랭킹</a></li>
            <li><a href="">최근 변경</a></li>
          </ul>
          <a href="">로그인</a>
        </nav>
      </footer>
    </div>
  )
};

export default Footer;
