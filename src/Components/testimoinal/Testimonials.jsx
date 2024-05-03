import React from 'react'

const Testimonials = () => {
  return (


    <section className='my-[50px] poppins'>
    <div className='w-[93%] mx-auto'>
         <div className='flex flex-col items-center gap-[5px] my-[30px]'>
             <h2 className='font-bold text-[32px]'>Testimonials</h2>
             <p className='text-[15px] text-black opacity-70'>What our Customer says about us</p>
         </div>

         <div className="main-testimoinals flex items-center justify-center flex- flex-wrap lg:gap-[90px] gap-[20px]">
            <div className="testimonials-card bg-light-main lg:w-[550px] w-[full] h-auto px-[40px] py-[20px] rounded-[8px] flex flex-col items-start gap-[20px]">
                <p className='text-black opacity-75 text-[18px]'>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                <div className='flex items-center gap-[17px]'>
                    <img src={require('../assets/image 8.png')} alt="" />
                    <div>
                        <h4 className='font-extrabold text-[18px]'>Sandy Williams</h4>
                        <p className='text-black opacity-50 text-[12px]'>Youtuber</p>
                    </div>
                </div>
            </div>
            <div className="testimonials-card bg-light-main lg:w-[550px] w-[full] h-auto px-[40px] py-[20px] rounded-[8px] flex flex-col items-start gap-[20px]">
                <p className='text-black opacity-75 text-[18px]'>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                <div className='flex items-center gap-[17px]'>
                    <img src={require('../assets/image 8.png')} alt="" />
                    <div>
                        <h4 className='font-extrabold text-[18px]'>Sandy Williams</h4>
                        <p className='text-black opacity-50 text-[12px]'>Youtuber</p>
                    </div>
                </div>
            </div>
         </div>
    </div> 

    </section>
   
  )
}

export default Testimonials