import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from './Navbar'

const Contact = () => {
  return (
    <section>
      <Navbar></Navbar>
      <section className="my-[50px] poppins">
      <div className="w-[93%] mx-auto">
        <div className="contact-heading flex flex-col items-center justify-center mb-[50px]">
          <h2 className="font-bold  text-[32px] text-center">Get In Touch With Us</h2>
          <p className=" text-[14px] md:flex lg:flex hidden text-gray w-[550px] text-center">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>
        <div className="main-contact flex lg:flex-row flex-col-reverse lg:items-start items-center justify-center lg:gap-[100px] gap-[50px]">
          <div className="contact-text flex flex-col items-start gap-[28px]">
            <div className="flex items-start gap-[30px]">
              <div>
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <div>
                <h5 className=" text-[18px] font-semibold">Address</h5>
                <p className=" w-[217px]">236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>

            <div className="flex items-start gap-[30px]">
              <div>
                <i className="bi bi-telephone-fill"></i>
              </div>
              <div>
                <h5 className=" text-[18px] font-semibold">Phone</h5>
                <p>Mobile: +(84) 546-6789</p>
                <p>Hotline: +(84) 456-6789</p>
              </div>
            </div>

            <div className="flex items-start gap-[30px]">
              <div>
                <i className="bi bi-clock-fill"></i>
              </div>
              <div>
                <h5 className=" text-[18px] font-semibold">Working Time</h5>
                <p>Monday-Friday: 9:00 - 22:00</p>
                <p>Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>
          <div className="contact-inputs">
            <form action="submit" className="flex flex-col items-start gap-[30px]">
              <div className="flex flex-col items-start gap-[15px]">
                <label htmlFor="" className=" font-semibold text-[13px]">Your Name</label>
                <input type="text" placeholder="Name" className="border-[1px] border-gray rounded-[8px] py-[12px] pl-[8px] w-[360px]" />
              </div>
              <div className="flex flex-col items-start gap-[15px]">
                <label htmlFor="" className=" font-semibold text-[13px]">Email address</label>
                <input type="text" placeholder="Email address" className="border-[1px] border-gray rounded-[8px] py-[12px] pl-[8px] w-[360px]" />
              </div>
              <div className="flex flex-col items-start gap-[15px]">
                <label htmlFor="" className=" font-semibold text-[13px]">Subject</label>
                <input type="text" placeholder="Subject" className="border-[1px] border-gray rounded-[8px] py-[12px] pl-[8px] w-[360px]" />
              </div>
              <div className="flex flex-col items-start gap-[15px]">
                <label htmlFor="" className=" font-semibold text-[13px]">Message</label>
                <textarea name="" id="" cols="47" rows="3" className="border-[1px] border-gray rounded-[8px] py-[12px] pl-[6px]" placeholder="Message"></textarea>
                <button className="bg-btn-color rounded-[5px]  border-black text-[15px] font-bold px-[38px] py-[11px]">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
   <Footer></Footer>
  </section>
  )
}

export default Contact