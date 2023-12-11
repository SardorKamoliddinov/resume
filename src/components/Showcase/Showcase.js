import React from "react";
import "./Showcase.css";
import { useTranslation } from "react-i18next";
import { Navbar } from "./../Navbar/Navbar";

const Showcase = () => {
  const { t } = useTranslation();
  return (
    <div className="showcase">
      <div className="container">
        <h1>I am Sardor Kamoliddinov</h1>
        <p>
          {t(
            "I am a  Frontend Devoloper. I like dabbling in various parts of frontend devolopment and like to learn about new technologies. So, I participated parts of real project"
          )}
        </p>
        <hr />
        <a href="https://github.com/SardorKamoliddinov">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="#">
          <i class="fa-brands fa-discord"></i>
        </a>
        <a href="https://www.linkedin.com/in/sardor-kamoliddinov-6a0383250/">
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default Showcase;
