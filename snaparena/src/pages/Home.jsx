import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {" "}
      <div className="main">
        <section className="sliders">
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src="images/slide03.webp"
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="images/slide02.jpg"
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="images/slides03.jpg"
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleFade"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleFade"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </section>
        <div className="slogan1">
          <p className="s1" text-align:center="">
            Capturing moments from today....Creating memories for a lifetime....
          </p>
        </div>
        <div className="scrol2">
          <p className="space2">
            We Capture the Moments That Captivate Your Heart....
          </p>
        </div>
        <main>
          <div className="info">
            <div className="abt">
              <h5>Snap/Arena</h5>
              <p className="s1">
                We've spent the last three to fours years of our lives closely
                connected to love. Capturing unique stories with our cameras,
                leaning into our faith, helping other photographers reignite
                their passion for photography, and doing our best to savor and
                celebrate life's small and big moments.
              </p>
            </div>
          </div>
        </main>
        <div className="feature">
          <div className="work">
            <Link to="/gallery">
              <h2>Featured Galleries</h2>
            </Link>
            <div className="container-img">
              <div className="blur-img">
                <Link to="/wildlife">
                  <img
                    className="img-grp"
                    id="one"
                    src="images/wild.jpg"
                    height="300px"
                  />
                </Link>
              </div>
              <div className="middle">
                <div className="text">Wildlife</div>
              </div>
            </div>
            <div className="container-img">
              <div className="blur-img">
                <Link to="/event">
                  <img
                    className="img-grp"
                    id="one"
                    src="images/event/e9.jpeg"
                    height="300px"
                  />
                </Link>
              </div>
              <div className="middle">
                <div className="text">Events</div>
              </div>
            </div>
            <div className="container-img">
              <div className="blur-img">
                <Link to="/landscape">
                  <img
                    className="img-grp"
                    id="one"
                    src="images/landscape.jpg"
                    height="300px"
                  />
                </Link>
              </div>
              <div className="middle">
                <div className="text">Landscape</div>
              </div>
            </div>
            <div className="container-img">
              <div className="blur-img">
                <Link to="/archi">
                  <img
                    className="img-grp"
                    id="one"
                    src="images/archi/a18.jpeg"
                    height="300px"
                  />
                </Link>
              </div>
              <div className="middle">
                <div className="text">Archeological</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container2">
          <div className="inline">
            <img src="images/inpic.jpg" width="500px" height="500px" />
          </div>
          <div className="inline">
            <h5>TESTIMONIALS</h5>
            <h2>
              "Hands down one of our best decisions in our wedding planning
              process!"
            </h2>
            <p>
              "Where do I even begin with these two!? Such amazing photographers
              - so amazing, we flew them into NYC from Nashville for our
              wedding. They are amazing at communicating their vision and
              aligning it with yours, and make sure it comes alive on your
              wedding day. They were patient and fun and personable, and felt
              more like friends than photographers on the big day. Their images
              are striking, being able to capture both beautiful posed shots as
              well as heartfelt candids. Truly amazing photos and we feel so
              lucky that they were there to capture such a great and memorable
              day."
            </p>
            <p className="mane">- HALEY &amp; TIM</p>
          </div>
        </div>
        <div className="overlap">
          <div>
            <div className="inline">
              <h5>OUE EXPERIENCES</h5>
              <h2>Let's keep the main thing the main thing</h2>
              <p>
                Our couples believe their wedding day shouldn't revolve around
                photos. Rather, their photos should revolve around their wedding
                day. We couldn't agree more.
              </p>
            </div>
            <div className="inline">
              <img src="images/exp.jpg" width="650px" height="400px" />
            </div>
          </div>
        </div>
        <div className="enquire">
          <div className="align">
            <h5>REACH US</h5>
            <Link to="/contact">
              <h2>Inquire With Us</h2>
            </Link>
            <p>
              We take a limited number of photoshoots each year to make sure
              we're the best fit for every one and allow us capacity to fully
              invest care, intention, and excitement into your day! To reserve
              your date, start here and share your story with us!
            </p>
            <Link to="/photo">
              <button className="but1">Reach Us</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
