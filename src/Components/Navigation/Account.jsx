import React from 'react'
// import { Link } from 'react-router-dom'
import Signup from '../Signup'
import Footer from '../Footer/Footer'
import Navbar from './Navbar'

const Account = () => {
  return (
    <div>
      <Navbar></Navbar>
        <Signup></Signup>

        <section>
     <Footer></Footer>
    </section>
    </div>
  )
}

export default Account