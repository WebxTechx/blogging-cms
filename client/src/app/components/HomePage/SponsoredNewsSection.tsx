import React from 'react'

const SponsoredNewsSection = () => {
  return (
    <section className="pt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* Title */}
            <div className="mb-4 d-md-flex justify-content-between align-items-center">
              <h2 className="m-0">
                <i className="bi bi-megaphone" /> Sponsored news
              </h2>
              <a href="#" className="text-body small">
                <u>Content by: Bootstrap</u>
              </a>
            </div>
            <div className="tiny-slider arrow-hover arrow-blur arrow-dark arrow-round">
              <div className="tns-outer" id="tns2-ow">
                <div
                  className="tns-liveregion tns-visually-hidden"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  slide <span className="current">17 to 20</span> of 5
                </div>
                <div id="tns2-mw" className="tns-ovh">
                  <div className="tns-inner" id="tns2-iw">
                    <div
                      className="tiny-slider-inner  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal"
                      data-autoplay="true"
                      data-hoverpause="true"
                      data-gutter={24}
                      data-arrow="true"
                      data-dots="false"
                      data-items-xl={4}
                      data-items-md={3}
                      data-items-sm={2}
                      data-items-xs={1}
                      id="tns2"
                      style={{ transform: 'translate3d(-76.1905%, 0px, 0px)' }}
                    >
                      <div
                        className="card tns-item tns-slide-cloned"
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        {/* Card img */}
                        <div className="position-relative">
                          <img
                            className="card-img"
                            src="assets/images/blog/4by3/09.jpg"
                            alt="Card image"
                          />
                          <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                            {/* Card overlay bottom */}
                            <div className="w-100 mt-auto">
                              <a
                                href="#"
                                className="badge text-bg-success mb-2"
                              >
                                <i className="fas fa-circle me-2 small fw-bold" />
                                Marketing
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-0 pt-3">
                          <h5 className="card-title">
                            <a
                              href="post-single-3.html"
                              className="btn-link text-reset fw-bold"
                            >
                              10 tell-tale signs you need to get a new business
                            </a>
                          </h5>
                          {/* Card info */}
                          <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                            <li className="nav-item">
                              <div className="nav-link">
                                <div className="d-flex align-items-center position-relative">
                                  <div className="avatar avatar-xs">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/images/avatar/09.jpg"
                                      alt="avatar"
                                    />
                                  </div>
                                  <span className="ms-3">
                                    by{' '}
                                    <a
                                      href="#"
                                      className="stretched-link text-reset btn-link"
                                    >
                                      Bryan
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li className="nav-item">Jun 01, 2022</li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="card tns-item tns-slide-cloned"
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        {/* Card img */}
                        <div className="position-relative">
                          <img
                            className="card-img"
                            src="assets/images/blog/4by3/10.jpg"
                            alt="Card image"
                          />
                          <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                            {/* Card overlay Top */}
                            <div className="w-100 mb-auto d-flex justify-content-end">
                              <div className="text-end ms-auto">
                                {/* Card format icon */}
                                <div
                                  className="icon-md bg-white-soft bg-blur text-white rounded-circle"
                                  title="This post has images"
                                >
                                  <i className="fas fa-image" />
                                </div>
                              </div>
                            </div>
                            {/* Card overlay bottom */}
                            <div className="w-100 mt-auto">
                              <a href="#" className="badge bg-primary mb-2">
                                <i className="fas fa-circle me-2 small fw-bold" />
                                Photography
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-0 pt-3">
                          <h5 className="card-title">
                            <a
                              href="post-single-3.html"
                              className="btn-link text-reset fw-bold"
                            >
                              This is why this year will be the year of startups
                            </a>
                          </h5>
                          {/* Card info */}
                          <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                            <li className="nav-item">
                              <div className="nav-link">
                                <div className="d-flex align-items-center position-relative">
                                  <div className="avatar avatar-xs">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/images/avatar/10.jpg"
                                      alt="avatar"
                                    />
                                  </div>
                                  <span className="ms-3">
                                    by{' '}
                                    <a
                                      href="#"
                                      className="stretched-link text-reset btn-link"
                                    >
                                      Samuel
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li className="nav-item">Dec 07, 2022</li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="card tns-item tns-slide-cloned"
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        {/* Card img */}
                        <div className="position-relative">
                          <img
                            className="card-img"
                            src="assets/images/blog/4by3/11.jpg"
                            alt="Card image"
                          />
                          <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                            {/* Card overlay bottom */}
                            <div className="w-100 mt-auto">
                              <a
                                href="#"
                                className="badge text-bg-warning mb-2"
                              >
                                <i className="fas fa-circle me-2 small fw-bold" />
                                Technology
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-0 pt-3">
                          <h5 className="card-title">
                            <a
                              href="post-single-3.html"
                              className="btn-link text-reset fw-bold"
                            >
                              Best Pinterest Boards for learning about business
                            </a>
                          </h5>
                          {/* Card info */}
                          <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                            <li className="nav-item">
                              <div className="nav-link">
                                <div className="d-flex align-items-center position-relative">
                                  <div className="avatar avatar-xs">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/images/avatar/12.jpg"
                                      alt="avatar"
                                    />
                                  </div>
                                  <span className="ms-3">
                                    by{' '}
                                    <a
                                      href="#"
                                      className="stretched-link text-reset btn-link"
                                    >
                                      Dennis
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li className="nav-item">Sep 07, 2022</li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="card tns-item tns-slide-cloned"
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        {/* Card img */}
                        <div className="position-relative">
                          <img
                            className="card-img"
                            src="assets/images/blog/4by3/07.jpg"
                            alt="Card image"
                          />
                          <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                            {/* Card overlay Top */}
                            <div className="w-100 mb-auto d-flex justify-content-end">
                              <div className="text-end ms-auto">
                                {/* Card format icon */}
                                <div
                                  className="icon-md bg-white bg-opacity-10 bg-blur text-white fw-bold rounded-circle"
                                  title="8.5 rating"
                                >
                                  8.5
                                </div>
                              </div>
                            </div>
                            {/* Card overlay bottom */}
                            <div className="w-100 mt-auto">
                              <a href="#" className="badge text-bg-info mb-2">
                                <i className="fas fa-circle me-2 small fw-bold" />
                                Marketing
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-0 pt-3">
                          <h5 className="card-title">
                            <a
                              href="post-single-3.html"
                              className="btn-link text-reset fw-bold"
                            >
                              7 common mistakes everyone makes while traveling
                            </a>
                          </h5>
                          {/* Card info */}
                          <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                            <li className="nav-item">
                              <div className="nav-link">
                                <div className="d-flex align-items-center position-relative">
                                  <div className="avatar avatar-xs">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/images/avatar/07.jpg"
                                      alt="avatar"
                                    />
                                  </div>
                                  <span className="ms-3">
                                    by{' '}
                                    <a
                                      href="#"
                                      className="stretched-link text-reset btn-link"
                                    >
                                      Lori
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li className="nav-item">Mar 07, 2022</li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="card tns-item tns-slide-cloned"
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        {/* Card img */}
                        <div className="position-relative">
                          <img
                            className="card-img"
                            src="assets/images/blog/4by3/08.jpg"
                            alt="Card image"
                          />
                          <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                            {/* Card overlay bottom */}
                            <div className="w-100 mt-auto">
                              <a href="#" className="badge text-bg-danger mb-2">
                                <i className="fas fa-circle me-2 small fw-bold" />
                                Sports
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-0 pt-3">
                          <h5 className="card-title">
                            <a
                              href="post-single-3.html"
                              className="btn-link text-reset fw-bold"
                            >
                              Skills that you can learn from business
                            </a>
                          </h5>
                          {/* Card info */}
                          <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                            <li className="nav-item">
                              <div className="nav-link">
                                <div className="d-flex align-items-center position-relative">
                                  <div className="avatar avatar-xs">
                                    <div className="avatar-img rounded-circle bg-warning">
                                      <span className="text-dark position-absolute top-50 start-50 translate-middle fw-bold small">
                                        MK
                                      </span>
                                    </div>
                                  </div>
                                  <span className="ms-3">
                                    by{' '}
                                    <a
                                      href="#"
                                      className="stretched-link text-reset btn-link"
                                    >
                                      Joan
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li className="nav-item">Aug 15, 2022</li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="card tns-item tns-slide-cloned"
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        {/* Card img */}
                        <div className="position-relative">
                          <img
                            className="card-img"
                            src="assets/images/blog/4by3/09.jpg"
                            alt="Card image"
                          />
                          <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                            {/* Card overlay bottom */}
                            <div className="w-100 mt-auto">
                              <a
                                href="#"
                                className="badge text-bg-success mb-2"
                              >
                                <i className="fas fa-circle me-2 small fw-bold" />
                                Marketing
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-0 pt-3">
                          <h5 className="card-title">
                            <a
                              href="post-single-3.html"
                              className="btn-link text-reset fw-bold"
                            >
                              10 tell-tale signs you need to get a new business
                            </a>
                          </h5>
                          {/* Card info */}
                          <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                            <li className="nav-item">
                              <div className="nav-link">
                                <div className="d-flex align-items-center position-relative">
                                  <div className="avatar avatar-xs">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/images/avatar/09.jpg"
                                      alt="avatar"
                                    />
                                  </div>
                                  <span className="ms-3">
                                    by{' '}
                                    <a
                                      href="#"
                                      className="stretched-link text-reset btn-link"
                                    >
                                      Bryan
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li className="nav-item">Jun 01, 2022</li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="card tns-item tns-slide-cloned"
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        {/* Card img */}
                        <div className="position-relative">
                          <img
                            className="card-img"
                            src="assets/images/blog/4by3/10.jpg"
                            alt="Card image"
                          />
                          <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                            {/* Card overlay Top */}
                            <div className="w-100 mb-auto d-flex justify-content-end">
                              <div className="text-end ms-auto">
                                {/* Card format icon */}
                                <div
                                  className="icon-md bg-white-soft bg-blur text-white rounded-circle"
                                  title="This post has images"
                                >
                                  <i className="fas fa-image" />
                                </div>
                              </div>
                            </div>
                            {/* Card overlay bottom */}
                            <div className="w-100 mt-auto">
                              <a href="#" className="badge bg-primary mb-2">
                                <i className="fas fa-circle me-2 small fw-bold" />
                                Photography
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-0 pt-3">
                          <h5 className="card-title">
                            <a
                              href="post-single-3.html"
                              className="btn-link text-reset fw-bold"
                            >
                              This is why this year will be the year of startups
                            </a>
                          </h5>
                          {/* Card info */}
                          <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                            <li className="nav-item">
                              <div className="nav-link">
                                <div className="d-flex align-items-center position-relative">
                                  <div className="avatar avatar-xs">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/images/avatar/10.jpg"
                                      alt="avatar"
                                    />
                                  </div>
                                  <span className="ms-3">
                                    by{' '}
                                    <a
                                      href="#"
                                      className="stretched-link text-reset btn-link"
                                    >
                                      Samuel
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li className="nav-item">Dec 07, 2022</li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="card tns-item tns-slide-cloned"
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        {/* Card img */}
                        <div className="position-relative">
                          <img
                            className="card-img"
                            src="assets/images/blog/4by3/11.jpg"
                            alt="Card image"
                          />
                          <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                            {/* Card overlay bottom */}
                            <div className="w-100 mt-auto">
                              <a
                                href="#"
                                className="badge text-bg-warning mb-2"
                              >
                                <i className="fas fa-circle me-2 small fw-bold" />
                                Technology
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-0 pt-3">
                          <h5 className="card-title">
                            <a
                              href="post-single-3.html"
                              className="btn-link text-reset fw-bold"
                            >
                              Best Pinterest Boards for learning about business
                            </a>
                          </h5>
                          {/* Card info */}
                          <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                            <li className="nav-item">
                              <div className="nav-link">
                                <div className="d-flex align-items-center position-relative">
                                  <div className="avatar avatar-xs">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/images/avatar/12.jpg"
                                      alt="avatar"
                                    />
                                  </div>
                                  <span className="ms-3">
                                    by{' '}
                                    <a
                                      href="#"
                                      className="stretched-link text-reset btn-link"
                                    >
                                      Dennis
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li className="nav-item">Sep 07, 2022</li>
                          </ul>
                        </div>
                      </div>
                      {/* Card item START */}
                      <div
                        className="card tns-item"
                        id="tns2-item0"
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        {/* Card img */}
                        <div className="position-relative">
                          <img
                            className="card-img"
                            src="assets/images/blog/4by3/07.jpg"
                            alt="Card image"
                          />
                          <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                            {/* Card overlay Top */}
                            <div className="w-100 mb-auto d-flex justify-content-end">
                              <div className="text-end ms-auto">
                                {/* Card format icon */}
                                <div
                                  className="icon-md bg-white bg-opacity-10 bg-blur text-white fw-bold rounded-circle"
                                  title="8.5 rating"
                                >
                                  8.5
                                </div>
                              </div>
                            </div>
                            {/* Card overlay bottom */}
                            <div className="w-100 mt-auto">
                              <a href="#" className="badge text-bg-info mb-2">
                                <i className="fas fa-circle me-2 small fw-bold" />
                                Marketing
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-0 pt-3">
                          <h5 className="card-title">
                            <a
                              href="post-single-3.html"
                              className="btn-link text-reset fw-bold"
                            >
                              7 common mistakes everyone makes while traveling
                            </a>
                          </h5>
                          {/* Card info */}
                          <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                            <li className="nav-item">
                              <div className="nav-link">
                                <div className="d-flex align-items-center position-relative">
                                  <div className="avatar avatar-xs">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/images/avatar/07.jpg"
                                      alt="avatar"
                                    />
                                  </div>
                                  <span className="ms-3">
                                    by{' '}
                                    <a
                                      href="#"
                                      className="stretched-link text-reset btn-link"
                                    >
                                      Lori
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li className="nav-item">Mar 07, 2022</li>
                          </ul>
                        </div>
                      </div>
                      {/* Card item END */}
                      {/* Card item START */}
                      <div
                        className="card tns-item"
                        id="tns2-item1"
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        {/* Card img */}
                        <div className="position-relative">
                          <img
                            className="card-img"
                            src="assets/images/blog/4by3/08.jpg"
                            alt="Card image"
                          />
                          <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                            {/* Card overlay bottom */}
                            <div className="w-100 mt-auto">
                              <a href="#" className="badge text-bg-danger mb-2">
                                <i className="fas fa-circle me-2 small fw-bold" />
                                Sports
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-0 pt-3">
                          <h5 className="card-title">
                            <a
                              href="post-single-3.html"
                              className="btn-link text-reset fw-bold"
                            >
                              Skills that you can learn from business
                            </a>
                          </h5>
                          {/* Card info */}
                          <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                            <li className="nav-item">
                              <div className="nav-link">
                                <div className="d-flex align-items-center position-relative">
                                  <div className="avatar avatar-xs">
                                    <div className="avatar-img rounded-circle bg-warning">
                                      <span className="text-dark position-absolute top-50 start-50 translate-middle fw-bold small">
                                        MK
                                      </span>
                                    </div>
                                  </div>
                                  <span className="ms-3">
                                    by{' '}
                                    <a
                                      href="#"
                                      className="stretched-link text-reset btn-link"
                                    >
                                      Joan
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li className="nav-item">Aug 15, 2022</li>
                          </ul>
                        </div>
                      </div>
                      {/* Card item END */}
                      {/* Card item START */}
                      <div
                        className="card tns-item"
                        id="tns2-item2"
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        {/* Card img */}
                        <div className="position-relative">
                          <img
                            className="card-img"
                            src="assets/images/blog/4by3/09.jpg"
                            alt="Card image"
                          />
                          <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                            {/* Card overlay bottom */}
                            <div className="w-100 mt-auto">
                              <a
                                href="#"
                                className="badge text-bg-success mb-2"
                              >
                                <i className="fas fa-circle me-2 small fw-bold" />
                                Marketing
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-0 pt-3">
                          <h5 className="card-title">
                            <a
                              href="post-single-3.html"
                              className="btn-link text-reset fw-bold"
                            >
                              10 tell-tale signs you need to get a new business
                            </a>
                          </h5>
                          {/* Card info */}
                          <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                            <li className="nav-item">
                              <div className="nav-link">
                                <div className="d-flex align-items-center position-relative">
                                  <div className="avatar avatar-xs">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/images/avatar/09.jpg"
                                      alt="avatar"
                                    />
                                  </div>
                                  <span className="ms-3">
                                    by{' '}
                                    <a
                                      href="#"
                                      className="stretched-link text-reset btn-link"
                                    >
                                      Bryan
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li className="nav-item">Jun 01, 2022</li>
                          </ul>
                        </div>
                      </div>
                      {/* Card item END */}
                      {/* Card item START */}
                      <div
                        className="card tns-item"
                        id="tns2-item3"
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        {/* Card img */}
                        <div className="position-relative">
                          <img
                            className="card-img"
                            src="assets/images/blog/4by3/10.jpg"
                            alt="Card image"
                          />
                          <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                            {/* Card overlay Top */}
                            <div className="w-100 mb-auto d-flex justify-content-end">
                              <div className="text-end ms-auto">
                                {/* Card format icon */}
                                <div
                                  className="icon-md bg-white-soft bg-blur text-white rounded-circle"
                                  title="This post has images"
                                >
                                  <i className="fas fa-image" />
                                </div>
                              </div>
                            </div>
                            {/* Card overlay bottom */}
                            <div className="w-100 mt-auto">
                              <a href="#" className="badge bg-primary mb-2">
                                <i className="fas fa-circle me-2 small fw-bold" />
                                Photography
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-0 pt-3">
                          <h5 className="card-title">
                            <a
                              href="post-single-3.html"
                              className="btn-link text-reset fw-bold"
                            >
                              This is why this year will be the year of startups
                            </a>
                          </h5>
                          {/* Card info */}
                          <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                            <li className="nav-item">
                              <div className="nav-link">
                                <div className="d-flex align-items-center position-relative">
                                  <div className="avatar avatar-xs">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/images/avatar/10.jpg"
                                      alt="avatar"
                                    />
                                  </div>
                                  <span className="ms-3">
                                    by{' '}
                                    <a
                                      href="#"
                                      className="stretched-link text-reset btn-link"
                                    >
                                      Samuel
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li className="nav-item">Dec 07, 2022</li>
                          </ul>
                        </div>
                      </div>
                      {/* Card item END */}
                      {/* Card item START */}
                      <div
                        className="card tns-item"
                        id="tns2-item4"
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        {/* Card img */}
                        <div className="position-relative">
                          <img
                            className="card-img"
                            src="assets/images/blog/4by3/11.jpg"
                            alt="Card image"
                          />
                          <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                            {/* Card overlay bottom */}
                            <div className="w-100 mt-auto">
                              <a
                                href="#"
                                className="badge text-bg-warning mb-2"
                              >
                                <i className="fas fa-circle me-2 small fw-bold" />
                                Technology
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-0 pt-3">
                          <h5 className="card-title">
                            <a
                              href="post-single-3.html"
                              className="btn-link text-reset fw-bold"
                            >
                              Best Pinterest Boards for learning about business
                            </a>
                          </h5>
                          {/* Card info */}
                          <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                            <li className="nav-item">
                              <div className="nav-link">
                                <div className="d-flex align-items-center position-relative">
                                  <div className="avatar avatar-xs">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/images/avatar/12.jpg"
                                      alt="avatar"
                                    />
                                  </div>
                                  <span className="ms-3">
                                    by{' '}
                                    <a
                                      href="#"
                                      className="stretched-link text-reset btn-link"
                                    >
                                      Dennis
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li className="nav-item">Sep 07, 2022</li>
                          </ul>
                        </div>
                      </div>
                      {/* Card item END */}
                      <div
                        className="card tns-item tns-slide-cloned"
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        {/* Card img */}
                        <div className="position-relative">
                          <img
                            className="card-img"
                            src="assets/images/blog/4by3/07.jpg"
                            alt="Card image"
                          />
                          <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                            {/* Card overlay Top */}
                            <div className="w-100 mb-auto d-flex justify-content-end">
                              <div className="text-end ms-auto">
                                {/* Card format icon */}
                                <div
                                  className="icon-md bg-white bg-opacity-10 bg-blur text-white fw-bold rounded-circle"
                                  title="8.5 rating"
                                >
                                  8.5
                                </div>
                              </div>
                            </div>
                            {/* Card overlay bottom */}
                            <div className="w-100 mt-auto">
                              <a href="#" className="badge text-bg-info mb-2">
                                <i className="fas fa-circle me-2 small fw-bold" />
                                Marketing
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-0 pt-3">
                          <h5 className="card-title">
                            <a
                              href="post-single-3.html"
                              className="btn-link text-reset fw-bold"
                            >
                              7 common mistakes everyone makes while traveling
                            </a>
                          </h5>
                          {/* Card info */}
                          <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                            <li className="nav-item">
                              <div className="nav-link">
                                <div className="d-flex align-items-center position-relative">
                                  <div className="avatar avatar-xs">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/images/avatar/07.jpg"
                                      alt="avatar"
                                    />
                                  </div>
                                  <span className="ms-3">
                                    by{' '}
                                    <a
                                      href="#"
                                      className="stretched-link text-reset btn-link"
                                    >
                                      Lori
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li className="nav-item">Mar 07, 2022</li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="card tns-item tns-slide-cloned"
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        {/* Card img */}
                        <div className="position-relative">
                          <img
                            className="card-img"
                            src="assets/images/blog/4by3/08.jpg"
                            alt="Card image"
                          />
                          <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                            {/* Card overlay bottom */}
                            <div className="w-100 mt-auto">
                              <a href="#" className="badge text-bg-danger mb-2">
                                <i className="fas fa-circle me-2 small fw-bold" />
                                Sports
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-0 pt-3">
                          <h5 className="card-title">
                            <a
                              href="post-single-3.html"
                              className="btn-link text-reset fw-bold"
                            >
                              Skills that you can learn from business
                            </a>
                          </h5>
                          {/* Card info */}
                          <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                            <li className="nav-item">
                              <div className="nav-link">
                                <div className="d-flex align-items-center position-relative">
                                  <div className="avatar avatar-xs">
                                    <div className="avatar-img rounded-circle bg-warning">
                                      <span className="text-dark position-absolute top-50 start-50 translate-middle fw-bold small">
                                        MK
                                      </span>
                                    </div>
                                  </div>
                                  <span className="ms-3">
                                    by{' '}
                                    <a
                                      href="#"
                                      className="stretched-link text-reset btn-link"
                                    >
                                      Joan
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li className="nav-item">Aug 15, 2022</li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="card tns-item tns-slide-cloned"
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        {/* Card img */}
                        <div className="position-relative">
                          <img
                            className="card-img"
                            src="assets/images/blog/4by3/09.jpg"
                            alt="Card image"
                          />
                          <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                            {/* Card overlay bottom */}
                            <div className="w-100 mt-auto">
                              <a
                                href="#"
                                className="badge text-bg-success mb-2"
                              >
                                <i className="fas fa-circle me-2 small fw-bold" />
                                Marketing
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-0 pt-3">
                          <h5 className="card-title">
                            <a
                              href="post-single-3.html"
                              className="btn-link text-reset fw-bold"
                            >
                              10 tell-tale signs you need to get a new business
                            </a>
                          </h5>
                          {/* Card info */}
                          <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                            <li className="nav-item">
                              <div className="nav-link">
                                <div className="d-flex align-items-center position-relative">
                                  <div className="avatar avatar-xs">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/images/avatar/09.jpg"
                                      alt="avatar"
                                    />
                                  </div>
                                  <span className="ms-3">
                                    by{' '}
                                    <a
                                      href="#"
                                      className="stretched-link text-reset btn-link"
                                    >
                                      Bryan
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li className="nav-item">Jun 01, 2022</li>
                          </ul>
                        </div>
                      </div>
                      <div className="card tns-item tns-slide-cloned tns-slide-active">
                        {/* Card img */}
                        <div className="position-relative">
                          <img
                            className="card-img"
                            src="assets/images/blog/4by3/10.jpg"
                            alt="Card image"
                          />
                          <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                            {/* Card overlay Top */}
                            <div className="w-100 mb-auto d-flex justify-content-end">
                              <div className="text-end ms-auto">
                                {/* Card format icon */}
                                <div
                                  className="icon-md bg-white-soft bg-blur text-white rounded-circle"
                                  title="This post has images"
                                >
                                  <i className="fas fa-image" />
                                </div>
                              </div>
                            </div>
                            {/* Card overlay bottom */}
                            <div className="w-100 mt-auto">
                              <a href="#" className="badge bg-primary mb-2">
                                <i className="fas fa-circle me-2 small fw-bold" />
                                Photography
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-0 pt-3">
                          <h5 className="card-title">
                            <a
                              href="post-single-3.html"
                              className="btn-link text-reset fw-bold"
                            >
                              This is why this year will be the year of startups
                            </a>
                          </h5>
                          {/* Card info */}
                          <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                            <li className="nav-item">
                              <div className="nav-link">
                                <div className="d-flex align-items-center position-relative">
                                  <div className="avatar avatar-xs">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/images/avatar/10.jpg"
                                      alt="avatar"
                                    />
                                  </div>
                                  <span className="ms-3">
                                    by{' '}
                                    <a
                                      href="#"
                                      className="stretched-link text-reset btn-link"
                                    >
                                      Samuel
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li className="nav-item">Dec 07, 2022</li>
                          </ul>
                        </div>
                      </div>
                      <div className="card tns-item tns-slide-cloned tns-slide-active">
                        {/* Card img */}
                        <div className="position-relative">
                          <img
                            className="card-img"
                            src="assets/images/blog/4by3/11.jpg"
                            alt="Card image"
                          />
                          <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                            {/* Card overlay bottom */}
                            <div className="w-100 mt-auto">
                              <a
                                href="#"
                                className="badge text-bg-warning mb-2"
                              >
                                <i className="fas fa-circle me-2 small fw-bold" />
                                Technology
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-0 pt-3">
                          <h5 className="card-title">
                            <a
                              href="post-single-3.html"
                              className="btn-link text-reset fw-bold"
                            >
                              Best Pinterest Boards for learning about business
                            </a>
                          </h5>
                          {/* Card info */}
                          <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                            <li className="nav-item">
                              <div className="nav-link">
                                <div className="d-flex align-items-center position-relative">
                                  <div className="avatar avatar-xs">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/images/avatar/12.jpg"
                                      alt="avatar"
                                    />
                                  </div>
                                  <span className="ms-3">
                                    by{' '}
                                    <a
                                      href="#"
                                      className="stretched-link text-reset btn-link"
                                    >
                                      Dennis
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li className="nav-item">Sep 07, 2022</li>
                          </ul>
                        </div>
                      </div>
                      <div className="card tns-item tns-slide-cloned tns-slide-active">
                        {/* Card img */}
                        <div className="position-relative">
                          <img
                            className="card-img"
                            src="assets/images/blog/4by3/07.jpg"
                            alt="Card image"
                          />
                          <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                            {/* Card overlay Top */}
                            <div className="w-100 mb-auto d-flex justify-content-end">
                              <div className="text-end ms-auto">
                                {/* Card format icon */}
                                <div
                                  className="icon-md bg-white bg-opacity-10 bg-blur text-white fw-bold rounded-circle"
                                  title="8.5 rating"
                                >
                                  8.5
                                </div>
                              </div>
                            </div>
                            {/* Card overlay bottom */}
                            <div className="w-100 mt-auto">
                              <a href="#" className="badge text-bg-info mb-2">
                                <i className="fas fa-circle me-2 small fw-bold" />
                                Marketing
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-0 pt-3">
                          <h5 className="card-title">
                            <a
                              href="post-single-3.html"
                              className="btn-link text-reset fw-bold"
                            >
                              7 common mistakes everyone makes while traveling
                            </a>
                          </h5>
                          {/* Card info */}
                          <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                            <li className="nav-item">
                              <div className="nav-link">
                                <div className="d-flex align-items-center position-relative">
                                  <div className="avatar avatar-xs">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/images/avatar/07.jpg"
                                      alt="avatar"
                                    />
                                  </div>
                                  <span className="ms-3">
                                    by{' '}
                                    <a
                                      href="#"
                                      className="stretched-link text-reset btn-link"
                                    >
                                      Lori
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li className="nav-item">Mar 07, 2022</li>
                          </ul>
                        </div>
                      </div>
                      <div className="card tns-item tns-slide-cloned tns-slide-active">
                        {/* Card img */}
                        <div className="position-relative">
                          <img
                            className="card-img"
                            src="assets/images/blog/4by3/08.jpg"
                            alt="Card image"
                          />
                          <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                            {/* Card overlay bottom */}
                            <div className="w-100 mt-auto">
                              <a href="#" className="badge text-bg-danger mb-2">
                                <i className="fas fa-circle me-2 small fw-bold" />
                                Sports
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-0 pt-3">
                          <h5 className="card-title">
                            <a
                              href="post-single-3.html"
                              className="btn-link text-reset fw-bold"
                            >
                              Skills that you can learn from business
                            </a>
                          </h5>
                          {/* Card info */}
                          <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                            <li className="nav-item">
                              <div className="nav-link">
                                <div className="d-flex align-items-center position-relative">
                                  <div className="avatar avatar-xs">
                                    <div className="avatar-img rounded-circle bg-warning">
                                      <span className="text-dark position-absolute top-50 start-50 translate-middle fw-bold small">
                                        MK
                                      </span>
                                    </div>
                                  </div>
                                  <span className="ms-3">
                                    by{' '}
                                    <a
                                      href="#"
                                      className="stretched-link text-reset btn-link"
                                    >
                                      Joan
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li className="nav-item">Aug 15, 2022</li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="card tns-item tns-slide-cloned"
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        {/* Card img */}
                        <div className="position-relative">
                          <img
                            className="card-img"
                            src="assets/images/blog/4by3/09.jpg"
                            alt="Card image"
                          />
                          <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                            {/* Card overlay bottom */}
                            <div className="w-100 mt-auto">
                              <a
                                href="#"
                                className="badge text-bg-success mb-2"
                              >
                                <i className="fas fa-circle me-2 small fw-bold" />
                                Marketing
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-0 pt-3">
                          <h5 className="card-title">
                            <a
                              href="post-single-3.html"
                              className="btn-link text-reset fw-bold"
                            >
                              10 tell-tale signs you need to get a new business
                            </a>
                          </h5>
                          {/* Card info */}
                          <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                            <li className="nav-item">
                              <div className="nav-link">
                                <div className="d-flex align-items-center position-relative">
                                  <div className="avatar avatar-xs">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/images/avatar/09.jpg"
                                      alt="avatar"
                                    />
                                  </div>
                                  <span className="ms-3">
                                    by{' '}
                                    <a
                                      href="#"
                                      className="stretched-link text-reset btn-link"
                                    >
                                      Bryan
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li className="nav-item">Jun 01, 2022</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tns-controls"
                  aria-label="Carousel Navigation"
                  tabIndex={0}
                >
                  <button
                    type="button"
                    data-controls="prev"
                    tabIndex={-1}
                    aria-controls="tns2"
                  >
                    <i className="fas fa-chevron-left" />
                  </button>
                  <button
                    type="button"
                    data-controls="next"
                    tabIndex={-1}
                    aria-controls="tns2"
                  >
                    <i className="fas fa-chevron-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SponsoredNewsSection
