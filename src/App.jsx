import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Intro from './components/Intro';
import Description from './components/Description';
import Highlight from './components/Highlight';
import ThreeScene from './components/ThreeScene';
import './styles/main.css';
import About from './components/About';
import LocomotiveScroll from 'locomotive-scroll';
import Footer from './components/Footer';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      {/* <RippleBackground /> */}
      <Header />
      <main>
        <Banner />
        <Highlight />
        <About />
        {/* <Eyes /> */}
        <Intro />
        <Description />
        {/* <ThirdSection /> */}
        <Footer />
        {/* <ThirdSection /> */}
        {/* <FirstSection /> */}
      </main>
      <ThreeScene />
    </>
  );
}

export default App;