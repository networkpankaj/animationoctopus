import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Intro from './components/Intro';
import Description from './components/Description';
import Contact from './components/Contact';
import ThreeScene from './components/ThreeScene';
// import FirstSection from './components/FirstSection'
// import RippleBackground from './components/RippleBackground';
import './styles/main.css';

function App() {
  return (
    <>
      {/* <RippleBackground /> */}
      <Header />
      <main>
        <Banner />
        <Intro />
        <Description />
        <Contact />
        {/* <FirstSection /> */}
      </main>
      <ThreeScene />
    </>
  );
}

export default App;