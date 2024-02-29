"use client"
import Image from 'next/image';
import Header from './components/Header';
import Alert from './components/Alert';
import { useState } from 'react';
import Footer from './components/Footer';
import Trending from './components/Trending';
import Loader from './components/Loader';

export default function Home() {
  const [showComponent, setShowComponent] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  const toggleComponent = () => {
    setShowComponent(!showComponent);
  };

  setTimeout(() => {
    setShowLoader(false)
  }, 1500);
  
  return (
    <main className='main relative'>
      {showLoader && <Loader />}
      {showComponent && <Alert handleClick={toggleComponent} />}
      <Header />
      <Trending />
      <Footer />
    </main>
  );
}
