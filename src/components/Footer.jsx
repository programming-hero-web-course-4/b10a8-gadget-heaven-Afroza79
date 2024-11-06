import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='bg-white py-10 px-10 xl:px-40 lg:px-40 md:px-20 xl:py-20 lg:py-20 md:py-20'>
       <div className='text-center'>
        <h1 className='text-2xl font-bold mb-2'>Gadget Heaven</h1>
        <p className='text-gray-500 text-sm mb-4'>Leading the way in cutting-edge technology and innovation.</p>
          <hr></hr>
          <div className='xl:flex lg:flex md:flex justify-center mt-10 gap-36'>
            <div className='mb-10 xl:mb-0 lg:mb-0 md:mb-0'>
                <h1 className='font-bold mb-2'>Services</h1>
                <ul className='text-sm text-gray-500'>
                    <li className='mb-2'>Product Support</li>
                    <li className='mb-2'>Order Tracking</li>
                    <li className='mb-2'>Shipping & Delivery</li>
                    <li className='mb-2'>Returns</li>
                </ul>
            </div>
            <div className='mb-10 xl:mb-0 lg:mb-0 md:mb-0'>
                <h1 className='font-bold mb-2'>Company</h1>
                <ul className='text-sm text-gray-500'>
                    <li className='mb-2'>About Us</li>
                    <li className='mb-2'>Careers</li>
                    <li className='mb-2'>Contact</li>
                </ul>
            </div>
            <div>
                <h1 className='font-bold mb-2'>Legal</h1>
                <ul className='text-sm text-gray-500'>
                    <li className='mb-2'>Terms of Services</li>
                    <li className='mb-2'>Privacy Policy</li>
                    <li className='mb-2'>Cookie Policy</li>
                </ul>
            </div>
          </div>
       </div>
      </div>
    </>
  )
}

export default Footer
