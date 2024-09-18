import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../assets/contact-hero.png'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import { MdOutlineEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { IoLocation } from "react-icons/io5";



const Contact = () => {
  return (
    <div>
        <Navbar />
        <div className='w-[100vw] shadow-lg h-[50vh] md:h-[70vh] flex items-center'>
            <div className='absolute z-10 w-full text-white px-20'>
                <h1 className='text-4xl md:text-5xl font-semibold pb-3 text-center'>Contact Us</h1>
            </div>
            <img src={Hero} alt="" className='h-full w-full bg-cover'/>
        </div>
        <div className='flex flex-col md:flex-row justify-center mx-8 mt-10 md:mx-24 mb-8 md:-mt-20'>
            <div className='bg-[#E8DDD0] p-10'>
                <h1 className='text-3xl font-semibold text-center text-purple'>Get In Touch With Us</h1>
                <p className='text-lg text-gray-600 text-center'>Communicate with us anytime, anyday</p>
                <div className='flex flex-col gap-6 pt-8'>
                    <div className='flex items-center gap-3'>
                        <MdOutlineEmail className='text-4xl text-purple'/>
                        <div>
                            <p className='text-purple text-xl'>Email Us</p>
                            <p>ypf.help@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <MdCall className='text-4xl text-purple'/>
                        <div>
                            <p className='text-purple text-xl'>Call Us</p>
                            <p>+233 59760 8013</p>
                            <p>+233 20310 0416</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <IoLocation className='text-4xl text-purple'/>
                        <div>
                            <p className='text-purple text-xl'>Address</p>
                            <p>Winneba, Central Region</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-10 bg-white px-4'>
                <h1 className='text-2xl md:text-3xl font-semibold text-center text-purple'>Send Us A Message</h1>
                <form action="" className='flex flex-col gap-4 pt-8 '>
                    <div className='flex flex-col md:flex-row md:items-center md:gap-10 w-full'>
                        <div>
                            <label htmlFor="">Full Name</label><br />
                            <input type="text" required className='bg-[#EAEDF0] mt-2 md:w-[250px] rounded-lg py-2 px-2 w-full'/>
                        </div>
                        <div>
                            <label htmlFor="">Phone</label><br />
                            <input type="tel" required className='bg-[#EAEDF0] mt-2 md:w-[250px] rounded-lg py-2 px-2 w-full'/>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row md:items-center md:gap-10'>
                        <div>
                            <label htmlFor="">Email</label><br />
                            <input type="email" required className='bg-[#EAEDF0] mt-2 md:w-[250px] rounded-lg py-2 px-2 w-full'/>
                        </div>
                        <div>
                            <label htmlFor="">Role</label><br />
                            <select name="" required id=""className='bg-[#EAEDF0] mt-2 md:w-[250px] rounded-lg py-2 px-2 w-full'>
                                <option value="">Select Option ...</option>
                                <option value="">Donor</option>
                                <option value="">Volunteer</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Message</label><br />
                        <textarea type="text" required className='bg-[#EAEDF0] mt-2  md:w-[540px] rounded-lg py-2 px-2 w-full'/>
                    </div>
                    <button className='bg-orange py-2 px-6 w-[150px] flex items-center justify-center rounded-lg text-white'>Submit</button>
                </form>
            </div>
        </div>
        <Banner/>
        <div className='flex items-center flex-col justify-center py-10 px-8 md:px-44 text-center gap-8'>
            <p className='text-xl md:text-2xl text-purple font-semibold'>“A single act of kindness throws out roots in all directions, and the roots spring up and make new trees.”</p>
            <p className='text-orange text-lg md:text-xl font-semibold'>......Amelia Earhart</p>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact