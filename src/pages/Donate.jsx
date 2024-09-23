import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../assets/donate-image.png'
import Coin from '../assets/coin.png'
import Secure from '../assets/secure.png'
import Footer from '../components/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'
// import { PaystackButton } from 'react-paystack'


const Donate = () => {
    // const publicKey = "pk_test_82591521c6cc5449e0816bff50cb58267b5525b3";
    // const [name, setName] = useState("")
    // const [email, setEmail] = useState("")
    // const [phone, setPhone] = useState("")
    // const [amount, setAmount] = useState("")
    // const [reason, setReason] = useState("")
    // const currency = "GHS"

    // const componentProps = {
    //     email,
    //     amount: amount * 100,
    //     currency,
    //     name,
    //     phone,
    //     metadata: {
    //         custom_fields: [
    //             {
    //                 display_name: "Customer Name",
    //                 variable_name: "customer_name",
    //                 value: name // Customer's name
    //             },
    //             {
    //                 display_name: "Phone Number",
    //                 variable_name: "phone_number",
    //                 value: phone // Customer's phone number
    //             },
    //             {
    //                 display_name: "Reason",
    //                 variable_name: "reason",
    //                 value: reason // Reason for payment
    //             }
    //         ]
    //     },
    //     publicKey,
    //     text: "Make Payment",
    //     onSuccess: () => alert("Thanks for donating to YPF. God bless you🙏"),
    //     onClose: () => alert("Are you sure you want to close? ")
    // }

    useEffect(() => {
        Aos.init({
            once: false,
        })
    }, [])
    return (
        <div>
            <Navbar />
            <div data-aos="fade-down" data-aos-duration="1000" className='text-3xl text-center py-8 font-semibold text-purple'>Support Our Cause</div>
            <div className='flex flex-col md:flex-row px-4 lg:mx-32 h-full lg:h-[95vh] mb-20 w-full'>
                <div className='lg:w-[40vw] md:w-[90vw] w-full flex items-center shadow-xl'>
                    <img src={Hero} alt="" className='w-full h-full '/>
                    <div data-aos="zoomi-in" data-aos-duration="2000" className='bg-[#F0EAEA] absolute w-[80%] md:px-3 mx-5 z-10 max-lg:mt-52 lg:-bottom-10 lg:w-[34vw] md:w-[40vw] lg:mx-10'>
                        <div className='flex gap-2 items-center justify-center sm:py-3'>
                            <img src={Coin} alt="" className='w-8'/>
                            <div className='flex items-center flex-col justify-center'>
                                <h1 className='max-sm:text-sm'>Ready to make a difference</h1>
                                <p className='text-purple text-lg md:text-2xl font-semibold'>Join Us Make <span className='text-orange'>Donation</span></p>
                            </div>
                        </div>
                        <p className='md:py-4 px-4 text-sm md:pb-8'>"Your contribution helps us provide vital services to those in need and those less priviledged in our society, from education to healthcare. Together, we can create a brighter future for all."</p>
                    </div>
                </div>
                <div className='bg-white p-4 w-full lg:w-[40vw] shadow-xl'>
                    <div data-aos="fade-left" data-aos-duration="1500" className='flex gap-3 items-center justify-center py-5'>
                        <img src={Secure} alt="" className='w-6'/>
                        <h1 className='text-xl text-purple'>Secure Donation</h1>
                    </div>
                    <div className='md:mx-10 flex flex-col gap-6'>
                        <div className="flex flex-col gap-2">
                            <h1 data-aos='fade-left' data-aos-duration='2000' className='text-xl md:text-2xl font-semibold text-purple'>DONATIONS</h1>
                            <ul data-aos='fade-left' data-aos-duration='2500'>
                                <li><span className='font-semibold'>Name:</span> Justice Paa Kwesi Abban Junior</li>
                                <li><span className='font-semibold'>Momo Number:</span> 0597608013</li>
                                <li><span className='font-semibold'>Network:</span> MTN</li>
                                <li><span className='font-semibold'>Reference:</span> YPF Donation</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 data-aos='fade-left' data-aos-duration='2000' className='text-xl md:text-2xl font-semibold text-purple'>DUES</h1>
                            <ul data-aos='fade-left' data-aos-duration='2500'>
                                <li><span className='font-semibold'>Name:</span> Juliana Awuah</li>
                                <li><span className='font-semibold'>Momo Number:</span> 0534461061</li>
                                <li><span className='font-semibold'>Network:</span> MTN</li>
                                <li><span className='font-semibold'>Reference:</span> YPF</li>
                            </ul>
                        </div>
                        <div data-aos="zoom-in-down" data-aos-duration='1500' className="flex flex-col italic items-center mt-5 text-purple">
                            <p className=''>"Be a blessing to a needy through YPF.</p>
                            <p>Don't forget to say a prayer anytime you donate."</p>
                        </div>
                        <div data-aos='zoom-out' data-aos-duration='1500' className='mt-6'>
                            <p className='font-semibold'>For further enquiries concerning the donation:</p>
                            <p>Email us: ypf.help@gmail.com</p>
                            <p>Contact: 0597608013</p>
                        </div>
                    </div>
                    {/* <div className='md:mx-10 mx-4 flex flex-col gap-3'>
                        <div className='flex gap-3 flex-col'>
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className='w-full rounded-md bg-gray-200 p-2 outline-none' name="name" required />
                        </div>
                        <div className='flex gap-3 flex-col'>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className='w-full rounded-md bg-gray-200 p-2 outline-none' name="email" required />
                        </div>
                        <div className='flex gap-3 flex-col'>
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className='w-full rounded-md bg-gray-200 p-2 outline-none' name="phone" required />
                        </div>
                        <div className='flex gap-3 flex-col'>
                            <label htmlFor="amount">Amount</label>
                            <div className='flex gap-2 w-full items-center rounded-md bg-gray-200 p-2'>
                                <p className='font-semibold'>GHS</p>
                                <input type="number" id="amount" name="amount" value={amount} onChange={(e) => setAmount(e.target.value)} className='w-full bg-gray-200 py-0.5 outline-none' required />
                            </div>
                        </div>
                        <div className='flex gap-3 flex-col'>
                            <label htmlFor="message">Reason</label>
                            <textarea id="message" name="message" value={reason} onChange={(e) => setReason(e.target.value)} className='w-full rounded-md bg-gray-200 p-2 outline-none' rows="2" required></textarea>
                        </div>
                        <PaystackButton className='py-2 w-fit mt-2 px-6 bg-orange text-white rounded-md hover:scale-110 duration-300 ease-linear' {...componentProps}/>
                    </div> */}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Donate