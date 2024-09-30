import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <footer className="py-5">
            <div className="row">
              <div className="col-6 col-md-2 mb-3">
                <h5 className="heading">Online Shopping</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">
                      Men
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">
                      Women
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">
                      Kids
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">
                      Gift Card
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">
                      Myntra Insider
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-6 col-md-2 mb-3">
                <h5 className="heading">CUSTOMER POLICIES</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">
                      Home
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">
                      Features
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">
                      FAQs
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">
                      About
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-6 col-md-2 mb-3">
                <h5 className="heading">USEFUL LINKS</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">
                      Career
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">
                      Site Map
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">
                      About
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-5 offset-md-1 mb-3">
                <form>
                  <h5>Subscribe to our newsletter</h5>
                  <p>Monthly digest of what's new and exciting from us.</p>
                  <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                    <label htmlFor="newsletter1" className="visually-hidden">
                      Email address
                    </label>
                    <input
                      id="newsletter1"
                      type="text"
                      className="form-control"
                      placeholder="Email address"
                    />
                    <button className="btn btn-primary" type="button">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
              <p>© 2024 Myntra Company, Inc. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </footer>
    </>
  );
};

export default Footer;
