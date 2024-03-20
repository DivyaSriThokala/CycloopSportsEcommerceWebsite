import { Button, Input } from '@mui/material'
import React from 'react'
import HomeMainFooter from '../../../../src/static/HomeMainFooter.png'
const FooterImageHome = () => {
  return (
    <div className='items-center'>
      <div className='items-center flex flex-col justify-center w-full h-[40rem] bg-cover bg-no-repeat' style={{ backgroundImage: `url('${HomeMainFooter}')` }}>
        <div className='ml-20 px-30'>
          <p className='m-5 text-3xl text-center'>Subscribe to us and you won't miss the new arrivals, discounts, and sales.</p>
          <div className='flex justify-center items-center h-full'>
            <div className='flex flex-row items-center mx-10'>
              <Input className='w-[25rem] h-[3rem] pl-5 rounded-l-md mr-6' placeholder="Email" variant="plain" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: '10px', border: 'none', textAlign: 'left' }} />
              <Button className="rounded-l-md w-[5rem] h-[3rem] pr-5" style={{ backgroundColor: '#66cdaa', color: 'white', borderRadius: '20px' }}>Submit</Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}



export default FooterImageHome