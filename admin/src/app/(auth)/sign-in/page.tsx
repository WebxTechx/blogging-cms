import Image from 'next/image';

export default function page() {
  return (
    <div>
      <div className='row g-0 justify-content-center gradient-bottom-right start-purple middle-indigo end-pink'>
        <div className='col-md-6 col-lg-5 col-xl-5 position-fixed start-0 top-0 vh-100 overflow-y-hidden d-none d-lg-flex flex-lg-column'>
          <div className='p-12 py-xl-10 px-xl-20'>
            <a className='d-block' href='dashboard.html'>
              <Image
                src='/assets/img/logo/logo-light.svg'
                className='h-rem-10'
                width={100}
                height={50}
                alt=''
              />
            </a>
            <div className='mt-16'>
              <h1 className='ls-tight fw-bolder display-6 text-white mb-5'>
                Trade the world’s top assets and cryptos
              </h1>
              <p className='text-white text-opacity-75 pe-xl-24'>
                Create beautiful websites that are supported by rock-solid
                design principles.
              </p>
            </div>
          </div>
          <div className='mt-auto ps-16 ps-xl-20'>
            <Image
              src='/assets/img/marketing/shot-1.png'
              className='Image-fluid rounded-top-start-4'
              width={1000}
              height={900}
              alt='...'
            />
          </div>
        </div>
        <div className='col-12 col-md-12 col-lg-7 offset-lg-5 min-vh-100 overflow-y-auto d-flex flex-column justify-content-center position-relative bg-body rounded-top-start-lg-4 border-start-lg shadow-soft-5'>
          <div className='w-md-50 mx-auto px-10 px-md-0 py-10'>
            <div className='mb-10'>
              <a
                className='d-inline-block d-lg-none mb-10'
                href='dashboard.html'
              >
                {/* <Image
                  src='https://satoshi.webpixels.io/Image/logos/logo-dark.svg'
                  className='h-rem-10'
                  alt='...'
                /> */}
              </a>
              <h1 className='ls-tight fw-bolder h3'>Sign in to your account</h1>
              <div className='mt-3 text-sm text-muted'>
                <span>Don&apos;t have an account?</span>{' '}
                <a href='register.html' className='fw-semibold'>
                  Sign up
                </a>{' '}
                for a free trial.
              </div>
            </div>
            <form>
              <div className='mb-5'>
                <label className='form-label' htmlFor='email'>
                  Email address
                </label>{' '}
                <input type='email' className='form-control' id='email' />
              </div>
              <div className='mb-5'>
                <div className='d-flex justify-content-between gap-2 mb-2 align-items-center'>
                  <label className='form-label mb-0' htmlFor='password'>
                    Password
                  </label>{' '}
                  <a
                    href='#'
                    className='text-sm text-muted text-primary-hover text-underline'
                  >
                    Forgot password?
                  </a>
                </div>
                <input
                  type='password'
                  className='form-control'
                  id='password'
                  autoComplete='current-password'
                />
              </div>
              <div className='mb-5'>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    name='check_example'
                    id='check_example'
                  />{' '}
                  <label className='form-check-label' htmlFor='check_example'>
                    Keep me logged in
                  </label>
                </div>
              </div>
              <div>
                <a href='#' className='btn btn-dark w-100'>
                  Sign in
                </a>
              </div>
            </form>
            <div className='py-5 text-center'>
              <span className='text-xs text-uppercase fw-semibold'>or</span>
            </div>
            <div className='row g-2'>
              <div className='col-sm-6'>
                <a href='#' className='btn btn-neutral w-100'>
                  <span className='icon icon-sm pe-2'>
                    {/* <Image
                      src='https://satoshi.webpixels.io/Image/social/github.svg'
                      alt='...'
                    /> */}
                  </span>
                  Github
                </a>
              </div>
              <div className='col-sm-6'>
                <a href='#' className='btn btn-neutral w-100'>
                  <span className='icon icon-sm pe-2'>
                    {/* <Image
                      src='https://satoshi.webpixels.io/Image/social/google.svg'
                      alt='...'
                    /> */}
                  </span>
                  Google
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
