import React from 'react'
// import './index.css';
import 'tailwindcss/tailwind.css';
import { Hero } from '../hero/Hero';
import Arrivals from '../New arrivals/Arrivals';
import About from '../About/About';
import Catagories from '../Catageries/Catagories';
import BestSellers from '../Best/BestSellers';
import Testimonials from '../testimoinal/Testimonials';
import Footer from '../Footer/Footer';
import Navbar from './Navbar';

const Home = () => {
  return (
    <main>
      <Navbar></Navbar>
        <Hero></Hero>
        <Arrivals></Arrivals>
        <About></About>
        <Catagories></Catagories>
        <BestSellers></BestSellers>
        <Testimonials></Testimonials>
        <Footer></Footer>
    </main>
  )
}

export default Home