import React from 'react'

type Props = {}

const Trending = (props: Props) => {
  return (
    <section className="py-2">
      <div className="container">
        <div className="row g-0">
          <div className="col-12 bg-primary bg-opacity-10 p-2 rounded">
            <div className="d-sm-flex align-items-center text-center text-sm-start">
              {/* Title */}
              <div className="me-3">
                <span className="badge bg-primary p-2 px-3">Trending:</span>
              </div>
              {/* Slider */}
              <div className="tiny-slider arrow-end arrow-xs arrow-white arrow-round arrow-md-none">
                <div className="tns-outer" id="tns1-ow">
                  <div
                    className="tns-liveregion tns-visually-hidden"
                    aria-live="polite"
                    aria-atomic="true"
                  >
                    slide <span className="current">4</span> of 3
                  </div>
                  <div id="tns1-mw" className="tns-ovh">
                    <div className="tns-inner" id="tns1-iw">
                      <div
                        className="tiny-slider-inner  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal"
                        data-autoplay="true"
                        data-hoverpause="true"
                        data-gutter={0}
                        data-arrow="true"
                        data-dots="false"
                        data-items={1}
                        id="tns1"
                        style={{ transform: 'translate3d(-60%, 0px, 0px)' }}
                      >
                        <div
                          className="tns-item tns-slide-cloned"
                          aria-hidden="true"
                          tabIndex={-1}
                        >
                          {' '}
                          <a href="#" className="text-reset btn-link">
                            The most common business debate isn't as black and
                            white as you might think{' '}
                          </a>
                        </div>
                        {/* Slider items */}
                        <div
                          className="tns-item"
                          id="tns1-item0"
                          aria-hidden="true"
                          tabIndex={-1}
                        >
                          {' '}
                          <a href="#" className="text-reset btn-link">
                            The most common business debate isn't as black and
                            white as you might think
                          </a>
                        </div>
                        <div
                          className="tns-item"
                          id="tns1-item1"
                          aria-hidden="true"
                          tabIndex={-1}
                        >
                          {' '}
                          <a href="#" className="text-reset btn-link">
                            How the 10 worst business fails of all time could
                            have been prevented{' '}
                          </a>
                        </div>
                        <div
                          className="tns-item tns-slide-active"
                          id="tns1-item2"
                        >
                          {' '}
                          <a href="#" className="text-reset btn-link">
                            The most common business debate isn't as black and
                            white as you might think{' '}
                          </a>
                        </div>
                        <div
                          className="tns-item tns-slide-cloned"
                          aria-hidden="true"
                          tabIndex={-1}
                        >
                          {' '}
                          <a href="#" className="text-reset btn-link">
                            The most common business debate isn't as black and
                            white as you might think
                          </a>
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
                      aria-controls="tns1"
                    >
                      <i className="fas fa-chevron-left" />
                    </button>
                    <button
                      type="button"
                      data-controls="next"
                      tabIndex={-1}
                      aria-controls="tns1"
                    >
                      <i className="fas fa-chevron-right" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{' '}
        {/* Row END */}
      </div>
    </section>
  )
}

export default Trending
