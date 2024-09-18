import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../assets/program-hero.png'
import Img1 from '../assets/program-img1.png'
import Img2 from '../assets/program-img2.png'
import Img3 from '../assets/program-img3.png'
import Img4 from '../assets/program-img4.png'
import Img5 from '../assets/program-img5.png'
import Img6 from '../assets/program-img6.png'
import Footer from '../components/Footer'


const activities = [
  {image: Img1, title: "Mental Health Awareness and Menstral Hygiene", subtitle: "YPF in collaboration with Yazz Sanitary towels made donation to the young ladies at Ekumfi Senior High."},
  {image: Img2, title: "Education For All", subtitle: "Donation of free teaching and learning materials to students and teachers who made to make learning easier"},
  {image: Img3, title: "Community Health Awareness", subtitle: " Providing essential healthcare services and education to underserved communities, ensuring access to basic health needs."},
  {image: Img4, title: "Youth Empowerment", subtitle: "Empowering the next generation with skills, resources, and opportunities to become leaders and change-makers in their communities."},
  {image: Img5, title: "Women Empowerment", subtitle: "Supporting women and girls through education, vocational training, and advocacy to promote gender equality and economic independence."},
  {image: Img6, title: "Youth Sports Programs", subtitle: " Encouraging physical activity and teamwork among youth through organized sports programs and community events."},
]

const Program = () => {
  return (
    <div className=''>
      <Navbar />
      <div className='flex items-center w-full h-[40vh] md:h-[30vh] lg:h-[70vh] bg-white'>
        <div className='flex flex-col gap-6 px-8 md:pl-12 -pt-20'>
          <h1 className='text-orange text-3xl md:text-4xl font-semibold'>Our <span className='text-purple'>Programs</span></h1>
          <div className='lg:w-[450px] md:w-[400px] h-0.5 bg-orange'/>
          <p className='max-md:text-sm'>Our programs save and transform the lives of the poor and needy in the society.</p>
        </div>
        <img src={Hero} alt="" className=' max-md:hidden w-full h-full'/>
      </div>
      <div className='bg-white my-5'>
        <p className='md:p-12 p-8 md:w-[60vw] lg:w-[50vw]'>"Our programs are designed to address the most pressing needs in our communities, from education and health to sustainable livelihoods. Each initiative is crafted with care to create lasting impact and drive positive change."</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-8 lg:mx-20 pt-8'>
          {activities.map((item, id) => {
              return(
                  <div className="bg-base-100 shadow-xl border-2 border-orange rounded-2xl" key={id}>
                      <figure>
                          <img
                          src={item.image}
                          alt="Executives" className='rounded-t-xl'/>
                      </figure>
                      <div className="py-2 px-4 flex flex-col gap-1">
                          <h2 className="card-title text-purple">{item.title}</h2>
                          <p className='text-sm'>{item.subtitle}</p>
                      </div>
                  </div>
              )
          })}
        </div>
        <div className='pt-32 w-full'>
          <div className='flex flex-col items-center text-3xl md:text-4xl font-semibold'>
            <h1 className='text-purple'>Join Our Upcoming</h1>
            <h1 className='text-orange'>Events</h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Program