import React,{useEffect} from "react";
// import "../styles/port.css";
import { Link } from "react-router-dom";

const Portfolio = () => {

  useEffect(() => {
    // Add the link element for the CSS file to the head of the document
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'styles/port.css';
    document.head.appendChild(link);

    // Define the cleanup function to remove the link element from the head of the document
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <>
      <div className="main">
        <header id="header" className="vh-100 flex">
          <div className="container2">
            <div className="header-content">
              <h1>
                I'm a<br />
                <span className="typewrite">
                  <span>Photographer</span>
                </span>
              </h1>
              <h4>Kumar Harshit</h4>
              <ul className="social-links">
                <li>
                  <Link to="#" className="flex">
                    <i className="fa fa-facebook-f" style={{ fontSize: 20 }} />
                  </Link>
                </li>
                <li>
                  <Link to="#" className="flex">
                    <i className="fa fa-instagram" style={{ fontSize: 20 }} />
                  </Link>
                </li>
                <li>
                  <Link to="#" className="flex">
                    <i className="fa fa-twitter" style={{ fontSize: 20 }} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <main>
          <section id="about" className="about py-7">
            <div className="container2">
              <div className="about-content grid">
                <div className="about-left">
                  <img src="images/aboutme.cms" alt="" />
                </div>
                <div className="about-right">
                  <div className="title">
                    <Link to="/contact">
                      <h3>About Me</h3>
                    </Link>
                  </div>
                  <p className="lead">
                    Professional Photographer Harshit combines his photography
                    degree with his marketing degree to find the right balance
                    between creativity and commercial. Harshit is also an
                    experienced all round photographer and he moved to India at
                    the end of 2020.
                  </p>
                  <p className="lead">
                    We can also checkout his recent works and experiences below.
                    He considers photography his passion more than profession.
                  </p>
                  <Link to="#work" className="btn-down">
                    <i className="arrow down" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section id="work" className="vh-100 flex py-7">
            <div className="container2">
              <div className="work-content">
                <div className="title">
                  <h3 className="yo">What am I doing?</h3>
                </div>
                <ul className="work-top grid">
                  <li className="yo">
                    We capture the moments, which you live.
                  </li>
                  <br />
                  <br />
                  <li className="yo">
                    We are available for weeding photography, travel, wildlife,
                    event, fashion, architectural and portrait photography.
                  </li>
                </ul>
                <div className="work-bottom grid">
                  <div>
                    <span className="icon">
                      <img className="img-grp" src="images/icon1.jpeg" />
                    </span>
                    <h4>Wildlife</h4>
                  </div>
                  <div>
                    <span className="icon">
                      <img className="img-grp" src="images/icon2.jpg" />
                    </span>
                    <h4>Travel</h4>
                  </div>
                  <div>
                    <span className="icon">
                      <img className="img-grp" src="images/icon3.jpg" />
                    </span>
                    <h4>Fashion</h4>
                  </div>
                  <div>
                    <span className="icon">
                      <img className="img-grp" src="images/icon4.jpg" />
                    </span>
                    <h4>Event</h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="portfolio" className="vh-100 py-7">
            <div className="container2">
              <div className="portfolio-content">
                <div className="title">
                  <Link to="/gallery">
                    <h3>My last work</h3>
                  </Link>
                  <Link to="/contact" className="btn-down" />
                </div>
                <div className="portfolio-grid grid">
                  <div>
                    <img src="images/po1.jpg" />
                  </div>
                  <div>
                    <img src="images/po2.jpg" />
                  </div>
                  <div>
                    <img src="images/po3.jpg" />
                  </div>
                  <div>
                    <img src="images/po4.jpg" />
                  </div>
                  <div>
                    <img src="images/po5.jpg" />
                  </div>
                  <div>
                    <img src="images/po7.jpg" />
                  </div>
                  <div>
                    <img src="images/po6.jpg" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="contact" className="py-7">
            <div className="container2">
              <div className="contact-content flex">
                <div className="contact-left">
                  <div className="title">
                    <Link to="contact.html">
                      <h3>Contact Me</h3>
                    </Link>
                  </div>
                  <p className="lead">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      fill="currentColor"
                      className="bi bi-telephone"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg>
                    +91-12345(67890)
                  </p>
                  <p className="lead">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      fill="currentColor"
                      className="bi bi-envelope"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                    </svg>{" "}
                    snaparena@gmail.com
                  </p>
                </div>
                <div className="contact-right">
                  <img src="images/contact.jpg" />
                </div>
              </div>
            </div>
          </section>
          <section id="insta" className="py-7">
            <div className="container2">
              <div className="insta-content">
                <div className="title">
                  <h3>Instagram</h3>
                </div>
                <div className="insta-grid grid">
                  <div>
                    <img src="images/display02.jpeg" />
                  </div>
                  <div>
                    <img src="images/po7.jpg" />
                  </div>
                  <div>
                    <img src="images/slide02.jpg" />
                  </div>
                  <div>
                    <img src="images/icon2.jpg" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Portfolio;
