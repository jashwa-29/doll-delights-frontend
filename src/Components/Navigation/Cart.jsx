import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from './Navbar'
import { useState , useEffect } from 'react'
import { loadStripe} from '@stripe/stripe-js'

const Cart = ({cart , setCart}) => {

  function cartproplusandminus(hh , num) {
    let findproposition = cart.indexOf(hh)
    if (cart[findproposition].count+num >= 0) {
      cart[findproposition].count = cart[findproposition].count+num
      setCart([...cart])
    }
  }

  const [price , setPrice] = useState(0)
  useEffect(() => {
    let initailprivevalue = 0
    cart.map((totalpricevalue)=>
     initailprivevalue = totalpricevalue.count * totalpricevalue.price + initailprivevalue)
     setPrice(initailprivevalue)

  })

  function removefunc(particularitem) {

    let romoveddata = cart.filter((all)=> all.id !== particularitem.id)
    setCart(romoveddata)
    
  }

  function clearcart() {
    setCart([])
  }

  const payment = async()=>{
alert("hello payment process in geting started")
   const stripe = await loadStripe('pk_test_51P3tnISE4nUJnYc3Fuuuu5ZoYKbCKvulpPegD2Ubhnlogs5DSF6xIB30Ktwg0z4QnIlgUIZs6NR52qUCfjPHVTLA00AiJdgfA7')

   const propassing = {
     products:cart
   }
   const headers ={
    "Content-Type":"application/json"
   }
   const resp = await fetch("http://localhost:3200/api/create-checkout-session", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(propassing)
  });
  
  if (!resp.ok) {
    throw new Error("Failed to create checkout session");
  }
  
  const session = await resp.json(); // Define 'session' variable here
  
  const result = stripe.redirectToCheckout({
    sessionId: session.id
  });
  
  if (result.error) {
    console.error("Error redirecting to checkout:", result.error);
  } else {
    console.log("Redirecting to checkout...");
  }
  
  
  }
  

  return (
    <section >

    <Navbar  cartCount={cart.length} />
    <div className=' w-[93%] mx-auto' >
      {cart.length === 0 ? (
      <div className='flex justify-center items-center'>
        <div className=' w-[100px ] h-[376px] flex items-center'>
        <h2 className='font-extrabold poppins text-[33px]'>Your Cart is empty</h2>
        </div>

      </div>
    ) : (
      <div className='my-[50px]'>
        {cart.map((item) => (
          <div>
            <div className='main-cart'>
            <div className='cart-full-box flex lg:flex-row flex-col justify-center items-center border-[1px] py-[15px] my-[10px] lg:gap-[200px]'>
     <div key={item.id} className='flex gap-10 items-center justify-evenly lg:flex-row flex-col'>
            <img src={item.images} alt="" />
            <h3 className='font-bold'>{item.name}</h3>
            <h4>RS.{item.price}</h4>
            <h5>Quantity : {item.count}</h5>
          </div>

          <div className='flex items-center gap-[15px]'>
            <button onClick={()=>cartproplusandminus(item,-1)}  className='px-[15px] py-[8px] bg-light-main border rounded-[5px]'>-</button>
            <button onClick={()=>cartproplusandminus(item,+1)}  className='px-[15px] py-[8px] bg-light-main border rounded-[5px]'>+</button>
          </div>
          <button onClick={()=>removefunc(item)} className='bg-btn-color px-[28px] py-[12px] border-[1px] rounded-[5px]'>Remove</button>
          </div>
            </div>



          </div>

 
     
          
        ))}
        
        <div className='flex flex-col items-center poppins gap-5 my-[20px]'>
              <h3 className='text-[22px] font-bold'>Total price :{price}</h3>
              <div className='flex items-center gap-3'>
                <button onClick={()=>payment()} className='px-[29px] py-[12px] bg-btn-color border-[1px] rounded-[5px]'>Pay Now</button>
                <button onClick={clearcart} className='px-[29px] py-[12px] bg-btn-color border-[1px] rounded-[5px]'>Clear All</button>
              </div>
            </div>
      </div>
    )}
      </div>
    <Footer />
  </section>
  )
}

export default Cart