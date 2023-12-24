import React from "react";
import aboutImg from "../../../images/about.png";

const About: React.FC = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about">
          <h1>About Us</h1>
          <div className="about__block">
            <img src={aboutImg} alt="aboutImg" />
            <p>
              We believe that books have the power to change lives, and we're
              dedicated to helping our customers find the perfect book for them.
              Whether you're looking for an escape from reality, an educational
              read, or a book to inspire you, we've got you covered. <br/> Thank you
              for choosing to shop with us. We look forward to helping you
              discover your next favorite book! 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
