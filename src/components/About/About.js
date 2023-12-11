import React from "react";
import "./About.css";
import Image from "./../../images/me.jpg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-all">
        <div className="image">
          <img src={Image} alt="" />
        </div>
        <div className="text">
          <h1>About Me</h1>
          <p>
            Between May 2022 and June 2023, I studied at Astrum IT Academy and
            learned several libraries and programming languages there. For
            example, html, css, bootstrap, javascript, react. During the study,
            we made a site mockup and made its back side, i.e. the dashboard.
            After graduation Astrum IT Academy, I studied Albison IT Academy and
            I practised html, css, bootstrap, javascript, react and I learned
            sass, Tailwind Css, uitkit, chartJS, nextJ, Material UI, Radix UI,
            Antd UI, Chakra UI. During the studied at Albison IT Academy I
            participated some project in dashboard. So, now I'm studying at Amity Universsity Tashkent Information Technology faculty.
          </p>
          <h1>Contact Details</h1>
          <p>
            +998 (90) 962-15-80 <br />
            Uzbek <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
