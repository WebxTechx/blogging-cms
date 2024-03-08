'use client';
import { toastError } from '@/app/utils/global';
import { axiosPost } from '../../utils/api';
import { loginSchema } from '@/app/utils/Validations';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Toaster } from 'sonner';

type FormValues = {
  [K in keyof (typeof loginSchema)['_def']['shape']]: string;
};

export default function page() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    try {
      const field = loginSchema.pick<any>({
        [name]: loginSchema.shape[name as keyof FormValues],
      });
      field.parse({ [name]: value });
    } catch (error: any) {
      setErrors(error);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Validate all fields before submitting
    try {
      loginSchema.parse(formData);
      console.log(formData);
      const response = await axiosPost('sessions', formData);
      console.log(response);
    } catch (error: any) {
      setErrors(error);
      toastError(error.message)
    }
  };

  return (
    <div className='row g-0 justify-content-center gradient-bottom-right start-purple middle-indigo end-pink'>
      <Toaster position="bottom-center" />
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
              Need Help?
            </h1>
            <p className='text-white text-opacity-75 pe-xl-24'>
              If you&apos;re experiencing any issues with logging in or have any
              questions, feel free to contact our{' '}
              <Link href='' className='text-white'>
                support team
              </Link>
              . We&apos;re here to assist you.
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
            <a className='d-inline-block d-lg-none mb-10' href='dashboard.html'>
              {/* <Image
                  src='https://satoshi.webpixels.io/Image/logos/logo-dark.svg'
                  className='h-rem-10'
                  alt='...'
                /> */}
            </a>
            <h1 className='ls-tight fw-bolder h3'>
              Welcome to Our Blogging CMS - SignIn
            </h1>
            <div className='mt-3 text-sm text-muted'>
              <span>
                Welcome back! Please log in to access your account and start
                creating amazing content.
              </span>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='mb-5'>
              <label className='form-label' htmlFor={'email'}>
                Email Address
              </label>
              <input
                type={'text'}
                placeholder={'Email Address'}
                onChange={handleChange}
                name={'email'}
                id={'email'}
                className='form-control'
              />
              {errors.email && (
                <small className='text-danger'>{errors.email}</small>
              )}
            </div>
            <div className='mb-5'>
              <label className='form-label' htmlFor={'password'}>
                Password
              </label>
              <input
                type={'password'}
                placeholder={'Password'}
                onChange={handleChange}
                name={'password'}
                id={'password'}
                className='form-control'
              />
              {errors.email && (
                <small className='text-danger'>{errors.password}</small>
              )}
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
              <button type='submit' className='btn btn-dark w-100'>
                Sign in
              </button>
            </div>
          </form>
          {/* <div className='py-5 text-center'>
            <span className='text-xs text-uppercase fw-semibold'>or</span>
          </div>
          <div className='row g-2'>
            <div className='col-sm-6'>
              <a href='#' className='btn btn-neutral w-100'>
                <span className='icon icon-sm pe-2'>
                  <Image
                      src='https://satoshi.webpixels.io/Image/social/github.svg'
                      alt='...'
                    />
                </span>
                Github
              </a>
            </div>
            <div className='col-sm-6'>
              <a href='#' className='btn btn-neutral w-100'>
                <span className='icon icon-sm pe-2'>
                  <Image
                      src='https://satoshi.webpixels.io/Image/social/google.svg'
                      alt='...'
                    />
                </span>
                Google
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
