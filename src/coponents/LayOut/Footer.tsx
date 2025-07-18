// components/Footer.tsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-5">
      <div className="container">
         {/* Logo and Social */}
          <div className="col-md-3 mb-4">
            <h4 className="fw-bold mb-3">
              <span style={{ fontFamily: "serif" }}>The</span>{" "}
              <span style={{ fontWeight: 900 }}>EXAMINER</span>
            </h4>
            <div className="d-flex gap-3">
              <a href="#" className="text-white fs-5"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white fs-5"><i className="bi bi-instagram"></i></a>
            </div>
          </div>
        <div className="row text-start">

         

          {/* Links */}
          <div className="col-md-2 mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Australian Community Media</h6>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-white-50 text-decoration-none">ACM Website</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Conditions of Use</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Privacy</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Terms – Digital</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Terms – Newspaper</a></li>
            </ul>
          </div>

          <div className="col-md-2 mb-4">
            <h6 className="text-uppercase fw-bold mb-3">The Examiner</h6>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-white-50 text-decoration-none">Contact</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Working With Us</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Today’s Paper</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Help Centre</a></li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Our Sites</h6>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-white-50 text-decoration-none">View</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Explore</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Bevo</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Cars</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Tributes</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Promo Codes</a></li>
            </ul>
          </div>

          <div className="col-md-2 mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Submit</h6>
            <a href="#" className="text-white-50 text-decoration-none small">Send a letter to the Editor</a>
          </div>
        </div>

        {/* Subscribe */}
        <div className="border-top border-secondary pt-4 mt-4">
          <h6 className="fw-bold">SUBSCRIBE TO THE EXAMINER</h6>
          <p className="small text-white-50">
            Stay updated with the latest news, sports, and community events in Launceston and around Tasmania.
          </p>
          <form className="d-flex gap-2 flex-column flex-sm-row">
            <input
              type="email"
              className="form-control bg-dark text-white border-secondary"
              placeholder="Enter your email"
            />
            <button type="submit" className="btn btn-danger">Subscribe</button>
          </form>
        </div>

        {/* Disclaimer */}
        <div className="text-white-50 small pt-4 mt-3 border-top border-secondary">
          <p>
           We collect information about the content (including advertisements) you interact with across this site. This helps us make advertising and content more relevant for you across the ACM network. You can find out more about our <span className="text-primary">conditions of use here.</span> Sometimes articles you engage with will help you find a product and make your shopping experience easier. We may receive compensation from affiliate partners if you choose to make a purchase through the links on our site.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
