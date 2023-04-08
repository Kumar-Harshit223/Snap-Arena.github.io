import React from 'react'
import "../styles/pic-vid.css"

const Photo = () => {
  return (
    <>
<div className="main">
  <div className="about-join">
    <h2>
      You're still here, which could only mean one thing, you saw something
      different.
    </h2>
    <p>
      You saw stories that you connected with. Honest photos that made you feel
      something…and while you've seen other photographers' work, this time you
      felt something real. You don't want traditional or posey…you want relaxed
      and genuine...or as we like to call it 'honest and unfussy'.
      <br />
      <br />
      You think having a proper dedicated team shoot your wedding is pretty damn
      awesome and if every guest at your wedding thought you were friends with
      your photographers that would be even awesome-er. Because you'll be
      relaxed in front of the camera knowing that everything is being captured.
      Not just how pretty the flowers are, but the raw moments when you saw your
      dad cry for the first time in years.
      <br />
      <br />
      You care about having timeless, artistic images that capture your day…and
      if it rains..it rains…and if the electricity goes out then you'll build a
      fire and light some candles.
      <br />
      <br />
      We think it's great that you care… because we want you to! We don't want
      you to book us because we're good or offer the best packages. We simply
      want you to have the best experience ever, and we offer it.
    </p>
  </div>
  <div className="fill-form">
    <div className="btwn">
      <form action="/index.html">
        <div className="form-group">
          <label htmlFor="exampleInputName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            placeholder="Enter First Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputNme">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputNme"
            placeholder="Enter Last Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputNum">Phone No.</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputNum"
            placeholder="Enter Phone No."
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInsta">Instagram Handel</label>
          <input
            type="text"
            className="form-control"
            id="exampleInsat"
            placeholder="Enter Instagram"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  </div>
  <div className="final-process">
    <h2>The Process</h2>
    <div className="blck">
      <h5>
        01
        <br />
        Reach Out
      </h5>
      <p>
        Fill out our inquiry form on our contact page and give us all the
        details about you, your fiancé, and your hopes for your wedding day!
      </p>
    </div>
    <div className="blck">
      <h5>
        02
        <br />
        Connect
      </h5>
      <p>
        We take a limited number of weddings each year. We're big believers in
        connection and making sure we're the best fit to serve you. If we're
        available for your date we'll give you a call to learn more!
      </p>
    </div>
    <div className="blck">
      <h5>
        03
        <br />
        Reserve Your Date
      </h5>
      <p>
        Feeling like this is a great fit? Let's celebrate! Once the contract is
        signed and the invoice is paid, your date will be locked in and reserved
        on our calendar! Easy as that!
      </p>
    </div>
    <div className="blck">
      <h5>
        04
        <br />
        Planning
      </h5>
      <p>
        We work hand in hand with you and your vendor team to create a relaxed,
        stress-free wedding day experience with simple questionnaires and convos
        around what's most important to you!
      </p>
    </div>
    <div className="blck">
      <h5>
        05
        <br />
        Wedding Weekend
      </h5>
      <p>
        We'll be with you every step of the way documenting you as you are...
        not as an awkward observer, but someone supporting your experience and
        giving your the gift of ease and joy!
      </p>
    </div>
    <div className="blck">
      <h5>
        06
        <br />
        Delivery &amp; Heirlooms
      </h5>
      <p>
        We'll deliver the fully edited (and gorgeous) online gallery for you to
        re-live all those incredible moments! The last and most exciting step is
        choosing and designing (together) your custom albums + prints to ensure
        your images are enjoyed for years to come!
      </p>
    </div>
  </div>
</div>

    </>
  )
}

export default Photo