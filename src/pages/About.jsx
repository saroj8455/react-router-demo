import React from 'react';
import * as Prime from '../config/Config';
import { Link, Outlet } from 'react-router-dom';
export default function About() {
  return (
    <div className='grid'>
      <div className='col-12 md:col-3 lg:col-4 '>
        <div className='p-3 border-round-sm  font-bold '>
          <div className='card'>
            <Prime.Card title='About Techinical Stack'>
              <ul className='list-none p-0 m-0'>
                <li>
                  <Link to='angular'>
                    <Prime.Button
                      label='Angular'
                      className='w-full'
                      severity='secondary'
                      text
                    />
                  </Link>
                </li>
                <li>
                  <Link to='react'>
                    <Prime.Button
                      label='React'
                      className='w-full'
                      severity='secondary'
                      text
                    />
                  </Link>
                </li>
                <li>
                  <Link to='vue/10001'>
                    <Prime.Button
                      label='Vue'
                      className='w-full'
                      severity='secondary'
                      text
                    />
                  </Link>
                </li>
              </ul>

              {/* <ContactComp /> */}
            </Prime.Card>
          </div>
        </div>
      </div>
      <div className='col-12 md:col-9 lg:col-8'>
        <div className='text-center p-3 border-round-sm  font-bold'>
          <Prime.Card title='About Pages'>
            <div className='m-0'>
              <Outlet />
            </div>
          </Prime.Card>
        </div>
      </div>
    </div>
  );
}
