import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="pb-0">
      <div className="container">
        <hr />
        {/* Widgets START */}
        <div className="row pt-5">
          {/* Footer Widget */}
          <div className="col-md-6 col-lg-4 mb-4">
            <Image
              className="light-mode-item"
              src="/assets/images/logo.svg"
              alt="logo"
              width={100}
              height={60}
            />
            <Image
              className="dark-mode-item"
              src="/assets/images/logo-light.svg"
              alt="logo"
              width={100}
              height={60}
            />
            <p className="mt-3">
              The next-generation blog, news, and magazine theme for you to
              start sharing your stories today! This Bootstrap 5 based theme is
              ideal for all types of sites that deliver the news.
            </p>
            <div className="mt-4">
              ©2023{' '}
              <a
                href="https://www.webestica.com/"
                className="text-reset btn-link"
                target="_blank"
              >
                Webestica
              </a>
              . All rights reserved
            </div>
          </div>
          {/* Footer Widget */}
          <div className="col-md-6 col-lg-3 mb-4">
            <h5 className="mb-4">Navigation</h5>
            <div className="row">
              <div className="col-6">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link pt-0" href="#">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Style Guide
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Contact us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Get Theme
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Support
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link pt-0" href="#">
                      News
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Career{' '}
                      <span className="badge text-bg-danger ms-2">2 Job</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Technology
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Startups
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Gadgets
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Footer Widget */}
          <div className="col-sm-6 col-lg-3 mb-4">
            <h5 className="mb-4">Browse by Tag</h5>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#" className="btn btn-sm btn-primary-soft">
                  Travel
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="btn btn-sm btn-warning-soft">
                  Business
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="btn btn-sm btn-success-soft">
                  Tech
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="btn btn-sm btn-danger-soft">
                  Gadgets
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="btn btn-sm btn-info-soft">
                  Lifestyle
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="btn btn-sm btn-primary-soft">
                  Vaccine
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="btn btn-sm btn-warning-soft">
                  Marketing
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="btn btn-sm btn-success-soft">
                  Sports
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="btn btn-sm btn-danger-soft">
                  Covid-19
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="btn btn-sm btn-info-soft">
                  Politics
                </a>
              </li>
            </ul>
          </div>
          {/* Footer Widget */}
          <div className="col-sm-6 col-lg-2 mb-4">
            <h5 className="mb-4">Our Social handles</h5>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link pt-0" href="#">
                  <i className="fab fa-facebook-square fa-fw me-2 text-facebook" />
                  Facebook
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fab fa-twitter-square fa-fw me-2 text-twitter" />
                  Twitter
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fab fa-linkedin fa-fw me-2 text-linkedin" />
                  Linkedin
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fab fa-youtube-square fa-fw me-2 text-youtube" />
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Widgets END */}
      </div>
    </footer>
  )
}

export default Footer
