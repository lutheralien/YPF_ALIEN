import React from 'react'
import Logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div className='bg-purple w-[100%] px-8 md:px-12 lg:px-20'>
        <div className='grid grid-cols-2 md:grid-cols-3  gap-12 py-10'>
            <div className='flex flex-col gap-10 '>
                <div className='flex flex-col gap-1'>
                    <img src={Logo} alt="" className='md:w-32 w-24'/>
                    <p className='uppercase text-white text-xl md:text-2xl font-semibold pl-4'>Young Philanthropists Foundation</p>
                </div>
                <p className='pl-4 text-white'>Creating smiles with a coin</p>
            </div>
            <div>
                <h1 className='text-orange font-semibold text-xl md:text-3xl mt-3'>QUICK LINKS</h1>
                <ul className='pl-4 text-white my-3 flex flex-col gap-1 md:text-lg'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Programs</li>
                    <li>Contact</li>
                    <li>Gallery</li>
                </ul>
            </div>
            <div>
                <h1 className='text-orange text-xl md:text-3xl font-semibold text-center mt-3 max-md:w-[80vw]'>FOLLOW US ON OUR PLATFORMS</h1>
            </div>
        </div>
        <div className='w-full h-0.5 bg-orange'/>
        <p className='text-orange text-center py-2 max-md:text-sm'>Young Philanthropist Foundation @2024.  All Right Reserved</p>
    </div>
  )
}

export default Footer