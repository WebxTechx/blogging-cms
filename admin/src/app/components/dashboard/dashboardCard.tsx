import React from 'react';

export default function dashboardCard() {
  return (
    <div className='card'>
      <div className='p-4'>
        <h6 className='text-limit text-muted mb-3'>Orders</h6>
        <span className='text-sm text-muted text-opacity-90 fw-semibold'>
          EUR
        </span>
        percent
        <span className='d-block h3 ls-tight fw-bold'>25.040,00</span>
        <p className='mt-1'>
          <span className='text-success text-xs'>
            <i className='fas fa-arrow-up me-1' />
            20%percent
          </span>
          <span className='text-muted text-xs text-opacity-75'>
            vs last week
          </span>
        </p>
      </div>
    </div>
  );
}
