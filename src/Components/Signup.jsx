import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import axios from 'axios'


const Signup = () => {

const[email, setEmail] = useState('')
const[password, setPassword] = useState('')
const[alert , setAlert] = useState(true)
// console.log(email , Password)

const passing = useNavigate()
  async function signupcode(e){
    e.preventDefault()
    await axios.post("https://doll-delights-backend-project-2.onrender.com/signin",{email , password}).then((res)=>{
          if (res.data == "exist") {
            // alert("user id already exist")
            setAlert(false)
          } else {
            passing('/login')
            setAlert(true)
          }
     })
  }
  return (
    <section className=' h-lvh flex items-center justify-center'>

      <div className="w-[93%] mx-auto poppins">
      
        <div className=" lg:mx-auto md:mx-auto sm:mx-0 poppins flex flex-col justify-center items-center text-center border-[1px] border-gray lg:px-[30px] lg:py-[30px] p-[20px] rounded-[10px] sm:w-[400px] lg:w-[530px]">
        <h3 className='font-bold text-[28px]'>Sign iN</h3>
        <p className=' pb-[20px] text-black opacity-65'>Welcome to Doll Delights</p>
        <form method='post' onSubmit={signupcode}>
        <div className='flex flex-col items-start gap-[30px] py-[15px]'>
            <input type="text" placeholder='Email address' className='lg:w-[450px] w-full border-[1px] border-black opacity-55 py-[15px] pl-3 rounded-[6px]' onChange={(e)=>setEmail(e.target.value)} required/>
            <input type="text"  placeholder='Password' className='lg:w-[450px] w-full border-[1px] border-black opacity-55 py-[15px] pl-3 rounded-[6px]' onChange={(e)=>setPassword(e.target.value)}  required/>
           
           </div>

         {
          alert === false ?   <p className='text-red-700 text-center pb-2 font-semibold'>User ID already exist !</p> : null
         }
           <p className='flex items-center lg:gap-[5px] gap-[3px] justify-center lg:text-[20px] text-[12px]'>Already have an Account ?<Link to={'/login'}><p className='text-btn-color font-normal lg:text-[20px] text-[12px] underline'>Login</p></Link></p>
           <button className='w-full py-[11px] bg-btn-color rounded-[5px] font-medium text-[19px] my-[20px]' type='submit'>Register</button>
        </form>
       

        </div>

      </div>

       

    </section>
  )
}

export default Signup
