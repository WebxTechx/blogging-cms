'use client'
import Header from './components/Header'
import Alert from './components/Alert'
import { useState } from 'react'
import Footer from './components/Footer'
import Trending from './components/Trending'
import Loader from './components/Loader'
import Hero from './components/HomePage/Hero'
import BlogSection from './components/HomePage/BlogSection'
import HrLine from './components/HrLine'
import SponsoredNewsSection from './components/HomePage/SponsoredNewsSection'

export default function Home() {
  const [showComponent, setShowComponent] = useState(true)
  const [showLoader, setShowLoader] = useState(true)

  const toggleComponent = () => {
    setShowComponent(!showComponent)
  }

  setTimeout(() => {
    setShowLoader(false)
  }, 1500)

  return (
    <main className="main relative">
      {showLoader && <Loader />}
      {showComponent && <Alert handleClick={toggleComponent} />}
      {showLoader == false && (
        <div className="">
          <Header />
          <Trending />
          <Hero />
          <BlogSection />
          <HrLine />
          <SponsoredNewsSection />
          <Footer />
        </div>
      )}
    </main>
  )
}
