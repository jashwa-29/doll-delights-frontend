import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import axios from 'axios'
// import Footer from './Footer/Footer'

const Login = () => {
  const[email, setEmail] = useState('')
const[password, setPassword] = useState('')
// console.log(email , Password)

const passing = useNavigate()
async function signupcode(e){
  e.preventDefault()
    await axios.post("http://localhost:3200/login",{email , password}).then((res)=>{
          if (res.data == "exist") {
            passing('/home')
          } else {
           
            alert("Please Enter correct Email id and Password")
          }
     })
  }
  return (

    <div>

        
        <section className='h-lvh flex items-center justify-center'>

<div className="w-[93%] mx-auto poppins">

  <div className=" lg:mx-auto md:mx-auto sm:mx-0 poppins flex flex-col justify-center items-center text-center border-[1px] border-gray lg:px-[30px] lg:py-[30px] p-[20px] rounded-[10px] sm:w-[400px] lg:w-[530px]">
  <h3 className='font-bold text-[28px] pb-[19px]'>Login</h3>
  <form method='post' onSubmit={signupcode}>
  <div className='flex flex-col items-start gap-[30px] py-[15px]'>
      <input type="text" placeholder='Email address' className='lg:w-[450px] w-full border-[1px] border-black opacity-55 py-[15px] pl-3 rounded-[6px]'  onChange={(e)=>setEmail(e.target.value)} required/>
      <input type="text"  placeholder='Password' className='lg:w-[450px]  w-full border-[1px] border-black opacity-55 py-[15px] lg:pl-3 rounded-[6px]' onChange={(e)=>setPassword(e.target.value)}  required/>
     </div>
     {/* <div className='flex items-center gap-[7px] relative right-[32%] pb-[30px]'>
      <input type="checkbox" /> <p className='font-medium'>Remember me</p>
     </div> */}
     <p className='flex items-center lg:gap-[5px] gap-[3px] justify-center lg:text-[20px] text-[12px]'>New to Doll Delights?<Link to={'/signin'}><p className='text-btn-color font-normal lg:text-[20px] text-[12px] underline'>Sign in</p></Link></p>
     <button className='w-full py-[11px] bg-btn-color rounded-[5px] font-medium text-[19px] my-[20px]'>Login</button>
  </form>

  </div>

</div>

 

</section>

{/* <Footer></Footer> */}
</div>







  )
}

export default Login