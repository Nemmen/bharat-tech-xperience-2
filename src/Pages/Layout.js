// import React from 'react'
// import New from '../Components/New'
// import CountDown from '../Components/Countdown/CountDown'
// import About from './About/About'
// import Timeline from './Timeline/Timeline'
// import Prizes from './Prizes/Prizes'
// import Sponsers from './Sponsers/Sponsers'
// import Team from './Team/Team'
// import Contact from './Contactus/Contact'
// import Footer from '../Components/Footer/Footer'
// import Header from '../Components/Header/Header'
// import Community from './Community/Commuinty'
// import Corporate from './Corporate/Corporate'
// import Glimpses from '../Components/components/Glimpses/Glimpses'
// import Mentors from '../Components/components/Mentors/Mentors'
// // import Gallery from './Gallery/Gallery'




// export default function Layout() {
//   const scrollToAbout = () => {
//     const aboutSection = document.getElementById('about'); // Replace 'about' with the actual id of your About section
//     if (aboutSection) {
//       aboutSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };
//   return (
//     <>
//     <Header/>
//         <New />
//       <CountDown />
//       <About />
//       <div id="stars"></div>
//       <Timeline />
//       <div id="stars"></div>
//       <Prizes />
//       <Sponsers />
//       <div id="stars"></div>
//       <Community/>
//       <div id="stars"></div>
//       <Corporate />
//       <div id="stars"></div>
//       <Glimpses />
//       <div id="stars"></div>
//       <Mentors/>
//       <Team />
      
//       <div id="stars"></div>
//       <Contact />
//       {/* <div id="stars"></div>
//       <Gallery/> */}
//       <Footer />
//       <div id="stars"></div>
//     </>
//   )
// }
import React, { useEffect, useState } from "react";

import New from "../Components/New";
import CountDown from "../Components/Countdown/CountDown";
import About from "./About/About";
import Timeline from "./Timeline/Timeline";
import Prizes from "./Prizes/Prizes";
import Sponsers from "./Sponsers/Sponsers";
import Team from "./Team/Team";
import Contact from "./Contactus/Contact";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Community from "./Community/Commuinty";
import Corporate from "./Corporate/Corporate";
import Glimpses from "../Components/components/Glimpses/Glimpses";
import Mentors from "../Components/components/Mentors/Mentors";
import Organizers from "../Components/components/Organizers/Organizers";
import Judges from "../Components/components/Judges/Judges";
import CodeOfConduct from "../Components/components/CodeofConduct/CodeofConduct";
import Faq from "./Faq/Faq";
// import logo from "../../Assets/textures/2.0logo.png"
// import Gallery from './Gallery/Gallery'

export default function Layout() {
  const [showAnimation, setShowAnimation] = useState(true);
  const [count, setCount] = useState(5);

  useEffect(() => {
    // Countdown logic
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      // Wait for logo animation before showing the content
      setTimeout(() => setShowAnimation(false), 2000); // 2 seconds for logo zoom
    }
  }, [count]);

  return (
    <>
      
        <>
          <Header />
          <New />
          <CountDown />
          <About />
          <div id="stars"></div>
          <Timeline />
          <div id="stars"></div>
          <Prizes />
          <Sponsers />
          <div id="stars"></div>
          <Community />
          <div id="stars"></div>
          <Corporate />
          <div id="stars"></div>
          <Glimpses />
          <div id="stars"></div>
          {/* <Judges /> */}
          <div id="stars"></div>
          <Mentors />
          <div id="stars"></div>
          <Organizers />
          <div id="stars"></div>
          <Faq/>
          <div id="stars"></div>
          <Team />
          {/* <CodeOfConduct/> */}
          <div id="stars"></div>
          <Contact />
          {/* <div id="stars"></div>
          <Gallery/> */}
          <Footer />
          <div id="stars"></div>
        </>
    
    </>
  );
}