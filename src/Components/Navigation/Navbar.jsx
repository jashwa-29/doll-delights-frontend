import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = ({cartCount}) => {
      const [resp , setResp] = useState(0)
      const respfunc =()=>{
      setResp(null)
      }
      const respclosefunc =()=>{
        setResp(0)
        }
  return (
    <nav className='bg-main-color py-[15px] top-0 sticky z-50'>
           <div className='w-[93%] mx-auto'>
                <div className="main-nav flex justify-between items-center flex-col lg:flex-row">
                    
                   <div className="nav-logo flex items-center gap-[184px] md:gap-[508px]">
                        <a href="/" className='enriqueta font-extrabold text-[25px]'>Doll Delights</a>
                        {
                          resp === 0?(
                            <i class="bi bi-list lg:hidden flex text-[26px]" onClick={()=>respfunc()}></i>
                          ):(
                            <i class="bi bi-x lg:hidden flex text-[26px]" onClick={()=>respclosefunc()}></i>
                          )
                        }
                     

                   </div>
                   {
                    resp === 0?(

                      <div className='flex items-center lg:gap-[80px] gap-[20px] lg:flex-row flex-col hidden lg:flex'>
                      <div className="nav-links flex items-center gap-[35px] lg:flex-row flex-col">
                      <Link to={"/home"}><p className='rubik  font-semibold text-[17px] active:underline'>HOME</p></Link>
                      <Link to={"/collection"}><p className='rubik font-semibold text-[17px] propro active:underline'>PRODUCUTS</p></Link>
                      <Link to={"/contact"}><p className='rubik font-semibold text-[17px] active:underline'>CONTACT</p></Link>
                      </div>
                      <div className=' flex items-center py-[3px] bg-white px-[10px] rounded-[8px] opacity-[70%]'>
                      <i class="bi bi-search font-black  active:underline"></i>
                       <input type="text" className='bg-transparent w-[200px]'/>
                      </div>
                      <div className="cart-icon flex items-center gap-[45px] flex-col lg:flex-row">
                      <Link to={"/cart"}>
                       <div className='flex items-center'><i class="bi bi-cart text-[18px]  active:underline"></i> <p className='text-[15px]'>{cartCount}</p></div></Link>
           <Link to={"/account"}><i class="bi bi-person text-[20px]  active:underline"></i></Link>
           <Outlet></Outlet>
                      </div>
                       </div>
                    ):
                    (
                      
                   <div className='flex items-center lg:gap-[80px] gap-[20px]  flex-col py-5'>
                   <div className="nav-links flex items-center gap-[35px] lg:flex-row flex-col">
                   <Link to={"/home"}><p className='rubik  font-semibold text-[17px] active:underline'>HOME</p></Link>
                   <Link to={"/collection"}><p className='rubik font-semibold text-[17px] propro active:underline'>PRODUCUTS</p></Link>
                   <Link to={"/contact"}><p className='rubik font-semibold text-[17px] active:underline'>CONTACT</p></Link>
                   </div>
                   <div className=' flex items-center py-[3px] bg-white px-[10px] rounded-[8px] opacity-[70%]'>
                   <i class="bi bi-search font-black  active:underline"></i>
                    <input type="text" className='bg-transparent w-[200px]'/>
                   </div>
                   <div className="cart-icon flex items-center gap-[45px] flex-col lg:flex-row">
                   <Link to={"/cart"}>
                    <div className='flex items-center'><i class="bi bi-cart text-[18px]  active:underline"></i> <p className='text-[15px]'>{cartCount}</p></div></Link>
        <Link to={"/account"}><i class="bi bi-person text-[20px]  active:underline"></i></Link>
        <Outlet></Outlet>
                   </div>
                    </div>
                    )
                   }


{/* <p>{cartCount}</p> */}
                </div>
           </div>

        {/* <button>jhsgkhs</button> */}
    </nav>
  )
}

export default Navbar