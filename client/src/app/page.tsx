"use client"
import Image from 'next/image';
import Header from './components/Header';
import Alert from './components/Alert';
import { useState } from 'react';
import Footer from './components/Footer';
import Trending from './components/Trending';

export default function Home() {
  const [showComponent, setShowComponent] = useState(true);

  const toggleComponent = () => {
    setShowComponent(!showComponent);
  };
  return (
    <main>
      {showComponent && <Alert handleClick={toggleComponent} />}
      <Header />
      <Trending />
      <Footer />
    </main>
  );
}
