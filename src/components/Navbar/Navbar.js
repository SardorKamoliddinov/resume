import React, { useState } from "react";
import "./Navbar.css";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const { t, i18n } = useTranslation();

  const changeLanguage = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Sardor Kamoliddinov</div>
        <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <a href="#home">{t("Home")}</a>
          <a href="#about">{t("About")}</a>
          <a href="#education">{t("Education")}</a>
          <a href="#skills">{t("Skills")}</a>
          <a href="#contact">{t("Contact")}</a>
          <a href="#certificate">{t("My certificate")}</a>
          <select name="Language" id="" onChange={changeLanguage}>
            <option value="en">English</option>
            <option value="uz">Uzbek</option>
            <option value="ru">Russian</option>
          </select>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
