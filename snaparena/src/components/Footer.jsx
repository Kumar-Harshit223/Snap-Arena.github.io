import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="last">
        <div className="cen">
          <h4 className="cen">KUMAR HARSHIT</h4>
          <div>
            <img className="abtpic" src="images/me.jpg" />
          </div>
        </div>
        <Link to="/contact">
          <h4>Links</h4>
        </Link>
        <div className="flex">
          <p className="tog">
            <Link to="/about">About Me</Link>
          </p>
          <p className="tog">
            <Link to="/gallery">Work</Link>
          </p>
          <p className="tog">
            <Link to="/portfolio">Portfolio</Link>
          </p>
          <p className="tog">
            <Link to="/contact">Contact Me</Link>
          </p>
          <p className="tog">
            <Link to="https://www.instagram.com">Instagram</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
