import React from 'react'

const Arrivals = () => {
  return (
    <section className='mt-[30px] mb-[50px] poppins'>
        <div className='w-[93%] mx-auto'>
               <div className="arrivals-heading flex justify-center items-center mb-[35px]">
                      <h2 className='font-bold text-[32px]'>New Arrivals</h2>
               </div>
               <div className="main-arrivals">
                <div className="arrivals-row flex justify-center items-center lg:gap-[80px] gap-[30px]  flex-wrap ">
                         <div className='arrivals-card flex flex-col items-start gap-[5px]'>
                         <img src={require('../assets/arrivals-img-1.png')} alt=""  className='w-[280px] h-[300px]'/>
                         <div>
                            <h4 className='font-semibold text-[20px]'>Natural Plants</h4>
                            <h5 className='font-medium text-[19px] text-black opacity-50 pt-[5px]'>RS.600</h5>
                         </div>
                         </div>

                         <div className='arrivals-card flex flex-col items-start gap-[5px]'>
                         <img src={require('../assets/arrivals-img-2.png')} alt="" className='w-[280px] h-[300px]'/>
                         <div>
                         <h4 className='font-semibold text-[20px]'>Natural Plants</h4>
                            <h5 className='font-medium text-[19px] text-black opacity-50 pt-[5px]'>RS.600</h5>
                         </div>
                         </div>

                         <div className='arrivals-card flex flex-col items-start gap-[5px]'>
                         <img src={require('../assets/arrivals-img-3.png')} alt="" className='w-[280px] h-[300px]'/>
                         <div>
                         <h4 className='font-semibold text-[20px]'>Natural Plants</h4>
                            <h5 className='font-medium text-[19px] text-black opacity-50 pt-[5px]'>RS.600</h5>
                         </div>
                         </div>

                         <div className='arrivals-card flex flex-col items-start gap-[5px]'>
                         <img src={require('../assets/arrivals-img-4.png')} alt="" className='w-[280px] h-[300px]'/>
                         <div>
                         <h4 className='font-semibold text-[20px]'>Natural Plants</h4>
                            <h5 className='font-medium text-[19px] text-black opacity-50 pt-[5px]'>RS.600</h5>
                         </div>
                         </div>
                </div>
                <div className='text-center mt-[40px]'>
                    <a href="#" className='underline font-bold text-[22px]'>View More</a>
                </div>
               </div>
        </div>
    </section>
  )
}

export default Arrivals