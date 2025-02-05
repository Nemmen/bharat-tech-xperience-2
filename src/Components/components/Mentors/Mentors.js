
// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { ChevronLeft, ChevronRight, Twitter } from "lucide-react"

// import communityBg from "../../../Assets/2 copy.png"
// const mentors = [
//   {
//     name: "Mr. Suraj Mani",
//     role: "Community Organizer @ TFUG Jalandhar | Community Building, Networking",
//     image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumyfXVfuGvj9LGdSxXKPThlzeQcWmgO61ZJ87U",
//     quote:
//       "His journey has been defined by a deep involvement in community organization and mentorship.",
//     twitter: "https://twitter.com/priya_sharma",
//   },
//   {
//     name: "Ms. Amanpreet Kaur",
//     role: "GDG Jalandhar Core Member, Hackathon Mentor",
//     image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumu4818SzGDN7MfW9sTV1IA0zrSZwixYbo25LP",
//     quote:
//       "Women Techmakers Ambassador | Technical Speaker | GDG Jalandhar Core Member | Hackathon Mentor",
//     twitter: "https://zko8va4y8i.ufs.sh/f/GunMk0mxX0j1xeHMjbepbcDkl89RFvZQW1IV2iPaSqgf3Kyp",
//   },
//   {
//     name: "Mr. Veer Pratap Singh",
//     role: "Blockchain Innovation Head",
//     image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumn6KBCIA1z8WShHVuacLDIv5XR0itPqOklGMb",
//     quote:
//       "As a Team Lead at Antier Solutions, I provide architectural guidance, solve complex technical challenges, and make informed decisions for software projects.",
//     twitter: "https://twitter.com/sarah_chen",
//   },
//   {
//     name: "Ms. Mansi Lakra",
//     role: "Blockchain Innovation Head",
//     image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumYy6s5fbtjEUG1hRlbryNkzHodgPJ7acmI8ue",
//     quote:
//       "A dedicated learner and a firm believer in the transformative potential of blockchain technology.",
//     twitter: "https://twitter.com/sarah_chen",
//   },
//   {
//     name: "Mr. Udayveer Singh",
//     role: "Senior Blockchain Engineer",
//     image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAum8W977yjXlJfrKGuWUjb4n6NYRd3wE9DxCgy0",
//     quote:
//       "Bachelor of Engineering In Computer Science from Panjab University. Now working as a blockchain tech lead at Antier solutions, building blockchain products for various clients around the world.",
//     twitter: "https://twitter.com/sarah_chen",
//   },
//   {
//     name: "Mr. Simar Preet Singh",
//     role: "Community Organiser, Google Developer Groups Jalandhar",
//     image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumcu9tc7TH8VXEy6oP2FKNmz4aCbwtxqpB9gkJ",
//     quote:
//       "A seasoned Software Engineer with over 6 years of experience in transforming ideas into digital realities.",
//     twitter: "https://twitter.com/sarah_chen",
//   },
//   {
//     name: "Mr. Pranav Singh Parmar",
//     role: "Mobile App Developer",
//     image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumJrVrCI2viyu6xWXKJ2tVo5vgeS7mwpHlNsha",
//     quote:
//       "Experienced Mobile App Developer proficient in iOS, Android, Flutter, and React Native. ",
//     twitter: "https://twitter.com/sarah_chen",
//   },
// ]

// export default function Mentors() {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [direction, setDirection] = useState(0)

//   const slideVariants = {
//     enter: (direction) => ({
//       x: direction > 0 ? 1000 : -1000,
//       opacity: 0,
//     }),
//     center: {
//       zIndex: 1,
//       x: 0,
//       opacity: 1,
//     },
//     exit: (direction) => ({
//       zIndex: 0,
//       x: direction < 0 ? 1000 : -1000,
//       opacity: 0,
//     }),
//   }

//   const swipeConfidenceThreshold = 10000
//   const swipePower = (offset, velocity) => {
//     return Math.abs(offset) * velocity
//   }

//   const paginate = (newDirection) => {
//     setDirection(newDirection)
//     setCurrentIndex((prevIndex) => {
//       let nextIndex = prevIndex + newDirection
//       if (nextIndex < 0) nextIndex = mentors.length - 1
//       if (nextIndex >= mentors.length) nextIndex = 0
//       return nextIndex
//     })
//   }

//   return (
//     <section className="w-full bg-inherit py-20 px-4 md:px-6 relative overflow-hidden">
//       {/* Background glow effect */}
//       <div className="absolute inset-0">
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px]" />
//       </div>
//       <div className="container">
//                          <div className="w-3/4">
//                            <div className="flex flex-wrap w-full py-32 relative mb-4">
//                              <img alt="gallery" className="w-full  object-contain h-full object-center block absolute inset-0 opacity-20" src={communityBg} />
//                              <div className="text-start pl-5 md:pl-20 relative z-10 w-full">
//                                <h2 className="text-xl md:text-6xl text-orange-600 font-medium title-font mb-2 text-animation">Our Esteemed Mentors_</h2>
//                              </div>
//                            </div>
//                          </div>
//                        </div>
//       <div className="max-w-7xl mx-auto">
        

//         <div className="relative h-[500px] md:h-[400px]">
//           <AnimatePresence initial={false} custom={direction}>
//             <motion.div
//               key={currentIndex}
//               custom={direction}
//               variants={slideVariants}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               transition={{
//                 x: { type: "spring", stiffness: 300, damping: 30 },
//                 opacity: { duration: 0.2 },
//               }}
//               drag="x"
//               dragConstraints={{ left: 0, right: 0 }}
//               dragElastic={1}
//               onDragEnd={(e, { offset, velocity }) => {
//                 const swipe = swipePower(offset.x, velocity.x)
//                 if (swipe < -swipeConfidenceThreshold) {
//                   paginate(1)
//                 } else if (swipe > swipeConfidenceThreshold) {
//                   paginate(-1)
//                 }
//               }}
//               className="absolute w-full"
//             >
//               <div className="grid md:grid-cols-2 gap-8 items-center">
//                 <div className="relative aspect-square md:aspect-auto md:h-[450px] rounded-2xl overflow-hidden">
//                   <img
//                     src={mentors[currentIndex].image || "/placeholder.svg"}
//                     alt={mentors[currentIndex].name}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//                 </div>

//                 <div className="text-left space-y-6 ml-8">
//                   <div>
//                     <h3 className="text-3xl font-bold text-white mb-2">{mentors[currentIndex].name}</h3>
//                     <p className="text-orange-500 text-lg">{mentors[currentIndex].role}</p>
//                   </div>

//                   <blockquote className="text-gray-300 text-lg leading-relaxed ">
//                     "{mentors[currentIndex].quote}"
//                   </blockquote>

//                   <a
//                     href={mentors[currentIndex].twitter}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center text-white hover:text-orange-500 transition-colors"
//                   >
                  
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           </AnimatePresence>

//           {/* Navigation Controls */}
//           <div className="absolute bottom-0 left-0 md:bottom-4 flex space-x-4">
//             <button
//               variant="ghost"
//               size="icon"
//               onClick={() => paginate(-1)}
//               className="text-white hover:text-orange-500 transition-colors"
//               aria-label="Previous mentor"
//             >
//               <ChevronLeft className="h-6 w-6" />
//             </button>
//             <button
//               variant="ghost"
//               size="icon"
//               onClick={() => paginate(1)}
//               className="text-white hover:text-orange-500 transition-colors"
//               aria-label="Next mentor"
//             >
//               <ChevronRight className="h-6 w-6" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import communityBg from "../../../Assets/2 copy.png"

const mentors = [
  {
    id: 1,
    name: "Mr. Suraj Mani",
    role: "Community Organizer @ TFUG Jalandhar | Community Building, Networking",
    image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumyfXVfuGvj9LGdSxXKPThlzeQcWmgO61ZJ87U",
    quote: "Committed to building impactful tech communities and fostering innovation.",
    bio: "As a community organizer at TFUG Jalandhar, Suraj focuses on building meaningful networks and inspiring others through his mentorship and leadership in tech communities."
  },
  {
    id: 2,
    name: "Ms. Amanpreet Kaur",
    role: "GDG Jalandhar Core Member, Hackathon Mentor",
    image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumu4818SzGDN7MfW9sTV1IA0zrSZwixYbo25LP",
    quote: "Passionate about mentoring and empowering women in technology.",
    bio: "Amanpreet empowers women in tech and mentors hackathon participants, leveraging her expertise as a GDG Jalandhar Core Member and Women Techmakers Ambassador."
  },
  {
    id: 3,
    name: "Mr. Veer Pratap Singh",
    role: "Senior Software Engineer",
    image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumn6KBCIA1z8WShHVuacLDIv5XR0itPqOklGMb",
    quote: "Driving innovation and solving complex challenges in blockchain technology.",
    bio: "Veer specializes in blockchain innovation, leading teams at Antier Solutions to architect robust software solutions and drive technical advancements in blockchain technology."
  },
  {
    id: 4,
    name: "Ms. Mansi Lakra",
    role: "Blockchain Consultant & Business Advisor",
    image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumYy6s5fbtjEUG1hRlbryNkzHodgPJ7acmI8ue",
    quote: "Dedicated to exploring and advancing blockchain solutions.",
    bio: "Mansi is passionate about leveraging blockchain technology to solve real-world problems, driving innovation as the Blockchain Innovation Head."
  },
  {
    id: 5,
    name: "Mr. Udayveer Singh",
    role: "Senior Blockchain Engineer",
    image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAum8W977yjXlJfrKGuWUjb4n6NYRd3wE9DxCgy0",
    quote: "Specializing in blockchain solutions for global scalability.",
    bio: "Udayveer brings extensive experience in blockchain engineering, leading innovative projects to deliver cutting-edge solutions for clients worldwide."
  },
  {
    id: 6,
    name: "Mr. Simar Preet Singh",
    role: "Community Organiser, Google Developer Groups Jalandhar",
    image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumcu9tc7TH8VXEy6oP2FKNmz4aCbwtxqpB9gkJ",
    quote: "Empowering developers through mentorship and community engagement.",
    bio: "Simar combines technical expertise and community leadership to drive impactful initiatives, mentoring developers through GDG Jalandhar."
  },
  {
    id: 7,
    name: "Mr. Pranav Singh Parmar",
    role: "Mobile App Developer",
    image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumJrVrCI2viyu6xWXKJ2tVo5vgeS7mwpHlNsha",
    quote: "Building scalable mobile solutions with a focus on user experience.",
    bio: "Pranav excels in mobile app development, creating high-quality applications across multiple platforms while mentoring aspiring developers."
  },
  {
    id: 8,
    name: "Mr. Viswateja Yetukuri",
    role: "Senior Blockchain Developer",
    image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumP9mUFiZ89C4GnNKHTXFvruVyAOm6ZwU2Sibo",
    quote: "Building scalable mobile solutions with a focus on user experience.",
    bio: "Viswateja Yetukuri excels in blockchain development, building secure and scalable decentralized solutions while mentoring aspiring developers."
  }
];



const MentorSlider = () => {
  const [currentIndices, setCurrentIndices] = useState([0, 1]);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextMentors = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndices(prev => {
        const newIndices = prev.map(index => (index + 2) % mentors.length);
        if (newIndices[1] < newIndices[0]) {
          newIndices[1] = 0;
        }
        return newIndices;
      });
      setTimeout(() => setIsAnimating(false), 1000);
    }
  };

  const prevMentors = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndices(prev => {
        const newIndices = prev.map(index => (index - 2 + mentors.length) % mentors.length);
        if (newIndices[1] < newIndices[0]) {
          newIndices[1] = mentors.length - 1;
        }
        return newIndices;
      });
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextMentors();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-inherit min-h-screen  items-center justify-center p-4">
      <div className="container">
                         <div className="w-3/4">
                           <div className="flex flex-wrap w-full py-32 relative mb-4">
                             <img alt="gallery" className="w-full  object-contain h-full object-center block absolute inset-0 opacity-20" src={communityBg} />
                             <div className="text-start pl-5 md:pl-20 relative z-10 w-full">
                               <h2 className="text-xl md:text-6xl text-orange-600 font-medium title-font mb-2 text-animation">Our Esteemed Mentors_</h2>
                             </div>
                           </div>
                         </div>
                       </div>
      <div className="max-w-7xl w-full mx-auto">
        <div className="relative min-h-[600px] md:min-h-[500px] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {currentIndices.map((mentorIndex) => (
              <div
                key={mentors[mentorIndex].id}
                className={`bg-black/20 rounded-2xl shadow-xl overflow-hidden transition-all duration-500 ease-in-out transform
                  ${isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}
              >
                <div className="flex flex-col md:flex-row h-full">
                  <div className="w-full md:w-2/5 relative h-64 md:h-auto">
                    <img
                      src={mentors[mentorIndex].image}
                      alt={mentors[mentorIndex].name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                  </div>
                  <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                    <div className="space-y-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {mentors[mentorIndex].name}
                      </h3>
                      <p className="text-lg text-orange-600 font-medium">
                        {mentors[mentorIndex].role}
                      </p>
                      <blockquote className="text-gray-50 text-lg italic border-l-4 border-green-700 pl-4">
                        "{mentors[mentorIndex].quote}"
                      </blockquote>
                      <p className="text-gray-400 leading-relaxed text-sm md:text-base text-justify">
                        {mentors[mentorIndex].bio}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevMentors}
              className="p-3 rounded-full bg-white hover:bg-gray-200 transition-colors"
              aria-label="Previous mentors"
            >
              <ChevronUp className="w-6 h-6 text-black" />
            </button>
            <button
              onClick={nextMentors}
              className="p-3 rounded-full bg-white hover:bg-gray-200 transition-colors"
              aria-label="Next mentors"
            >
              <ChevronDown className="w-6 h-6 text-black" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorSlider;
