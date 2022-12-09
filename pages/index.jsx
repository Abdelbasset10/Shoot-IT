'use client'
import Head from "next/head"
import About from "../components/About"
import Agenda from "../components/Agenda"
import FAQ from "../components/FAQ"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
const index = () => {
  return (
    <div className="font-copperplate" >    
      <Navbar />
      <Hero />
      <About />
      <Agenda />
      <FAQ />
      <Footer />
    </div>
  )
}

export default index