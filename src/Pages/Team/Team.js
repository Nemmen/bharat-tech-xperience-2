import React from "react";
import teamBg from "../../Assets/team.png";
import memImg from "../../Assets/sujal.jpg"
import memImg3 from "../../Assets/amandeep.jpg"
import memImg4 from "../../Assets/abhishek3.jpg"
import memImg5 from "../../Assets/aryanImg.jpg"
import memImg2 from "../../Assets/niraj.jpg"
export default function Team() {
  const team = [
    {
      imgsrc: memImg,
      Name: "Sujal",
      post: "GDSC Tech Lead",
      bio: "GDSC Tech Lead skilled in graphic design and MERN stack development, passionate about driving innovative tech projects.",
    },
    {
      imgsrc: memImg2,
      Name: "Niraj",
      post: "ISTE Tech Lead",
      bio: "ISTE Tech Lead and Computer Science enthusiast specializing in full-stack MERN development, active open-source contributor.",
    },
    {
      imgsrc: memImg3,
      Name: "Amandeep",
      post: "Core Member (Bharat-tech-xperience)",
      bio: "Dedicated Core Member and GDSC-SVIET Tech Lead with a focus on MERN stack development and a commitment to open-source innovation.",
    },
    {
      imgsrc: memImg4,
      Name: "Abhishek ",
      post: "Core Member (Bharat-tech-xperience)",
      bio: "Core Member with strong expertise in graphic design and MERN stack development, contributing actively to GDSC initiatives.",
    },
    {
      imgsrc: memImg5,
      Name: "Aryan",
      post: "GDSC Broadcast & Operations Lead",
      bio: "Energetic and proactive GDSC Broadcast & Operations Lead, skilled in full-stack development and graphic design.",
    },
  ];
  
  
  return (
    <div id="team">
      <div className="flex justify-start mt-10 overflow-hidden">
        <div className="container">
          <div className="w-3/4">
            <div className="flex flex-wrap w-full py-32 relative mb-4">
              <img
                alt="gallery"
                className="w-full object-contain h-full object-center block absolute inset-0"
                src={teamBg}
              />
              <div className="text-start pl-5 md:pl-20 relative z-10 w-full">
                <h2 className="text-xl md:text-6xl text-white  font-medium title-font text-animation mb-2">
                  Our Team_
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-16 flex justify-center ">
        <dh-component>
          <div class="container flex justify-center  mx-auto overflow-hidden ">
            <div>
              <h1 class="xl:text-2xl text-xl text-center text-gray-100  pb-6 sm:w-4/6 w-5/6 md:mx-auto">
                The Talented People Behind the Scenes of the Organization
              </h1>
            </div>
          </div>
          <div className="flex justify-center overflow-hidden"> 
          <div class="w-2/3 md:px-10 pt-10">
            <div class="container mx-auto">
              <div
                role="list"
                aria-label="Behind the scenes People "
                class="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
              >
                {team.map((member, index) => {
                  return (
<div className={`group relative items-center mb-8 justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow ${member.Name === "Niraj" ? "parveen-class" : ""}`}>
                    <div className="h-70 w-60">
                      <img className="h-[350px]  w-full object-cover rounded-lg group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500" src={member.imgsrc} alt="" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                      <div className="absolute inset-0 flex flex-col items-center justify-center md:px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
                        <h1 className="text-3xl font-bold text-white">{member.Name} </h1>
                           <h2 className=" text-md italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{member.post} </h2>
                        <p className="text-md italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {" "}
                      {member.bio}
                        </p>
                       
                      </div>
                    </div>
                  </div>
                  );
                })}
              </div>
            </div>
          </div></div>
        </dh-component>
      </div>
    </div>
  );
};