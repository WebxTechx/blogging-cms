import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
    <section className="pt-4 pb-0 card-grid">
      <div className="container">
        <div className="row g-4">
          {/* Left big card */}
          <div className="col-lg-6">
            <div
              className="card card-overlay-bottom card-grid-lg card-bg-scale"
              style={{
                backgroundImage: 'url(assets/images/blog/1by1/01.jpg)',
                backgroundPosition: 'center left',
                backgroundSize: 'cover',
              }}
            >
              {/* Card featured */}
              <span className="card-featured" title="Featured post">
                <i className="fas fa-star" />
              </span>
              {/* Card Image overlay */}
              <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                <div className="w-100 mt-auto">
                  {/* Card category */}
                  <a href="#" className="badge text-bg-danger mb-2">
                    <i className="fas fa-circle me-2 small fw-bold" />
                    Lifestyle
                  </a>
                  {/* Card title */}
                  <h2 className="text-white h1">
                    <a
                      href="post-single-4.html"
                      className="btn-link stretched-link text-reset"
                    >
                      Ten tell-tale signs you need to get a new startup.
                    </a>
                  </h2>
                  <p className="text-white">
                    No visited raising gravity outward subject my cottage Mr be.
                    Hold do at tore in park feet near my case.{' '}
                  </p>
                  {/* Card info */}
                  <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                    <li className="nav-item">
                      <div className="nav-link">
                        <div className="d-flex align-items-center text-white position-relative">
                          <div className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              src="assets/images/avatar/11.jpg"
                              alt="avatar"
                            />
                          </div>
                          <span className="ms-3">
                            by{' '}
                            <a
                              href="#"
                              className="stretched-link text-reset btn-link"
                            >
                              Louis
                            </a>
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item">Nov 15, 2022</li>
                    <li className="nav-item">5 min read</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Right small cards */}
          <div className="col-lg-6">
            <div className="row g-4">
              {/* Card item START */}
              <div className="col-12">
                <div
                  className="card card-overlay-bottom card-grid-sm card-bg-scale"
                  style={{
                    backgroundImage: 'url(assets/images/blog/1by1/02.jpg)',
                    backgroundPosition: 'center left',
                    backgroundSize: 'cover',
                  }}
                >
                  {/* Card Image */}
                  {/* Card Image overlay */}
                  <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                    <div className="w-100 mt-auto">
                      {/* Card category */}
                      <a href="#" className="badge text-bg-warning mb-2">
                        <i className="fas fa-circle me-2 small fw-bold" />
                        Technology
                      </a>
                      {/* Card title */}
                      <h4 className="text-white">
                        <a
                          href="post-single-4.html"
                          className="btn-link stretched-link text-reset"
                        >
                          Best Pinterest boards for learning about business
                        </a>
                      </h4>
                      {/* Card info */}
                      <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                        <li className="nav-item position-relative">
                          <div className="nav-link">
                            by{' '}
                            <a
                              href="#"
                              className="stretched-link text-reset btn-link"
                            >
                              Bryan
                            </a>
                          </div>
                        </li>
                        <li className="nav-item">Aug 18, 2022</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card item END */}
              {/* Card item START */}
              <div className="col-md-6">
                <div
                  className="card card-overlay-bottom card-grid-sm card-bg-scale"
                  style={{
                    backgroundImage: 'url(assets/images/blog/1by1/03.jpg)',
                    backgroundPosition: 'center left',
                    backgroundSize: 'cover',
                  }}
                >
                  {/* Card Image overlay */}
                  <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                    <div className="w-100 mt-auto">
                      {/* Card category */}
                      <a href="#" className="badge text-bg-success mb-2">
                        <i className="fas fa-circle me-2 small fw-bold" />
                        Business
                      </a>
                      {/* Card title */}
                      <h4 className="text-white">
                        <a
                          href="post-single-4.html"
                          className="btn-link stretched-link text-reset"
                        >
                          Five intermediate guide to business
                        </a>
                      </h4>
                      {/* Card info */}
                      <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                        <li className="nav-item position-relative">
                          <div className="nav-link">
                            by{' '}
                            <a
                              href="#"
                              className="stretched-link text-reset btn-link"
                            >
                              Joan
                            </a>
                          </div>
                        </li>
                        <li className="nav-item">Jun 03, 2022</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card item END */}
              {/* Card item START */}
              <div className="col-md-6">
                <div
                  className="card card-overlay-bottom card-grid-sm card-bg-scale"
                  style={{
                    backgroundImage: 'url(assets/images/blog/1by1/04.jpg)',
                    backgroundPosition: 'center left',
                    backgroundSize: 'cover',
                  }}
                >
                  {/* Card Image overlay */}
                  <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                    <div className="w-100 mt-auto">
                      {/* Card category */}
                      <a href="#" className="badge text-bg-info mb-2">
                        <i className="fas fa-circle me-2 small fw-bold" />
                        Sports
                      </a>
                      {/* Card title */}
                      <h4 className="text-white">
                        <a
                          href="post-single-4.html"
                          className="btn-link stretched-link text-reset"
                        >
                          15 reasons to choose startup
                        </a>
                      </h4>
                      {/* Card info */}
                      <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                        <li className="nav-item position-relative">
                          <div className="nav-link">
                            by{' '}
                            <a
                              href="#"
                              className="stretched-link text-reset btn-link"
                            >
                              Amanda
                            </a>
                          </div>
                        </li>
                        <li className="nav-item">Jan 28, 2022</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card item END */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
