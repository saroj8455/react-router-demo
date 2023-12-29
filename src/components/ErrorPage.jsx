import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <div className='surface-section px-4 py-8 md:px-6 lg:px-8'>
      <div
        style={{
          background:
            'radial-gradient(50% 109137.91% at 50% 50%, rgba(233, 30, 99, 0.1) 0%, rgba(254, 244, 247, 0) 100%)',
        }}
        className='text-center'
      >
        <span className='bg-white text-pink-500 font-bold text-2xl inline-block px-3'>
          404
        </span>
      </div>
      <div className='mt-6 mb-5 font-bold text-6xl text-900 text-center'>
        Page Not Found
      </div>
      <p className='text-700 text-3xl mt-0 mb-6 text-center'>
        Sorry, we could not find the page.
      </p>
      <p className='text-700 text-3xl mt-0 mb-6 text-center'>
        <i>{error.statusText || error.message}</i>
      </p>
      <div className='text-center'>
        <button
          aria-label='Go Back'
          className='p-button p-component p-button-text mr-2'
        >
          <span className='p-button-icon p-c p-button-icon-left pi pi-arrow-left' />
          <span className='p-button-label p-c'>Go Back</span>
          <span
            role='presentation'
            className='p-ink'
            style={{ height: '129.57px', width: '129.57px' }}
          />
        </button>
        <button aria-label='Go to Dashboard' className='p-button p-component'>
          <span className='p-button-icon p-c p-button-icon-left pi pi-home' />
          <span className='p-button-label p-c'>Go to Dashboard</span>
          <span
            role='presentation'
            className='p-ink'
            style={{ height: '195.562px', width: '195.562px' }}
          />
        </button>
      </div>
    </div>
  );
}
