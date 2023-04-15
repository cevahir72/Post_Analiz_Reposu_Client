import React from 'react'
import Header from '../components/home/Header'
import Hero from '../components/home/Hero'
import Footer from '../components/home/Footer'

const Home = () => {
  return (
    <div style={{fontFamily:"Quicksand"}}>
        <Header/>
        <Hero/>
        <Footer/>
    </div>
  )
}

export default Home