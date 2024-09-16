import React from 'react'
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Freebook from '../components/Freebook';
import Footer from '../components/footer';
import Course from '../components/Course';

function Home() {
  return (
   <>
    <Navbar/>
    <Banner/>
    <Freebook/>
    {/* <Course/> */}
    <Footer/>
   </>
  )
}

export default Home