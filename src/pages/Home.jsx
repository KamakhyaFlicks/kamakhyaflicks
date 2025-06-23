import React from 'react'
import Hero from '../components/home/Hero'
import VideoCarousel from '../components/home/VideoCarousel'
import ServicesGrid from '../components/home/ServicesGrid'
import ProjectsGrid from '../components/home/ProjectsGrid'
import BackgroundAnimation from '../components/home/BackgroundAnimation.jsx'
import BannerCarousel from '../components/home/BannerCarousel'
import VideoHeroBanner from '../components/home/VideoHeroBanner'
import OurVision from '../components/home/OurVision'
import MapShowcase from '../components/home/MapShowcase'

const Home = () => {
  return (
    <>
        {/* <BackgroundAnimation/> */}
        <div className=''>

        <VideoHeroBanner/>
        {/* <Hero/> */}
        <VideoCarousel/> 
        <ServicesGrid/>
        <OurVision/>
        {/* <ProjectsGrid/> */}
        <BannerCarousel/>
        <MapShowcase/>
        </div>
    </>
  )
}

export default Home