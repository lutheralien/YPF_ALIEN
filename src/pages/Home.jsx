import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../assets/hero-home.png'
import Donate from '../assets/donate.png'
import Volunteer from '../assets/volunteer.png'
import Inspiration from '../assets/inspiration.png'
import About from '../assets/divided-image.png'
import { FaArrowLeftLong } from 'react-icons/fa6'
import Img1 from '../assets/home-img1.png'
import Img2 from '../assets/home-img2.png'
import Img3 from '../assets/home-img3.png'
import Banner from '../components/Banner'
import Footer from '../components/Footer'


const notes = [
    {
        id: 1, 
        title: "Send Donation", 
        text: "Your donation has the power to transform lives. Every contribution helps us provide essential services and resources to underserved communities, making a real difference in the world.", 
        color: "purple", 
        icon: Donate
    },
    {
        id: 2, 
        title: "Become A Volunteer", 
        text: "Volunteering with us means being a part of something bigger. Join our passionate community of changemakers, and together, we can uplift those in need and create positive, lasting change.", 
        color: "orange", 
        icon: Volunteer
    },
    {
        id: 3, 
        title: "Give Inspiration", 
        text: "Your words and actions can spark hope in others. By sharing your story or uplifting those around you, you help inspire lasting change in the lives of those who need it most.", 
        color: "purple", 
        icon: Inspiration
    },
]

const card = [
    {
        id: 1, 
        image: Img1, 
        title: "Youth Empowerment", 
        description: "Empowering the next generation with skills, resources, and opportunities to become leaders and change-makers in their communities."
    },
    {
        id: 2, 
        image: Img2, 
        title: "Community Health Outreach", 
        description: "Providing essential healthcare services and education to underserved communities, ensuring access to basic health needs."
    },
    {
        id: 3, 
        image: Img3, 
        title: "Educational Support", 
        description: "Offering mentorship, and educational resources to underprivileged students, helping them achieve their academic goals."
    },
]

const Home = () => {
  return (
    <div className=''>
        <Navbar/>
        <div className='w-[100vw] shadow-lg h-[60vh] md:h-[50vh] lg:h-[84vh] flex items-center'>
            <div className='absolute z-10 lg:w-[45vw] md:w-[60vw] text-center text-white flex gap-3 flex-col md:mx-6 lg:mx-16'>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.2]'>Empowering <span className='text-orange'>Youth</span> to Help the <span className='text-orange'>Needy</span></h1>
                <p className='md:text-2xl text-xl px-10'>Join us in making a great difference in our society today</p>
                <div className='flex items-center gap-12 justify-center py-3'>
                    <button className='bg-orange text-white rounded-3xl py-1 px-5 md:py-2 md:px-10 md:text-2xl font-normal'>Donate Now</button>
                    <button className='bg-white border-2 border-orange text-orange rounded-3xl py-1 px-5 md:py-2 md:px-10 md:text-2xl font-normal'>Read More</button>
                </div>
            </div>
            <img src={Hero} alt="" className='filter grayscale h-full w-full bg-cover'/>
        </div>
        <div className='flex flex-col mx-8 my-5 gap-4 md:mx-4 md:flex-row md:gap-5 lg:mx-20 lg:gap-10 md:-mt-16 z-100 relative mb-12'>
            {notes.map((item, id) => {
                return(
                    <div key={item.id}>
                        <div className={`flex flex-col text-white bg-${item.color} py-6 px-4 items-center`}>
                            <div className='flex items-center gap-4 py-3'>
                                <img src={item.icon} alt="" className='h-6 w-6'/>
                                <p className='text-2xl font-semibold'>{item.title}</p>
                            </div>
                            <p className='text-sm'>"{item.text}"</p>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className='w-full bg-white flex flex-col-reverse md:items-center lg:flex-row lg:gap-10 px-8 lg:px-20'>
            <img src={About} alt="" className='w-[500px] flex '/>
            <div className='py-16'>
                <p className='text-3xl text-center text-orange'>About YPF</p>
                <h1 className='text-4xl text-center font-semibold py-6'>Get to know Us More</h1>
                <div className='md:text-xl flex flex-col gap-4 pt-2'>
                    <p>It’s a philantropy foundation that seeks to help the needy and the less privileged in the society.</p>
                    <p>It’s filled with vibrant young people who share good hearts for everyone being a needy within their capacity.</p> 
                    <p>We donate within our range as volunteers and not so huge out of our stipends. YPF today is growing wide and interactive.</p>
                </div>
                <p className='my-6 text-orange italic'>Let’s create smiles with a coin...</p>
                <div className='flex items-center gap-12'>
                    <button className='md:py-3 md:px-16 py-2 px-2 bg-orange text-white text-xl flex gap-3 items-center'>
                        <FaArrowLeftLong /> 
                        <p>Our Mission</p>
                    </button>
                    <button className='md:py-3 md:px-16 py-2 px-2 bg-purple text-white text-xl flex gap-3 items-center'>
                        <FaArrowLeftLong /> 
                        <p>Our Vision</p>
                    </button>
                </div>
            </div>
        </div>
        <div className='bg-white mt-4 pb-16'>
            <h1 className='text-purple text-4xl font-semibold text-center py-12'>Making A <span className='text-orange'>Difference</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-8 md:mx-20'>
                {card.map((item, id) => {
                    return(
                        <div className="bg-base-100 shadow-xl border-2 border-orange rounded-2xl" key={item.id}>
                            <figure>
                                <img
                                src={item.image}
                                alt="Shoes" className='rounded-t-xl'/>
                            </figure>
                            <div className="py-2 px-4 flex flex-col gap-4">
                                <h2 className="card-title">{item.title}</h2>
                                <p>{item.description}</p>
                                <div className="">
                                    <button className="bg-purple text-orange text-lg py-2 px-4 rounded-xl">Join Community</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className=''>
            <Banner />
        </div>
        <div className='bg-white py-12'>
            <h1 className='text-center text-2xl m:text-4xl font-semibold text-purple'>What They Say About Us</h1>
            <div>

            </div>
        </div>
        
        <Footer />
    </div>
  )
}

export default Home
