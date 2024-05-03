import React from 'react'

const Footer = () => {
  return (
   <section className='bg-black w-full h-auto text-white pt-[40px] pb-[20px]'>
    <div className='w-[93%] mx-auto'>
    <div className="main-footer flex lg:justify-center md:justify-evenly  flex-wrap lg:gap-[100px] gap-[20px] items-start">
            <div className="footer-logo flex flex-col items-start gap-[10px]">
            <a href="/" className='enriqueta font-extrabold text-[25px]'>Doll Delights</a>
            <p className='poppins w-[300px] text-[12px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="footer-information poppins flex flex-col items-start gap-[15px]">
                 <h3 className='font-bold text-[20px]'>Information</h3>
                 <div className='flex flex-col items-start gap-[10px]'>
                    <a href="">About</a>
                    <a href="">Product</a>
                    <a href="">Blog</a>
                    <a href="">Sellers</a>
                 </div>
            </div>
            <div className="footer-contact poppins  flex flex-col items-start gap-[15px]">
                <h3 className='font-bold text-[20px]'>Contact</h3>
                <div className='flex flex-col items-start gap-[10px] w-[270px]'>
                 <p>Ph:  35151664166</p>
                 <p>Mail: mangcoding123@gmail.com</p>
                 <p>Add:  2972 Westheimer Rd. Santa Ana,
                         Illinois 85486 </p>

                </div>

            </div>
            <div className="footer-newsletter poppins flex flex-col items-start gap-[15px]">
                <h3 className='font-bold text-[20px]'>Join Newsletter</h3>
                <div className='flex items-start flex-col gap-2'>
                    <input type="text" placeholder='Enter your email address' className='pl-2 w-[250px] py-[9px] rounded-[5px]'/>
                    <button className='px-[20px] py-[8px] bg-btn-color rounded-[3px] text-[12px font-semibold]'>Subcribe Now</button>
                </div>

            </div>
           </div>
           <div className='stroke h-[1px] w-full bg-white mt-[50px] mb-[20px]'>

           </div>
           <div className="copyrights flex lg:justify-between justify-center gap-[15px] flex-wrap">
                <p>© 2023, All Rights Reserved</p>
                <div className='flex items-center gap-5 text-[20px]'>
                <i class="bi bi-twitter"></i>
                <i class="bi bi-facebook"></i>
                <i class="bi bi-instagram"></i>
                <i class="bi bi-github"></i>
                </div>
            </div>
    </div>
         
   </section>
  )
}

export default Footer