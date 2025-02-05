import React from "react";
// import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img1 from "../../Assets/1.png";
import img2 from "../../Assets/2.png";
import img3 from "../../Assets/3.png";
import img4 from "../../Assets/4.png";
import line1 from "../../Assets/line-1.png";
import line2 from "../../Assets/line-2.png";
import brochure from "../../Assets/brochure.pdf";
import rules from "../../Assets/Rules.pdf";

import "./style.css";
// import Header from "../../Components/Header/Header";
const Home = () => {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <section class="wrapper">
        <div id="stars"></div>
        <div className="flex w-full justify-center items-center flex-wrap gap-x-7 lg:mb-[-100px] mb-16">
        <img className="lg:w-20 w-12 object-contain block" src="https://zko8va4y8i.ufs.sh/f/GunMk0mxX0j1UWTl6VOrbucQVPlkfON7hmUjgBsFTpaiEMXy" alt="" />
        <img className="lg:w-20 w-12 object-contain block" src="https://zko8va4y8i.ufs.sh/f/GunMk0mxX0j1XeggSKI5MLKCsAboJV8YcS0hQlt3zjI6PH7w" alt="" />
        <img className="lg:w-20 w-12  object-contain block" src="https://zko8va4y8i.ufs.sh/f/GunMk0mxX0j1eDwMPzaqBE3Tc9OfeNG6Ht0Q1DCAhwvkjIs2" alt="" />
        <img className="lg:w-20 w-12  object-contain block" src="https://zko8va4y8i.ufs.sh/f/GunMk0mxX0j19AZNmycPh8yjMNsup3ceEX0l75rBLQ9KGT1Y" alt="" />
        
    
        </div>
        <section class="text-white body-font flex align-middle  -mt-12 overflow-x-hidden ">
          <div class="container px-5 md:px-20 lg:mx-auto md:mx-auto sm:mx-auto  mx-0 my-auto ">
            <div className="flex justify-between">
              <img className="w-10 h-10 hidden md:block" src={img1} alt="" />
              <img className="w-10 h-10 hidden md:block" src={img2} alt="" />
            </div>
            <div className="flex justify-between">
              <img className="hidden md:block my-5" src={line1} alt="" />
              <div className="flex justify-center flex-col">
                <div class="flex flex-col  md:text-center w-full mb-8">
                  <h1 class="first-text sm:text-[40px] text-[40px] lg:text-[90px] uppercase font-medium title-font mb-2 text-white">
                    Bharat-Tech-Xperience
                    <span className="ml-4">2.0</span>
                  </h1>
                  <div className=" w-full overflow-hidden flex items-center justify-center lg:gap-x-4 md:gap-x-4 gap-x-2">
                    <div className="h-[1px] lg:w-1/3 w-1/4 bg-white"></div>
                    <div>
                      <p class="w-5/6 mx-auto  text-center leading-relaxed lg:text-5xl md:text-4xl text-base font-semibold">
                        NATIONAL LEVEL HACKATHON
                      </p>
                    </div>

                    <div className="h-[1px] lg:w-1/3 w-1/4 bg-white"></div>
                  </div>

                  <p class="lg:w-2/3 mx-auto leading-relaxed text-base mt-4 ">
                    Empower Your Tech Dreams: Register for Bharat Tech Xperience
                    and turn your ideas into reality. Join us on a path of
                    limitless innovation!
                  </p>
                </div>
                {/* <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto  md:px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
              <div class="relative flex-grow w-full">
                <label for="full-name" class="leading-7 text-sm text-white">
                  Full Name
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative flex-grow w-full">
                <label for="email" class="leading-7 text-sm text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button class="text-white bg-indigo-500 border-0 py-2 w-full md:w-fit px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Register
              </button>
            </div> */}
                <div className="flex flex-wrap justify-center items-center gap-4">
                 
                  {/* <Link to='/'>
               <button className='bg-gray-500  py-2 px-6 hover:bg-green-500 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px] '>Download Brochure</button>
             </Link> */}
                  <a
                    href={brochure}
                    download="Brochure"
                    className="bg-gray-500 py-2 px-6 hover:bg-green-500 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]"
                  >
                    Download Brochure
                  </a>
                  <a
                    href={rules}
                    download="Rules & Regulations"
                    className="bg-gray-500 py-2 px-6 hover:bg-green-500 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]"
                  >
                    Rules & Regulations
                  </a>
                </div>
              </div>
              <img className="hidden md:block my-5 " src={line2} alt="" />
            </div>
            <div className="flex justify-between">
              <img className="w-10 h-10 hidden md:block" src={img3} alt="" />
              <img className="w-10 h-10 hidden md:block" src={img4} alt="" />
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
