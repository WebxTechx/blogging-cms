import Image from 'next/image';
import React from 'react';

const header = () => {
  return (
    <div className='d-lg-flex py-3'>
      <div className='flex-none'>
        <div className='input-group input-group-sm input-group-inline w-rem-64 rounded-pill'>
          <span className='input-group-text rounded-start-pill'>
            <i className='bi bi-search me-2' />{' '}
          </span>
          <input
            type='search'
            className='form-control ps-0 rounded-end-pill'
            placeholder='Search'
            aria-label='Search'
          />
        </div>
      </div>
      <div className='d-lg-none d-xxl-flex align-items-center gap-4 px-4 scrollable-x'>
        <div className='d-flex gap-2 text-xs'>
          <span className='text-heading fw-semibold'>Cryptos:</span>{' '}
          <span className='text-muted'>21,713</span>
        </div>
        <div className='d-flex gap-2 text-xs'>
          <span className='text-heading fw-semibold'>Market Cap:</span>{' '}
          <span className='text-muted'>$871,322,862,585</span>
        </div>
        <div className='d-flex gap-2 text-xs'>
          <span className='text-heading fw-semibold'>24h Vol:</span>{' '}
          <span className='text-muted'>$180,639,667,232</span>
        </div>
      </div>
      <div className='hstack flex-fill justify-content-end flex-nowrap gap-6 ms-auto px-6 px-xxl-8'>
        <button
          type='button'
          className='btn btn-xs btn-primary rounded-pill text-nowrap'
          data-bs-target='#connectWalletModal'
          data-bs-toggle='modal'
        >
          Connect
        </button>
        <div className='dropdown d-none'>
          <a
            href='#'
            className='nav-link'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            <i className='bi bi-sun-fill' />
          </a>
          <div className='dropdown-menu'>
            <button
              type='button'
              className='dropdown-item d-flex align-items-center active'
              data-bs-theme-value='light'
            >
              Light
            </button>{' '}
            <button
              type='button'
              className='dropdown-item d-flex align-items-center'
              data-bs-theme-value='dark'
            >
              Dark
            </button>
            <button
              type='button'
              className='dropdown-item d-flex align-items-center'
              data-bs-theme-value='auto'
            >
              System
            </button>
          </div>
        </div>
        <div className='dropdown'>
          <a
            href='#'
            className='nav-link'
            id='dropdown-notifications'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            <i className='bi bi-bell' />
          </a>
          <div
            className='dropdown-menu dropdown-menu-end px-2'
            aria-labelledby='dropdown-notifications'
          >
            <div className='dropdown-item d-flex align-items-center'>
              <h6 className='dropdown-header px-0'>Notifications</h6>
              <a href='#' className='text-sm fw-semibold ms-auto'>
                Clear all
              </a>
            </div>
            <div className='dropdown-item py-3 d-flex'>
              <div>
                <div className='avatar bg-primary text-white rounded-circle'>
                  RF
                </div>
              </div>
              <div className='flex-fill ms-3'>
                <div className='text-sm lg-snug w-rem-64 text-wrap'>
                  <a
                    href='#'
                    className='fw-semibold text-heading text-primary-hover'
                  >
                    Robert
                  </a>{' '}
                  sent a message to{' '}
                  <a
                    href='#'
                    className='fw-semibold text-heading text-primary-hover'
                  >
                    Webpixels
                  </a>
                </div>
                <span className='text-muted text-xs'>30 mins ago</span>
              </div>
            </div>
            <div className='dropdown-item py-3 d-flex'>
              <div>
                <Image
                  src='/assets/img/people/img-1.jpg'
                  className='avatar rounded-circle'
                  alt='...'
                  height={100}
                  width={100}
                />
              </div>
              <div className='flex-fill ms-3'>
                <div className='text-sm lg-snug w-rem-64 text-wrap'>
                  <a
                    href='#'
                    className='fw-semibold text-heading text-primary-hover'
                  >
                    Robert
                  </a>{' '}
                  sent a message to{' '}
                  <a
                    href='#'
                    className='fw-semibold text-heading text-primary-hover'
                  >
                    Webpixels
                  </a>
                </div>
                <span className='text-muted text-xs'>30 mins ago</span>
              </div>
            </div>
            <div className='dropdown-item py-3 d-flex'>
              <div>
                <Image
                  src='/assets/img/people/img-2.jpg'
                  className='avatar rounded-circle'
                  alt='...'
                  height={100}
                  width={100}
                />
              </div>
              <div className='flex-fill ms-3'>
                <div className='text-sm lg-snug w-rem-64 text-wrap'>
                  <a
                    href='#'
                    className='fw-semibold text-heading text-primary-hover'
                  >
                    Robert
                  </a>{' '}
                  sent a message to{' '}
                  <a
                    href='#'
                    className='fw-semibold text-heading text-primary-hover'
                  >
                    Webpixels
                  </a>
                </div>
                <span className='text-muted text-xs'>30 mins ago</span>
              </div>
            </div>
            <div className='dropdown-item py-3 d-flex'>
              <div>
                <div className='avatar bg-success text-white rounded-circle'>
                  KW
                </div>
              </div>
              <div className='flex-fill ms-3'>
                <div className='text-sm lg-snug w-rem-64 text-wrap'>
                  <a
                    href='#'
                    className='fw-semibold text-heading text-primary-hover'
                  >
                    Robert
                  </a>{' '}
                  sent a message to{' '}
                  <a
                    href='#'
                    className='fw-semibold text-heading text-primary-hover'
                  >
                    Webpixels
                  </a>
                </div>
                <span className='text-muted text-xs'>30 mins ago</span>
              </div>
            </div>
            <div className='dropdown-item py-3 d-flex'>
              <div>
                <Image
                  src='/assets/img/people/img-4.jpg'
                  className='avatar rounded-circle'
                  alt='...'
                  height={100}
                  width={100}
                />
              </div>
              <div className='flex-fill ms-3'>
                <div className='text-sm lg-snug w-rem-64 text-wrap'>
                  <a
                    href='#'
                    className='fw-semibold text-heading text-primary-hover'
                  >
                    Robert
                  </a>{' '}
                  sent a message to{' '}
                  <a
                    href='#'
                    className='fw-semibold text-heading text-primary-hover'
                  >
                    Webpixels
                  </a>
                </div>
                <span className='text-muted text-xs'>30 mins ago</span>
              </div>
            </div>
            <div className='dropdown-divider' />
            <div className='dropdown-item py-2 text-center'>
              <a href='#' className='fw-semibold text-muted text-primary-hover'>
                View all
              </a>
            </div>
          </div>
        </div>
        <div className='dropdown'>
          <a
            className='avatar avatar-sm text-bg-dark rounded-circle'
            href='#'
            role='button'
            data-bs-toggle='dropdown'
            aria-haspopup='false'
            aria-expanded='false'
          >
            {/* <img src='/assets/img/memoji/memoji-1.svg' /> */}
          </a>
          <div className='dropdown-menu dropdown-menu-end'>
            <div className='dropdown-header'>
              <span className='d-block text-sm text-muted mb-1'>
                Signed in as
              </span>{' '}
              <span className='d-block text-heading fw-semibold'>
                Alexis Enache
              </span>
            </div>
            <div className='dropdown-divider' />
            <a className='dropdown-item' href='#'>
              <i className='bi bi-house me-3' />
              Home{' '}
            </a>
            <a className='dropdown-item' href='#'>
              <i className='bi bi-pencil me-3' />
              Edit profile
            </a>
            <div className='dropdown-divider' />
            <a className='dropdown-item' href='#'>
              <i className='bi bi-gear me-3' />
              Settings{' '}
            </a>
            <a className='dropdown-item' href='#'>
              <i className='bi bi-image me-3' />
              Media{' '}
            </a>
            <a className='dropdown-item' href='#'>
              <i className='bi bi-box-arrow-up me-3' />
              Share
            </a>
            <div className='dropdown-divider' />
            <a className='dropdown-item' href='#'>
              <i className='bi bi-person me-3' />
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
