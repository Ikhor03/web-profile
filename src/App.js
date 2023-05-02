import './App.css';
import { Carousel, Button, Form, Modal } from 'react-bootstrap'
import React, { useState } from 'react';



function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      {/* hero section */}
      <Carousel>
        <div className="position-relative callme">
          <p className="h1 position-absolute start-50 top-0 translate-middle fw-normal">INTERESTED IN - DESIGN GRAPHIC + WEB DEVELOPMENT + PHOTOGRAPHY + VIDEOGRAPHY</p>
          <h1 className="col-12 text-center h1 position-absolute start-50 top-50 translate-middle fs-sm-5">HI, CALL ME IKHOR!</h1>
          <div className="position-absolute start-50 translate-middle btn ">
            <Button variant='btn btn-outline-dark' onClick={handleShow}>Contact me</Button>
          </div>
        </div>
      </Carousel>

      {/* Quote */}
      <div className="container-fluid row text-wrap my-5 pt-3">
        <div className="col-2">
          <p className="fw-light text-black-50 
                  copy">&copy; MADE IN JAKARTA</p>
        </div>
        <div className="col-md-6 col-8 offset-md-2 text-md-end text-center">
          <p className="fs-5 lh-lg kata">
            The thing that makes me passionate about life is the realization that it's never too late to learn
            something new. Be grateful for any missed mistakes and move on with a plan to fix them.
          </p>
        </div>
      </div>

      {/* Portofolio cover */}

      <div className="row-12 position-relative photography">
        <h1 className="h1 position-absolute start-50 top-50 translate-middle text-white"><b>PHOTOGRAPHY</b></h1>
        <p className="align-items-sm-start align-items-center justify-content-center h1 text-white">
          <b>PHOTOGRAPHY</b>
        </p>
        <div className="position-absolute btn ">
          <a href="gallery.html">
            <button className="btn btn-outline-light">View Photos</button>
          </a>
        </div>
        <div className="bg-dark over-img d-none d-lg-block"></div>
      </div>


      {/* Inspire story */}
      <div className="container-fluid">
        <div className="col offset-1 mt-5">
          <h1 className="display-2 lh-1"><strong>INSPIRE <br /> +LIVE</strong></h1>
        </div>
      </div>

      <div className="position-relative mb-5">
        <div className="col-md-7 col-9 offset-md-4 offset-2">
          <p className="lh-lg kata">
            Starting when Ikhor was actively managing social media like Instagram, YouTube, and websites
            belonging to organizations on campus. Combined fact that his college major and career dreams didn't
            match made him stop moving, like the question about what to do after graduating. With his experience
            when he was active in campus organizations, taking time and struggling with himself, then decided to
            study web development to find a match with his passion and have a much brighter future in his
            professional career. Someone might think it's too late to learn something from scratch at 23. That
            might be true, but it would be more wrong if we didn't start anything, right? After all, the only
            thing that can stop us from chasing our dreams is death. Besides that, there is always time to rest
            or make new dreams and then achieve them.
          </p>
        </div>
        <div className="row">
          <div className="col-md-5 col-12 img-insipire bg-secondary shadow"></div>
          <div className="col-12 offset-4 offset-sm-5 col-md-3 offset-md-7 mt-5">
            <a href="about.html">
              <button className="btn btn-outline-dark ">About me</button>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container-fluid footer text-center">
        <span className="display-4 mb-0 mt-5">
          Let's meet on <a href="https://www.instagram.com/ikhor03/" target="_blank" rel="noreferrer" className="text-black">instagram</a>!
        </span>
        <p>Feel free to email me at <a href="mailto:imamkhoiri725@gmail.com"
          className="text-black">imamkhoiri725@gmail.com</a> for business inquiries</p>
      </div>
      <div className="containter-fluid bg-dark text-white-50 text-center p-3 footer">
        <p>
          made with love and coffee. &copy; 2022 Ikhor <br />
          original design inspired by <a href="https://burciaga.co/" className="text-white-50"
            target="_blank" rel="noreferrer">burciaga.co</a>
        </p>
      </div>

      {/* The Modal code from Contact me  */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Hello!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Your Name:</Form.Label>
              <input type="text" className="form-control" id="recipient-name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <input type="email" className="form-control" id="email" />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message:</Form.Label>
              <textarea className="form-control" id="message-text"></textarea>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="btn btn-outline-secondary" onClick={handleClose}>Close</Button>
          <Button variant="btn btn-dark" onClick={handleClose}>Send message</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Home;
