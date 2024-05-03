import React from 'react'

const Catagories = () => {
  return (
    <section className='py-[50px] poppins lg:flex hidden'>
        <div className='w-[93%] mx-auto'>
        <div className='flex flex-col items-center gap-[5px] my-[30px]'>
                <h2 className='font-bold text-[32px]'>Categories</h2>
                <p className='text-[15px] text-black opacity-70'>Find what you are looking for</p>
            </div>

            <div className='w-full bg-light-main py-[30px]'>
    <div className="cato-row flex justify-center items-center lg:gap-[100px]">
        <div className="cato-card  relative bottom-[175px] flex flex-col items-center">
            <img src={require('../assets/cotton-doll-img.png')} alt="" className='w-[230px]'/>
            <h4 className='font-bold text-[20px]'>Plastic Toys</h4>
        </div>
        <div className="cato-card flex flex-col items-center gap-[5px]">
            <img src={require('../assets/plastic-gree-toy.png')} alt=""   className='w-[230px]'/>
            <div className='text-center flex flex-col items-center gap-[8px]'>
              <h4 className='font-bold text-[20px]'>Plastic Toys</h4>
              <p className='text-black opacity-55 text-[16px]'>Horem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
              <button className='flex items-center gap-[2px] px-[30px] py-[12px] mt-[10px] bg-btn-color rounded-[5px] hover:gap-2'>Explore<i class="bi bi-arrow-right"></i></button>
            </div>
        </div>
        <div className="cato-card  relative bottom-[175px] flex flex-col items-center">
            <img src={require('../assets/wooden-kids-toy.png')} alt=""  className='w-[230px]'/>
            <h4 className='font-bold text-[20px]'>Plastic Toys</h4>
        </div>
    </div>
</div>



            
        </div>
    </section>
  )
}

export default Catagories