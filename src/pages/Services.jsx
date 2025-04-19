import React from 'react'
import ServicesSection from '../components/sections/ServicesSection'
import Banner from '../components/common/Banner'
import { motion } from 'framer-motion'
import SponsorCarousel from '../components/carousels/SponserCarousel'
import Projects from '../pages/Projects'

function Services() {
  return (
    <>
    <div className='w-full overflow-hidden'>
    <div className="relative mb-24 mt-20 text-center flex flex-col justify-center items-center">
    <div className='absolute left-1/2 -translate-x-1/2 rotate-8 w-[180%] h-[15rem] sm:h-[20rem] md:h-[20rem] lg:h-[20rem] xl:h-[25rem] bg-green-500 z-0 rounded-lg top-[-3rem] sm:top-[-5rem] md:top-[-5rem] lg:top-[-5rem] xl:top-[-5rem] overflow-hidden'></div>
            <h2 className="inline-block text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[black] via-[black] to-[black] mb-6 tracking-tight z-0">
              Our Services & Portfolios
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[black] via-[black] to-[black] mx-auto rounded"></div>
            <p className="mt-6 text-[black] max-w-2xl mx-auto text-lg z-10">
              Bringing your cinematic vision to life with world-class expertise and creative excellence
            </p>
    </div>
    
    <ServicesSection/>
    <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-green-500 mb-12 tracking-tight z-0 text-center mt-12">
              Our Partners & Sponsers
            </h2>
    <SponsorCarousel/>
    <Projects/>
    </div>
    </>
  )
}

export default Services