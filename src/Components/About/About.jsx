import React from 'react'

const About = () => {
  return (
    <section className='my-[50px] poppins'>
        <div className="w-[93%] mx-auto">
            <div className='flex flex-col items-center gap-[5px] my-[40px]'>
                <h2 className='font-bold text-[32px]'>About</h2>
                <p className='text-[15px] text-black opacity-70'>Order now and appreciate the beauty of nature</p>
            </div>

            <div className="about-row flex items-center justify-center lg:gap-[130px] gap-[30px] flex-wrap">
                <div className="about-card flex flex-col items-center gap-[20px]">
                    <img src={require('../assets/horse-about-img.png')} alt="" className='w-[90px]'/>
                    <div className='flex flex-col items-center gap-[8px] text-center'>
                        <h4 className='font-bold text-[19px]'>Large Assortment</h4>
                        <p className=' text-black opacity-70 text-[19px]'>we offer many different types of products <br /> with fewer variations in each category.</p>
                    </div>
                </div>

                <div className="about-card flex flex-col items-center gap-[20px]">
                    <img src={require('../assets/box-about-img (1).png')} alt="" className='w-[90px]'/>
                    <div className='flex flex-col items-center gap-[8px] text-center'>
                        <h4 className='font-bold text-[19px]'>Large Assortment</h4>
                        <p className=' text-black opacity-70 text-[19px]'>4-day or less delivery time, free shipping  <br /> and an expedited delivery option.</p>
                    </div>
                </div>

                <div className="about-card flex flex-col items-center gap-[20px]">
                    <img src={require('../assets/call-about-img.png')} alt="" className='w-[90px]'/>
                    <div className='flex flex-col items-center gap-[8px] text-center'>
                        <h4 className='font-bold text-[19px]'>Large Assortment</h4>
                        <p className=' text-black opacity-70 text-[19px]'>answers to any business related inquiry <br /> 24/7 and in real-time.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About