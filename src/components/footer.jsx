import React from "react";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


export default class Footer extends React.Component {
    render() {
        return(
            <>
         <footer className="bg-dark text-light pt-4 pb-3 mt-5 px-4">
      <div className="container-fluid">
  <div className="row align-items-start">

    {/* About */}
    <div className="col-6 col-md-3 mb-3">
      <h5 className="mb-3 fw-semibold">Border Collie Kennel</h5>
      <p>
        We raise healthy, intelligent Border Collies with excellent
        temperament. Our puppies grow up in a loving environment.
      </p>
    </div>

    {/* Navigation */}
    <div className="col-6 col-md-3 mb-3 text-center">
      <h5 className="mb-3 fw-semibold">Navigation</h5>
      <ul className="list-unstyled">
  <li>
    <Link to="/" className="text-light text-decoration-none">Home</Link>
  </li>
  <li>
    <Link to="/about" className="text-light text-decoration-none">About Us</Link>
  </li>
  <li>
    <Link to="/contact" className="text-light text-decoration-none">Contacts</Link>
  </li>
</ul>
    </div>

    {/* Contacts */}
    <div className="col-6 col-md-3 mb-3">
      <h5 className="mb-3 fw-semibold">Contacts</h5>
      <p>Email: info@bordercollie.com</p>
      <p>Phone: +38 000 000 0000</p>
      <p>Ukraine</p>
    </div>

    {/* Follow us */}
    <div className="col-6 col-md-3 mb-3 text-md-end text-center">
      <h5 className="mb-3 fw-semibold">Follow us</h5>

      <div className="d-flex gap-3 mt-2 justify-content-md-end justify-content-center">
        <img src={instagram} alt="instagram" width={28}/>
        <img src={facebook} alt="facebook" width={28}/>
      </div>
    </div>

  </div>
  <hr className="border-light"/>

        <div className="text-center">
          © {new Date().getFullYear()} Border Collie Kennel. All rights reserved.
        </div>
</div>
    </footer>
           </>
        )
    }
}

