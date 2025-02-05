// import React from 'react';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { Award, Code, Cpu, Globe } from 'lucide-react';

// const judges = [
//   {
//     name: "Dr. Sarah Chen",
//     role: "AI Research Director",
//     company: "TechForward Labs",
//     expertise: "Artificial Intelligence & Machine Learning",
//     image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=500",
//     icon: <Cpu className="w-6 h-6" />
//   },
//   {
//     name: "James Rodriguez",
//     role: "Senior Tech Lead",
//     company: "Innovation Hub",
//     expertise: "Full-Stack Development & Cloud Architecture",
//     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=500",
//     icon: <Code className="w-6 h-6" />
//   },
//   {
//     name: "Dr. Emily Watson",
//     role: "Director of Engineering",
//     company: "Global Tech Solutions",
//     expertise: "Systems Architecture & Scalability",
//     image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=500",
//     icon: <Globe className="w-6 h-6" />
//   }
// ];

// function App() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="min-h-screen bg-inherit py-12 px-4">
//          <div className="container">
//                          <div className="w-full">
//                            <div className="flex flex-wrap w-full py-32 relative mb-4">
//                              <img alt="gallery" className="w-full  object-contain h-full object-center block absolute inset-0 opacity-20" src="https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumoeyUK6NYKaOD79uVLETgslNocC8Sqw3xt5mA" />
//                              <div className="text-start pl-5 md:pl-20 relative z-10 w-full">
//                                <h2 className="text-xl md:text-6xl text-orange-600 font-medium title-font mb-2 text-animation">Our Esteemed Judges_</h2>
//                              </div>
//                            </div>
//                          </div>
//                        </div>
//       <div className="max-w-7xl mx-auto">
//         {/* <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
//             <Award className="w-10 h-10 text-yellow-400" />
//             Meet Our Distinguished Judges
//           </h2>
//           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//             Industry leaders and experts who will evaluate your innovative solutions and determine the next big breakthrough
//           </p>
//         </div> */}

//         <Slider {...settings}>
//           {judges.map((judge, index) => (
//             <div key={index} className="px-4">
//               <div className="relative group">
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
//                 <div className="relative bg-gray-900 p-16 h-[500px] rounded-3xl transform transition-transform duration-300 hover:-translate-y-2">
//                   <div className="flex  items-start gap-4">
//                     <div className="flex-shrink-0 w-1/2">
//                       <img
//                         src={judge.image}
//                         alt={judge.name}
//                         className="w-96 h-96 rounded-xl object-cover"
//                       />
//                     </div>
//                     <div className="flex-1">
//                       <div className="flex items-center gap-2 mb-2">
//                         {judge.icon}
//                         <h3 className="text-xl font-bold text-white">{judge.name}</h3>
//                       </div>
//                       <p className="text-yellow-400 font-medium">{judge.role}</p>
//                       <p className="text-gray-400 text-sm mb-2">{judge.company}</p>
//                       <div className="bg-gray-700/50 px-3 py-1.5 rounded-lg inline-block">
//                         <p className="text-gray-300 text-sm">{judge.expertise}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// }

// export default App;
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Award, Code, Cpu, Globe, Briefcase, Building, Music } from "lucide-react";

const judges = [
  {
    name: "Santosh Kumar Mishra",
    role: "Software Engineer",
    company: "Microsoft, Founder of InterviewCafe",
    description:
      "Experienced software engineer at Microsoft and the founder of InterviewCafe, dedicated to mentoring and building innovative solutions.",
    image:
      "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumuH8ULRzGDN7MfW9sTV1IA0zrSZwixYbo25LP",
    icon: <Cpu className="w-8 h-8" />,
  },
  {
    name: "Saumya Awasthi",
    role: "Software Engineer",
    company: "Kigen",
    description:
      "Passionate software engineer at Kigen, specializing in security and embedded systems development.",
    image:
      "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumFUg7qxJbL95YayPfxuDQMFsXlC0oBImU6z28",
    icon: <Code className="w-8 h-8" />,
  },
  {
    name: "Anish Giri",
    role: "Senior Frontend Developer",
    company: "Fidelity Investments",
    description:
      "Expert in frontend technologies, building seamless user experiences at Fidelity Investments.",
    image:
      "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumIDPeZshR21jqluvKkFoRaDpPfCGTtxewIs74",
    icon: <Globe className="w-8 h-8" />,
  },
  {
    name: "Pankaj Judge",
    role: "Founder",
    company: "Chai Thela",
    description:
      "Founder of Chai Thela, an entrepreneur bringing innovative ideas to the food and beverage industry.",
    image:
      "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumyucICVGvj9LGdSxXKPThlzeQcWmgO61ZJ87U",
    icon: <Briefcase className="w-8 h-8" />,
  },
  {
    name: "Gourav Mahipal",
    role: "Managing Director",
    company: "Veritos Infosolutions Pvt. Ltd.",
    description:
      "Managing Director at Veritos Infosolutions, leading digital transformation and innovative software solutions.",
    image:
      "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumFVNhYeJbL95YayPfxuDQMFsXlC0oBImU6z28",
    icon: <Building className="w-8 h-8" />,
  },
  {
    name: "Aditya Garg",
    role: "Associate Consultant",
    company: "Shure Audio Technologies",
    description:
      "Associate Consultant at Shure Audio Technologies, specializing in audio engineering and innovative sound solutions.",
    image:
      "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumXuR8O52YwQAC3BxfPnoR46m9tK5uUkNerSOE",
    icon: <Music className="w-8 h-8" />,
  },
];


function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div className="bottom-[-3rem]">
        <ul className="flex justify-center gap-2"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 bg-gray-400 rounded-full hover:bg-orange-500 transition-colors duration-300" />
    ),
  };

  return (
    <div className="min-h-screen bg-inherit py-12 px-4 mb-12">
      <div className="container">
        
        <div className="w-full">
          
          <div className="flex flex-wrap w-full py-32 relative mb-4">
            
            <img
              alt="gallery"
              className="w-full  object-contain h-full object-center block absolute inset-0 opacity-20"
              src="https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumoeyUK6NYKaOD79uVLETgslNocC8Sqw3xt5mA"
            />
            
            <div className="text-start pl-5 md:pl-20 relative z-10 w-full">
              
              <h2 className="text-xl md:text-6xl text-orange-600 font-medium title-font mb-2 text-animation">
                Our Esteemed Judges_
              </h2>
              
            </div>
            
          </div>
          
        </div>
        
      </div>
      <div className="container mx-auto max-w-7xl">
        <div className="max-w-7xl mx-auto">
          <Slider {...settings} className="judges-slider">
            {judges.map((judge, index) => (
              <div key={index} className="px-4 py-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-all duration-300 blur-xl"></div>
                  <div className="relative bg-gray-800/90 p-8 md:p-12 rounded-3xl transform transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm border border-gray-700/50">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                      <div className="w-full md:w-1/2">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-yellow-500 rounded-2xl transform rotate-6 opacity-20"></div>
                          <img
                            src={judge.image}
                            alt={judge.name}
                            className="relative w-full h-[450px] rounded-2xl object-cover shadow-xl"
                          />
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 space-y-6">
                        <div className="inline-flex items-center gap-3 bg-gray-700/50 px-4 py-2 rounded-full">
                          {judge.icon}
                          <span className="text-gray-300 font-medium">
                            {judge.company}
                          </span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white">
                          {judge.name}
                        </h3>
                        <p className="text-xl text-orange-400 font-medium">
                          {judge.role}
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                          {judge.description}
                        </p>
                        <div className="flex items-center gap-4 pt-4">
                          <Briefcase className="w-5 h-5 text-gray-400" />
                          <span className="text-gray-400">
                          Bringing years of expertise and impactful contributions
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default App;
