import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from './Navbar'
import productdetails from './Productdetails'

const Collection = ({cart, setCart}) => {
  return (
    <section>
      <Navbar cartCount={cart.length}></Navbar>

<div className='w-[93%] mx-auto mb-[50px]'>
  <div className='flex items-center justify-center my-[40px]'>
    <h2 className='font-bold text-[32px]'>Collections</h2>
  </div>
<div className='flex items-center justify-center flex-wrap gap-[30px]'>
            {
              productdetails.map((prod)=>
                <div className='collection-card w-[300px] h-[364px] border-[1px] border-gray flex flex-col items-center gap-[8px] justify-center border-light-gray shadow-sm py-[10px]'>
                  <img src={prod.images} alt="" />
                  <h4 className=' text-[18px] font-semibold'>{prod.name}</h4>
                  <h5>RS.{prod.price}</h5>
                  <button onClick={()=>setCart([...cart,prod])} className='px-[28px] py-[10px] bg-btn-color rounded-[5px]'>Add to Cart</button>
                </div>
              )
            }
     </div>
</div>



      <Footer></Footer>
    </section>
  )
}

export default Collection