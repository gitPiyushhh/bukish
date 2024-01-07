import React from 'react';
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div>
      <Navbar />

      <div className='overflow-scrol'>
        <main className='mx-auto max-w-[68vw] mt-0'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AppLayout