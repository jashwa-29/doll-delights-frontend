import React from 'react'

export const Hero = () => {
  return (
    <section className='bg-main-color lg:pt-[120px] lg:pb-[123px] py-[60px] poppins'>
        <div className='flex justify-center items-center gap-[100px] w-[93%] mx-auto lg:flex-row flex-col'>
            <div className="hero-img">
                <img src={require('../assets/teddy hero sec img.png')} alt="" />
            </div>
            <div className="hero-content flex flex-col items-start gap-[5px]">
                <h1 className='font-bold lg:text-[50px] text-[30px] lg:w-[600px] w-auto'>Get your Child a comfy Buddy..!</h1>
                <p className=' text-black opacity-55 lg:text-[18px] text-[12px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />eiusmod tempor incidi dipiscing elit, sed do eiusmod tempor <br /> incidi.</p>
                <button className='bg-btn-color px-[30px] py-[13px] rounded-[5px] mt-7 font-semibold text-[17px]'>Explore more</button>
            </div>
        </div>
    </section>
  )
}
