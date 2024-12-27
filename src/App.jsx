import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Intro from './components/Intro';
import Description from './components/Description';
import Highlight from './components/Highlight';
import Contact from './components/Contact';
import ThreeScene from './components/ThreeScene';
// import FirstSection from './components/FirstSection'
// import RippleBackground from './components/RippleBackground';
import './styles/main.css';
import About from './components/About';
import LocomotiveScroll from 'locomotive-scroll';
import Eyes from './components/Eyes';
// import ThirdSection from './components/thirdSection';

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
        <Eyes />
        <Intro />
        <Description />
        {/* <ThirdSection /> */}
        <Contact />
        <ThirdSection />
        {/* <FirstSection /> */}
      </main>
      <ThreeScene />
    </>
  );
}

export default App;