import React from 'react'
import Navbar from '../../component/Navbar'
import Hero from '../../component/Hero'
import HeroAbout from '../../component/HeroAbout'
import Navigator from '../../component/Navigator'
import Features from '../../component/Features'
import Faq from '../../component/Faq'
import Footer from '../../component/Footer'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <HeroAbout/>
      <Navigator/>
      <Features/>
      <Faq/>
      <Footer/>
      
    </div>
  )
}
