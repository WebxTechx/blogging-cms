import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className='d-flex flex-column flex-lg-row h-lg-100 gap-1'>
        <nav
          className='flex-none navbar navbar-vertical navbar-expand-lg navbar-light bg-transparent show vh-lg-100 px-0 py-2'
          id='sidebar'
        >
          <div className='container-fluid px-3 px-md-4 px-lg-6'>
            <button
              className='navbar-toggler ms-n2'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#sidebarCollapse'
              aria-controls='sidebarCollapse'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon' />
            </button>{' '}
            <a
              className='navbar-brand d-inline-block py-lg-1 mb-lg-5'
              href='dashboard.html'
            >
              <img
                src='https://satoshi.webpixels.io/img/logos/logo-dark.svg'
                className='logo-dark h-rem-8 h-rem-md-10'
                alt='...'
              />{' '}
              <img
                src='https://satoshi.webpixels.io/img/logos/logo-light.svg'
                className='logo-light h-rem-8 h-rem-md-10'
                alt='...'
              />
            </a>
            <div className='navbar-user d-lg-none'>
              <div className='dropdown'>
                <a
                  className='d-flex align-items-center'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-haspopup='false'
                  aria-expanded='false'
                >
                  <div>
                    <div className='avatar avatar-sm text-bg-secondary rounded-circle'>
                      AE
                    </div>
                  </div>
                  <div className='d-none d-sm-block ms-3'>
                    <span className='h6'>Alexis</span>
                  </div>
                  <div className='d-none d-md-block ms-md-2'>
                    <i className='bi bi-chevron-down text-muted text-xs' />
                  </div>
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
            <div
              className='collapse navbar-collapse overflow-x-hidden'
              id='sidebarCollapse'
            >
              <ul className='navbar-nav'>
                <li className='nav-item my-1'>
                  <a
                    className='nav-link d-flex align-items-center rounded-pill active'
                    href='#sidebar-dashboards'
                    data-bs-toggle='collapse'
                    role='button'
                    aria-expanded='true'
                    aria-controls='sidebar-dashboards'
                  >
                    <i className='bi bi-house-fill' />
                    <span>Dashboards</span>{' '}
                    <span className='badge badge-sm rounded-pill me-n2 bg-success-subtle text-success ms-auto' />
                  </a>
                  <div className='collapse show' id='sidebar-dashboards'>
                    <ul className='nav nav-sm flex-column mt-1'>
                      <li className='nav-item'>
                        <a href='dashboard.html' className='nav-link fw-bold'>
                          Default
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a href='dashboard-analytics.html' className='nav-link'>
                          Analytics
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a href='dashboard-wallet.html' className='nav-link'>
                          Wallet
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className='nav-item my-1'>
                  <a
                    className='nav-link d-flex align-items-center rounded-pill'
                    href='#sidebar-pages'
                    data-bs-toggle='collapse'
                    role='button'
                    aria-expanded='false'
                    aria-controls='sidebar-pages'
                  >
                    <i className='bi bi-bar-chart-fill' /> <span>Pages</span>
                    <span className='badge badge-sm rounded-pill me-n2 bg-success-subtle text-success ms-auto' />
                  </a>
                  <div className='collapse' id='sidebar-pages'>
                    <ul className='nav nav-sm flex-column mt-1'>
                      <li className='nav-item'>
                        <a href='page-overview.html' className='nav-link'>
                          Overview
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a href='page-table-listing.html' className='nav-link'>
                          Table Listing
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a href='page-details.html' className='nav-link'>
                          Details
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a href='page-create-form.html' className='nav-link'>
                          Create Form
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a href='page-list.html' className='nav-link'>
                          Large List
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a href='page-checklist.html' className='nav-link'>
                          Checklist
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a href='page-collection.html' className='nav-link'>
                          Collection
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className='nav-item my-1'>
                  <a
                    className='nav-link d-flex align-items-center rounded-pill'
                    href='#sidebar-account'
                    data-bs-toggle='collapse'
                    role='button'
                    aria-expanded='false'
                    aria-controls='sidebar-account'
                  >
                    <i className='bi bi-gear-fill' /> <span>Account</span>
                    <span className='badge badge-sm rounded-pill me-n2 bg-success-subtle text-success ms-auto' />
                  </a>
                  <div className='collapse' id='sidebar-account'>
                    <ul className='nav nav-sm flex-column mt-1'>
                      <li className='nav-item'>
                        <a href='account-general.html' className='nav-link'>
                          Settings
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a href='account-password.html' className='nav-link'>
                          Password
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a href='account-billing.html' className='nav-link'>
                          Billing
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a
                          href='account-notifications.html'
                          className='nav-link'
                        >
                          Notifications
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a href='account-team.html' className='nav-link'>
                          Team
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a href='login.html' className='nav-link'>
                          Login
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a href='register.html' className='nav-link'>
                          Register
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className='nav-item my-1'>
                  <a
                    className='nav-link d-flex align-items-center rounded-pill'
                    href='#sidebar-other'
                    data-bs-toggle='collapse'
                    role='button'
                    aria-expanded='false'
                    aria-controls='sidebar-other'
                  >
                    <i className='bi bi-file-break-fill' /> <span>Other</span>
                    <span className='badge badge-sm rounded-pill me-n2 bg-success-subtle text-success ms-auto' />
                  </a>
                  <div className='collapse' id='sidebar-other'>
                    <ul className='nav nav-sm flex-column mt-1'>
                      <li className='nav-item'>
                        <a href='other-pricing.html' className='nav-link'>
                          Pricing Plans
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a href='terms.html' className='nav-link'>
                          Terms of Service
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a href='error.html' className='nav-link'>
                          Error Page
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a
                          href='https://satoshi.webpixels.io/index.html'
                          className='nav-link'
                        >
                          Landing Page
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <hr className='navbar-divider my-5 opacity-70' />
              <ul className='navbar-nav'>
                <li>
                  <span className='nav-link text-xs fw-semibold text-uppercase text-muted ls-wide'>
                    Resources
                  </span>
                </li>
                <li className='nav-item my-1'>
                  <a
                    className='nav-link d-flex align-items-center rounded-pill'
                    href='https://satoshi.webpixels.io/docs'
                  >
                    <i className='bi bi-book-fill' />
                    <span>Documentation</span>{' '}
                    <span className='badge badge-sm rounded-pill me-n2 bg-success-subtle text-success ms-auto' />
                  </a>
                </li>
                <li className='nav-item my-1'>
                  <a
                    className='nav-link d-flex align-items-center rounded-pill'
                    href='#sidebar-components'
                    data-bs-toggle='collapse'
                    role='button'
                    aria-expanded='false'
                    aria-controls='sidebar-components'
                  >
                    <i className='bi bi-grid-1x2-fill' />
                    <span>Components</span>{' '}
                    <span className='badge badge-sm rounded-pill me-n2 bg-success-subtle text-success ms-auto' />
                  </a>
                  <div className='collapse' id='sidebar-components'>
                    <ul className='nav nav-sm flex-column mt-1'>
                      <li className='nav-item'>
                        <a
                          href='https://satoshi.webpixels.io/docs/components.html#alerts'
                          className='nav-link'
                        >
                          Alerts
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a
                          href='https://satoshi.webpixels.io/docs/components.html#avatars'
                          className='nav-link'
                        >
                          Avatars
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a
                          href='https://satoshi.webpixels.io/docs/components.html#badges'
                          className='nav-link'
                        >
                          Badges
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a
                          href='https://satoshi.webpixels.io/docs/components.html#buttons'
                          className='nav-link'
                        >
                          Buttons
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a
                          href='https://satoshi.webpixels.io/docs/components.html#button-group'
                          className='nav-link'
                        >
                          Button Group
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a
                          href='https://satoshi.webpixels.io/docs/components.html#cards'
                          className='nav-link'
                        >
                          Cards
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a
                          href='https://satoshi.webpixels.io/docs/components.html#dropdowns'
                          className='nav-link'
                        >
                          Dropdowns
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a
                          href='https://satoshi.webpixels.io/docs/components.html#forms'
                          className='nav-link'
                        >
                          Forms
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a
                          href='https://satoshi.webpixels.io/docs/components.html#list-groups'
                          className='nav-link'
                        >
                          List Groups
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className='nav-item my-1'>
                  <a
                    className='nav-link d-flex align-items-center rounded-pill'
                    href='https://satoshi.webpixels.io/widgets.html'
                  >
                    <i className='bi bi-calendar2-plus-fill' />{' '}
                    <span>Widgets</span>{' '}
                    <span className='badge badge-sm rounded-pill me-n2 bg-warning-subtle text-warning ms-auto'>
                      🔥 Hot
                    </span>
                  </a>
                </li>
              </ul>
              <div className='mt-auto' />
              <div className='card bg-dark border-0 mt-5 mb-3'>
                <div className='card-body'>
                  <div className='vstack gap-4'>
                    <i className='bi bi-rocket-takeoff-fill text-white text-2xl' />
                    <p className='text-sm text-white text-opacity-70'>
                      Upgrade your account to Pro for even more examples.
                    </p>
                    <a
                      href='other-pricing.html'
                      className='btn btn-sm btn-primary w-100'
                    >
                      Upgade now
                      <i className='bi bi-arrow-right ms-2' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className='flex-lg-fill overflow-x-auto ps-lg-1 vstack vh-lg-100 position-relative'>
          <div className='d-none d-lg-flex py-3'>
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
                    className='dropdown-item d-flex align-items-center'
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
                      <img
                        src='../img/people/img-1.jpg'
                        className='avatar rounded-circle'
                        alt='...'
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
                      <img
                        src='../img/people/img-2.jpg'
                        className='avatar rounded-circle'
                        alt='...'
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
                      <img
                        src='../img/people/img-4.jpg'
                        className='avatar rounded-circle'
                        alt='...'
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
                    <a
                      href='#'
                      className='fw-semibold text-muted text-primary-hover'
                    >
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
                  <img src='https://satoshi.webpixels.io/img/memoji/memoji-1.svg' />
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
          <div className='flex-fill overflow-y-lg-auto scrollbar bg-body rounded-top-4 rounded-top-start-lg-4 rounded-top-end-lg-0 border-top border-lg shadow-2'>
            <main className='container-fluid px-3 py-5 p-lg-6 p-xxl-8'>
              <div className='mb-6 mb-xl-10'>
                <div className='row g-3 align-items-center'>
                  <div className='col'>
                    <h1 className='ls-tight'>Dashboard</h1>
                  </div>
                  <div className='col'>
                    <div className='hstack gap-2 justify-content-end'>
                      <button
                        type='button'
                        className='btn btn-sm btn-square btn-neutral rounded-circle d-xxl-none'
                        data-bs-toggle='offcanvas'
                        data-bs-target='#responsiveOffcanvas'
                        aria-controls='responsiveOffcanvas'
                      >
                        <i className='bi bi-three-dots' />
                      </button>
                      <button
                        type='button'
                        className='btn btn-sm btn-neutral d-none d-sm-inline-flex'
                        data-bs-target='#depositLiquidityModal'
                        data-bs-toggle='modal'
                      >
                        <span className='pe-2'>
                          <i className='bi bi-plus-circle' />
                        </span>
                        <span>Liquidity</span>
                      </button>{' '}
                      <a
                        href='page-overview.html'
                        className='btn d-inline-flex btn-sm btn-dark'
                      >
                        <span>Trade</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='modal fade'
                id='cryptoModal'
                tabIndex={-1}
                aria-labelledby='cryptoModalLabel'
                aria-hidden='true'
              >
                <div className='modal-dialog modal-dialog-centered'>
                  <div className='modal-content overflow-hidden'>
                    <div className='modal-header pb-0 border-0'>
                      <h1 className='modal-title h4' id='cryptoModalLabel'>
                        Select token
                      </h1>
                      <button
                        type='button'
                        className='btn-close'
                        data-bs-dismiss='modal'
                        aria-label='Close'
                      />
                    </div>
                    <div className='modal-body p-0'>
                      <div className='px-6 py-5 border-bottom'>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='Search token or paste address'
                          aria-label='Search'
                        />
                      </div>
                      <div className='p-2'>
                        <div className='vstack'>
                          <div className='position-relative d-flex gap-3 p-4 rounded bg-body-secondary-hover'>
                            <div className='icon flex-none'>
                              <img
                                src='https://satoshi.webpixels.io/img/crypto/color/btc.svg'
                                className='w-rem-10 h-rem-10'
                                alt='...'
                              />
                            </div>
                            <div className='d-flex flex-fill'>
                              <div className>
                                <a
                                  href='#'
                                  className='stretched-link text-heading fw-bold'
                                >
                                  BTC
                                </a>{' '}
                                <span className='d-block text-muted text-sm'>
                                  Bitcoin
                                </span>
                              </div>
                              <div className='ms-auto fw-bold text-heading'>
                                23.8
                              </div>
                            </div>
                          </div>
                          <div className='position-relative d-flex gap-3 p-4 rounded bg-body-secondary-hover'>
                            <div className='icon flex-none'>
                              <img
                                src='https://satoshi.webpixels.io/img/crypto/color/eth.svg'
                                className='w-rem-10 h-rem-10'
                                alt='...'
                              />
                            </div>
                            <div className='d-flex flex-fill'>
                              <div className>
                                <a
                                  href='#'
                                  className='stretched-link text-heading fw-bold'
                                >
                                  ETH
                                </a>{' '}
                                <span className='d-block text-muted text-sm'>
                                  Ethereum
                                </span>
                              </div>
                              <div className='ms-auto fw-bold text-heading'>
                                1.200,50
                              </div>
                            </div>
                          </div>
                          <div className='position-relative d-flex gap-3 p-4 rounded bg-body-secondary-hover'>
                            <div className='icon flex-none'>
                              <img
                                src='https://satoshi.webpixels.io/img/crypto/color/ada.svg'
                                className='w-rem-10 h-rem-10'
                                alt='...'
                              />
                            </div>
                            <div className='d-flex flex-fill'>
                              <div className>
                                <a
                                  href='#'
                                  className='stretched-link text-heading fw-bold'
                                >
                                  ADA
                                </a>{' '}
                                <span className='d-block text-muted text-sm'>
                                  Cardano
                                </span>
                              </div>
                              <div className='ms-auto fw-bold text-heading'>
                                10.930,00
                              </div>
                            </div>
                          </div>
                          <div className='position-relative d-flex gap-3 p-4 rounded bg-body-secondary-hover'>
                            <div className='icon flex-none'>
                              <img
                                src='https://satoshi.webpixels.io/img/crypto/color/bnb.svg'
                                className='w-rem-10 h-rem-10'
                                alt='...'
                              />
                            </div>
                            <div className='d-flex flex-fill'>
                              <div className>
                                <a
                                  href='#'
                                  className='stretched-link text-heading fw-bold'
                                >
                                  BNB
                                </a>{' '}
                                <span className='d-block text-muted text-sm'>
                                  Binance
                                </span>
                              </div>
                              <div className='ms-auto fw-bold text-heading'>
                                200
                              </div>
                            </div>
                          </div>
                          <div className='position-relative d-flex gap-3 p-4 rounded bg-body-secondary-hover'>
                            <div className='icon flex-none'>
                              <img
                                src='https://satoshi.webpixels.io/img/crypto/color/chain.svg'
                                className='w-rem-10 h-rem-10'
                                alt='...'
                              />
                            </div>
                            <div className='d-flex flex-fill'>
                              <div className>
                                <a
                                  href='#'
                                  className='stretched-link text-heading fw-bold'
                                >
                                  CHAIN
                                </a>{' '}
                                <span className='d-block text-muted text-sm'>
                                  Linkchain
                                </span>
                              </div>
                              <div className='ms-auto fw-bold text-heading'>
                                200
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='px-6 py-5 bg-body-secondary d-flex justify-content-center'>
                        <button className='btn btn-sm btn-dark'>
                          <i className='bi bi-gear me-2' />
                          Manage tokens
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row g-3 g-xxl-6'>
                <div className='col-xxl-8'>
                  <div className='vstack gap-3 gap-md-6'>
                    <div className='row g-3'>
                      <div className='col-md col-sm-6'>
                        <div className='card border-primary-hover'>
                          <div className='card-body p-4'>
                            <div className='d-flex align-items-center gap-2'>
                              <img
                                src='https://satoshi.webpixels.io/img/crypto/icon/btc.svg'
                                className='w-rem-5 flex-none'
                                alt='...'
                              />{' '}
                              <a
                                href='page-details.html'
                                className='h6 stretched-link'
                              >
                                BTC
                              </a>
                            </div>
                            <div className='text-sm fw-semibold mt-3'>
                              3.2893 USDT
                            </div>
                            <div className='d-flex align-items-center gap-2 mt-1 text-xs'>
                              <span className='badge badge-xs bg-success'>
                                <i className='bi bi-arrow-up-right' />{' '}
                              </span>
                              <span>+13.7%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-md col-sm-6'>
                        <div className='card border-primary-hover'>
                          <div className='card-body p-4'>
                            <div className='d-flex align-items-center gap-2'>
                              <img
                                src='https://satoshi.webpixels.io/img/crypto/icon/ada.svg'
                                className='w-rem-5 flex-none'
                                alt='...'
                              />{' '}
                              <a
                                href='page-details.html'
                                className='h6 stretched-link'
                              >
                                ADA
                              </a>
                            </div>
                            <div className='text-sm fw-semibold mt-3'>
                              10.745,49 ADA
                            </div>
                            <div className='d-flex align-items-center gap-2 mt-1 text-xs'>
                              <span className='badge badge-xs bg-danger'>
                                <i className='bi bi-arrow-up-right' />{' '}
                              </span>
                              <span>-3.2%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-md col-sm-6'>
                        <div className='card border-primary-hover'>
                          <div className='card-body p-4'>
                            <div className='d-flex align-items-center gap-2'>
                              <img
                                src='https://satoshi.webpixels.io/img/crypto/icon/eos.svg'
                                className='w-rem-5 flex-none'
                                alt='...'
                              />{' '}
                              <a
                                href='page-details.html'
                                className='h6 stretched-link'
                              >
                                EOS
                              </a>
                            </div>
                            <div className='text-sm fw-semibold mt-3'>
                              7.890,00 EOS
                            </div>
                            <div className='d-flex align-items-center gap-2 mt-1 text-xs'>
                              <span className='badge badge-xs bg-danger'>
                                <i className='bi bi-arrow-up-right' />{' '}
                              </span>
                              <span>-2.2%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-1 d-none d-md-block'>
                        <div className='card h-md-100 d-flex flex-column align-items-center justify-content-center py-4 bg-body-secondary bg-opacity-75 bg-opacity-100-hover'>
                          <a
                            href='#cryptoModal'
                            className='stretched-link text-body-secondary'
                            data-bs-toggle='modal'
                          >
                            <i className='bi bi-plus-lg' />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='card'>
                      <div className='card-body pb-0'>
                        <div className='d-flex justify-content-between align-items-center'>
                          <div>
                            <h5>Earnings</h5>
                          </div>
                          <div className='hstack align-items-center'>
                            <a href='#' className='text-muted'>
                              <i className='bi bi-arrow-repeat' />
                            </a>
                          </div>
                        </div>
                        <div className='mx-n4'>
                          <div id='chart-users' data-height={270} />
                        </div>
                      </div>
                    </div>
                    <div className='card'>
                      <div className='card-body pb-0'>
                        <div className='d-flex justify-content-between align-items-center'>
                          <div>
                            <h5>Transaction History</h5>
                          </div>
                          <div className='hstack align-items-center'>
                            <a href='#' className='text-muted'>
                              <i className='bi bi-arrow-repeat' />
                            </a>
                          </div>
                        </div>
                        <div className='list-group list-group-flush'>
                          <div className='list-group-item d-flex align-items-center justify-content-between gap-6'>
                            <div className='d-flex align-items-center gap-3'>
                              <div className='icon icon-shape rounded-circle icon-sm flex-none w-rem-10 h-rem-10 text-sm bg-primary bg-opacity-25 text-primary'>
                                <i className='bi bi-send-fill' />
                              </div>
                              <div className>
                                <span className='d-block text-heading text-sm fw-semibold'>
                                  Bitcoin
                                </span>
                                <span className='d-none d-sm-block text-muted text-xs'>
                                  2 days ago
                                </span>
                              </div>
                            </div>
                            <div className='d-none d-md-block text-sm'>
                              0xd029384sd343fd...eq23
                            </div>
                            <div className='d-none d-md-block'>
                              <span className='badge bg-body-secondary text-warning'>
                                Pending
                              </span>
                            </div>
                            <div className='text-end'>
                              <span className='d-block text-heading text-sm fw-bold'>
                                +0.2948 BTC
                              </span>
                              <span className='d-block text-muted text-xs'>
                                +$10,930.90
                              </span>
                            </div>
                          </div>
                          <div className='list-group-item d-flex align-items-center justify-content-between gap-6'>
                            <div className='d-flex align-items-center gap-3'>
                              <div className='icon icon-shape rounded-circle icon-sm flex-none w-rem-10 h-rem-10 text-sm bg-primary bg-opacity-25 text-primary'>
                                <i className='bi bi-send-fill' />
                              </div>
                              <div className>
                                <span className='d-block text-heading text-sm fw-semibold'>
                                  Cardano
                                </span>
                                <span className='d-none d-sm-block text-muted text-xs'>
                                  2 days ago
                                </span>
                              </div>
                            </div>
                            <div className='d-none d-md-block text-sm'>
                              0xd029384sd343fd...eq23
                            </div>
                            <div className='d-none d-md-block'>
                              <span className='badge bg-body-secondary text-danger'>
                                Canceled
                              </span>
                            </div>
                            <div className='text-end'>
                              <span className='d-block text-heading text-sm fw-bold'>
                                +0.2948 BTC
                              </span>
                              <span className='d-block text-muted text-xs'>
                                +$10,930.90
                              </span>
                            </div>
                          </div>
                          <div className='list-group-item d-flex align-items-center justify-content-between gap-6'>
                            <div className='d-flex align-items-center gap-3'>
                              <div className='icon icon-shape rounded-circle icon-sm flex-none w-rem-10 h-rem-10 text-sm bg-primary bg-opacity-25 text-primary'>
                                <i className='bi bi-send-fill' />
                              </div>
                              <div className>
                                <span className='d-block text-heading text-sm fw-semibold'>
                                  Binance
                                </span>
                                <span className='d-none d-sm-block text-muted text-xs'>
                                  2 days ago
                                </span>
                              </div>
                            </div>
                            <div className='d-none d-md-block text-sm'>
                              0xd029384sd343fd...eq23
                            </div>
                            <div className='d-none d-md-block'>
                              <span className='badge bg-body-secondary text-success'>
                                Successful
                              </span>
                            </div>
                            <div className='text-end'>
                              <span className='d-block text-heading text-sm fw-bold'>
                                +0.2948 BTC
                              </span>
                              <span className='d-block text-muted text-xs'>
                                +$10,930.90
                              </span>
                            </div>
                          </div>
                          <div className='list-group-item d-flex align-items-center justify-content-between gap-6'>
                            <div className='d-flex align-items-center gap-3'>
                              <div className='icon icon-shape rounded-circle icon-sm flex-none w-rem-10 h-rem-10 text-sm bg-primary bg-opacity-25 text-primary'>
                                <i className='bi bi-send-fill' />
                              </div>
                              <div className>
                                <span className='d-block text-heading text-sm fw-semibold'>
                                  Bitcoin
                                </span>
                                <span className='d-none d-sm-block text-muted text-xs'>
                                  2 days ago
                                </span>
                              </div>
                            </div>
                            <div className='d-none d-md-block text-sm'>
                              0xd029384sd343fd...eq23
                            </div>
                            <div className='d-none d-md-block'>
                              <span className='badge bg-body-secondary text-warning'>
                                Pending
                              </span>
                            </div>
                            <div className='text-end'>
                              <span className='d-block text-heading text-sm fw-bold'>
                                +0.2948 BTC
                              </span>
                              <span className='d-block text-muted text-xs'>
                                +$10,930.90
                              </span>
                            </div>
                          </div>
                          <div className='list-group-item d-flex align-items-center justify-content-between gap-6'>
                            <div className='d-flex align-items-center gap-3'>
                              <div className='icon icon-shape rounded-circle icon-sm flex-none w-rem-10 h-rem-10 text-sm bg-primary bg-opacity-25 text-primary'>
                                <i className='bi bi-send-fill' />
                              </div>
                              <div className>
                                <span className='d-block text-heading text-sm fw-semibold'>
                                  Bitcoin
                                </span>
                                <span className='d-none d-sm-block text-muted text-xs'>
                                  2 days ago
                                </span>
                              </div>
                            </div>
                            <div className='d-none d-md-block text-sm'>
                              0xd029384sd343fd...eq23
                            </div>
                            <div className='d-none d-md-block'>
                              <span className='badge bg-body-secondary text-danger'>
                                Canceled
                              </span>
                            </div>
                            <div className='text-end'>
                              <span className='d-block text-heading text-sm fw-bold'>
                                +0.2948 BTC
                              </span>
                              <span className='d-block text-muted text-xs'>
                                +$10,930.90
                              </span>
                            </div>
                          </div>
                          <div className='list-group-item d-flex align-items-center justify-content-between gap-6'>
                            <div className='d-flex align-items-center gap-3'>
                              <div className='icon icon-shape rounded-circle icon-sm flex-none w-rem-10 h-rem-10 text-sm bg-primary bg-opacity-25 text-primary'>
                                <i className='bi bi-send-fill' />
                              </div>
                              <div className>
                                <span className='d-block text-heading text-sm fw-semibold'>
                                  Bitcoin
                                </span>
                                <span className='d-none d-sm-block text-muted text-xs'>
                                  2 days ago
                                </span>
                              </div>
                            </div>
                            <div className='d-none d-md-block text-sm'>
                              0xd029384sd343fd...eq23
                            </div>
                            <div className='d-none d-md-block'>
                              <span className='badge bg-body-secondary text-success'>
                                Successful
                              </span>
                            </div>
                            <div className='text-end'>
                              <span className='d-block text-heading text-sm fw-bold'>
                                +0.2948 BTC
                              </span>
                              <span className='d-block text-muted text-xs'>
                                +$10,930.90
                              </span>
                            </div>
                          </div>
                          <div className='list-group-item d-flex align-items-center justify-content-between gap-6'>
                            <div className='d-flex align-items-center gap-3'>
                              <div className='icon icon-shape rounded-circle icon-sm flex-none w-rem-10 h-rem-10 text-sm bg-primary bg-opacity-25 text-primary'>
                                <i className='bi bi-send-fill' />
                              </div>
                              <div className>
                                <span className='d-block text-heading text-sm fw-semibold'>
                                  Bitcoin
                                </span>
                                <span className='d-none d-sm-block text-muted text-xs'>
                                  2 days ago
                                </span>
                              </div>
                            </div>
                            <div className='d-none d-md-block text-sm'>
                              0xd029384sd343fd...eq23
                            </div>
                            <div className='d-none d-md-block'>
                              <span className='badge bg-body-secondary text-success'>
                                Successful
                              </span>
                            </div>
                            <div className='text-end'>
                              <span className='d-block text-heading text-sm fw-bold'>
                                +0.2948 BTC
                              </span>
                              <span className='d-block text-muted text-xs'>
                                +$10,930.90
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xxl-4'>
                  <div
                    className='offcanvas-xxl m-xxl-0 rounded-sm-4 rounded-xxl-0 offcanvas-end overflow-hidden m-sm-4'
                    tabIndex={-1}
                    id='responsiveOffcanvas'
                    aria-labelledby='responsiveOffcanvasLabel'
                  >
                    <div className='offcanvas-header rounded-top-4 bg-light'>
                      <h5
                        className='offcanvas-title'
                        id='responsiveOffcanvasLabel'
                      >
                        Quick Stats
                      </h5>
                      <button
                        type='button'
                        className='btn-close'
                        data-bs-dismiss='offcanvas'
                        data-bs-target='#responsiveOffcanvas'
                        aria-label='Close'
                      />
                    </div>
                    <div className='offcanvas-body d-flex flex-column p-3 p-sm-6 p-xxl-0 gap-3 gap-xxl-6'>
                      <div className='vstack gap-6 gap-xxl-6'>
                        <div className='card border-0 border-xxl'>
                          <div className='card-body d-flex flex-column p-0 p-xxl-6'>
                            <div className='d-flex justify-content-between align-items-center mb-3'>
                              <div>
                                <h5>Balance</h5>
                              </div>
                              <div>
                                <span className='text-heading fw-bold'>
                                  <i className='bi bi-arrow-up me-2' />
                                  7.8%
                                </span>
                              </div>
                            </div>
                            <div className='text-2xl fw-bolder text-heading ls-tight'>
                              23.863,21 USDT
                            </div>
                            <div className='d-flex align-items-center justify-content-between mt-8'>
                              <div className>
                                <div className='d-flex gap-3 align-items-center'>
                                  <div className='icon icon-sm icon-shape text-sm rounded-circle bg-dark text-success'>
                                    <i className='bi bi-arrow-down' />
                                  </div>
                                  <span className='h6 fw-semibold text-muted'>
                                    Income
                                  </span>
                                </div>
                                <div className='fw-bold text-heading mt-3'>
                                  $23.863,21 USD
                                </div>
                              </div>
                              <span className='vr bg-dark bg-opacity-10' />
                              <div className>
                                <div className='d-flex gap-3 align-items-center'>
                                  <div className='icon icon-sm icon-shape text-sm rounded-circle bg-dark text-danger'>
                                    <i className='bi bi-arrow-up' />
                                  </div>
                                  <span className='h6 fw-semibold text-muted'>
                                    Expenses
                                  </span>
                                </div>
                                <div className='fw-bold text-heading mt-3'>
                                  $5.678,45 USD
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr className='my-0 d-xxl-none' />
                        <div className='card border-0 border-xxl'>
                          <div className='card-body p-0 p-xxl-6'>
                            <div className='d-flex justify-content-between align-items-center mb-5'>
                              <div>
                                <h5>Staking rewards</h5>
                              </div>
                              <div className='hstack align-items-center'>
                                <a href='#' className='text-muted'>
                                  <i className='bi bi-arrow-repeat' />
                                </a>
                              </div>
                            </div>
                            <div className='vstack gap-1'>
                              <div className='d-flex bg-body-secondary gap-3 rounded-3 p-4'>
                                <div className='w-rem-8 h-rem-8 flex-none'>
                                  <img
                                    src='https://satoshi.webpixels.io/img/crypto/icon/ada.svg'
                                    alt='...'
                                  />
                                </div>
                                <div className='vstack gap-2'>
                                  <div className='d-flex mb-1'>
                                    <div className>
                                      <span className='d-block text-heading text-sm fw-semibold'>
                                        Staked ADA
                                      </span>{' '}
                                      <span className='d-block text-muted text-xs'>
                                        25% APR
                                      </span>
                                    </div>
                                    <div className='ms-auto d-block text-heading text-sm fw-semibold'>
                                      1030 ADA
                                    </div>
                                  </div>
                                  <div className='progress bg-body-tertiary'>
                                    <div
                                      className='progress-bar bg-primary'
                                      role='progressbar'
                                      aria-label='Basic example'
                                      style={{ width: '70%' }}
                                      aria-valuenow={70}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className='d-flex bg-body-secondary gap-3 rounded-3 p-4'>
                                <div className='w-rem-8 h-rem-8 flex-none'>
                                  <img
                                    src='https://satoshi.webpixels.io/img/crypto/icon/eth.svg'
                                    alt='...'
                                  />
                                </div>
                                <div className='flex-fill vstack gap-2'>
                                  <div className='d-flex mb-1'>
                                    <div className>
                                      <span className='d-block text-heading text-sm fw-semibold'>
                                        Staked ETH
                                      </span>{' '}
                                      <span className='d-block text-muted text-xs'>
                                        16% APR
                                      </span>
                                    </div>
                                    <div className='ms-auto fw-bold text-heading text-sm'>
                                      9.5 ETH
                                    </div>
                                  </div>
                                  <div className='progress bg-body-tertiary'>
                                    <div
                                      className='progress-bar bg-primary'
                                      role='progressbar'
                                      aria-label='Basic example'
                                      style={{ width: '50%' }}
                                      aria-valuenow={50}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className='d-flex bg-body-secondary gap-3 rounded-3 p-4'>
                                <div className='w-rem-8 h-rem-8 flex-none'>
                                  <img
                                    src='https://satoshi.webpixels.io/img/crypto/icon/xrp.svg'
                                    alt='...'
                                  />
                                </div>
                                <div className='vstack gap-2'>
                                  <div className='d-flex mb-1'>
                                    <div className>
                                      <span className='d-block text-heading text-sm fw-semibold'>
                                        Staked XRP
                                      </span>{' '}
                                      <span className='d-block text-muted text-xs'>
                                        13% APR
                                      </span>
                                    </div>
                                    <div className='ms-auto d-block text-heading text-sm fw-semibold'>
                                      760 XRP
                                    </div>
                                  </div>
                                  <div className='progress bg-body-tertiary'>
                                    <div
                                      className='progress-bar bg-primary'
                                      role='progressbar'
                                      aria-label='Basic example'
                                      style={{ width: '70%' }}
                                      aria-valuenow={70}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr className='my-0 d-xxl-none' />
                        <div className='card border-0 border-xxl'>
                          <div className='card-body p-0 p-xxl-6'>
                            <div className='d-flex justify-content-between align-items-center mb-4'>
                              <div>
                                <h5>Subscriptions</h5>
                              </div>
                              <div>
                                <span className='text-success fw-bold'>
                                  <i className='bi bi-arrow-up me-2' />
                                  7.8%
                                </span>
                              </div>
                            </div>
                            <div className='d-flex flex-nowrap gap-2 scrollable-x'>
                              <div className='flex-none'>
                                <div className='rounded-3 p-3 p-sm-4 bg-body-secondary'>
                                  <div className='d-flex align-items-center gap-2'>
                                    <img
                                      src='https://satoshi.webpixels.io/img/social/youtube.svg'
                                      className='w-rem-5'
                                      alt='...'
                                    />
                                    <h6 className='text-sm fw-semibold'>
                                      Youtube
                                    </h6>
                                  </div>
                                  <div className='mt-4 fw-bold text-heading'>
                                    $10.99
                                  </div>
                                </div>
                              </div>
                              <div className='flex-none'>
                                <div className='rounded-3 p-3 p-sm-4 bg-body-secondary'>
                                  <div className='d-flex align-items-center gap-2'>
                                    <img
                                      src='https://satoshi.webpixels.io/img/social/spotify.svg'
                                      className='w-rem-5'
                                      alt='...'
                                    />
                                    <h6 className='text-sm fw-semibold'>
                                      Spotify
                                    </h6>
                                  </div>
                                  <div className='mt-4 fw-bold text-heading'>
                                    $7.99
                                  </div>
                                </div>
                              </div>
                              <div className='flex-none'>
                                <div className='rounded-3 p-3 p-sm-4 bg-body-secondary'>
                                  <div className='d-flex align-items-center gap-2'>
                                    <img
                                      src='https://satoshi.webpixels.io/img/social/github.svg'
                                      className='w-rem-5'
                                      alt='...'
                                    />
                                    <h6 className='text-sm fw-semibold'>
                                      GitHub
                                    </h6>
                                  </div>
                                  <div className='mt-4 fw-bold text-heading'>
                                    $4.00
                                  </div>
                                </div>
                              </div>
                              <div className='flex-none'>
                                <div className='rounded-3 p-3 p-sm-4 bg-body-secondary'>
                                  <div className='d-flex align-items-center gap-2'>
                                    <img
                                      src='https://satoshi.webpixels.io/img/social/slack.svg'
                                      className='w-rem-5'
                                      alt='...'
                                    />
                                    <h6 className='text-sm fw-semibold'>
                                      Slack
                                    </h6>
                                  </div>
                                  <div className='mt-4 fw-bold text-heading'>
                                    $12.00
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='text-center mt-4'>
                              <a
                                href='#'
                                className='link-primary fw-semibold text-sm'
                              >
                                Manage subcriptions
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </main>
  );
}
