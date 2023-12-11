import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="phone">
        <h1>Contact</h1>
        <a href="https://www.linkedin.com/in/sardor-kamoliddinov-6a0383250/" target="_blank">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/SardorKamoliddinov" target="_blank">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://www.instagram.com/s.kamoliddinov/" target="_blank">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="https://t.me/sardorkamoliddinov99" target="_blank">
          <i class="fa-brands fa-telegram"></i>
        </a>
        <a href="https://discord.com/login" target="_blank">
          <i class="fa-brands fa-discord"></i>
        </a>
        <a href="https://mail.google.com/mail/u/0/#sardorkamoliddinov99@gmail.com" target="_blank">
          <i class="fa-solid fa-envelope"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
