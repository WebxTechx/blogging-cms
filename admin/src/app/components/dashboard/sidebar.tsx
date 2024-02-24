import Image from 'next/image';

const sidebar = () => {
  return (
    <nav
      className='flex-none navbar navbar-vertical navbar-expand-lg navbar-light show vh-lg-100 px-0 py-2 bg-transparent'
      id='sidebar'
    >
      <div className='px-3 px-md-4 px-lg-6'>
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
          className='navbar-brand d-inline-block py-lg-1 mb-lg-5 relative'
          href='dashboard.html'
        >
          <Image
            src='/assets/img/logo/logo-dark.svg'
            className='logo-dark h-rem-8 h-rem-md-10'
            alt='...'
            width={100}
            height={50}
          />{' '}
          <Image
            src='/assets/img/logo/logo-light.svg'
            className='logo-light h-rem-8 h-rem-md-10'
            alt='...'
            fill
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
        // className='collapse navbar-collapse overflow-x-hidden'
        // id='sidebarCollapse'
        >
          <ul className='navbar-nav'>
            <li className='nav-item my-1'>
              <a
                className='nav-link d-flex align-items-center rounded-pill active'
                href='https://satoshi.webpixels.io/docs'
              >
                <i className='bi bi-book-fill' />
                <span>Dashboard</span>{' '}
                <span className='badge badge-sm rounded-pill me-n2 bg-success-subtle text-success ms-auto' />
              </a>
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
                    <a href='account-notifications.html' className='nav-link'>
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
                <i className='bi bi-calendar2-plus-fill' /> <span>Widgets</span>{' '}
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
  );
};

export default sidebar;
