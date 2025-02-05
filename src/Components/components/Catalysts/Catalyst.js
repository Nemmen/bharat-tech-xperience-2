import React, { useRef } from "react";
import { Award, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import communityBg from "../../../Assets/catalyst.png";

const honors = [
    {
      name: "Ronit Jai Prakash",
      role: "Application Developer",
      company: "Caelius Consulting",
      image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAum8WBKaZJXlJfrKGuWUjb4n6NYRd3wE9DxCgy0",
      linkedIn: "https://www.linkedin.com/in/ronit-jai-prakash-58082122a/",
    },
    {
      name: "Mantasha Tabassum",
      role: "Application Developer",
      company: "Caelius Consulting",
      image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumyRZ0WkhGvj9LGdSxXKPThlzeQcWmgO61ZJ87",
      linkedIn: "https://www.linkedin.com/in/mantasha-tabassum/",
    },
    {
      name: "Naveen Jaiswal",
      role: "Fullstack Developer",
      company: "Thor Solutions",
      image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumxviYIQn96rMwa3N4fR0hndkIVipFyKUB8bHc",
      linkedIn: "https://www.linkedin.com/in/naveen-jaiswal/",
    },
    {
      name: "Parveen Jaiswal",
      role: "Fullstack Developer",
      company: "Spacepepper Studios",
      image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumuTKAI8zGDN7MfW9sTV1IA0zrSZwixYbo25LP",
      linkedIn: "https://www.linkedin.com/in/parveen-jaiswal/",
    },
    {
      name: "Priyanshi Sharma",
      role: "Application Developer",
      company: "Caelius Consulting",
      image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumFV2U5DJbL95YayPfxuDQMFsXlC0oBImU6z28",
      linkedIn: "https://www.linkedin.com/in/priyanshi-sharma-aa6391239/",
    },
    {
      name: "Aditya Jadon",
      role: "Web Developer",
      company: "",
      image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumLyyAmL2pJTjhB1safN9YzRtPmg236DXq5uS4",
      linkedIn: "https://www.linkedin.com/in/aditya-jadon-92692a230/",
    },
    {
      name: "Aditya Raj",
      role: "Web Developer",
      company: "",
      image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumR60tYNmu2iQAmoaFD3d9eMskP7J6LXV4IRly",
      linkedIn: "https://www.linkedin.com/in/aditya-raj-589053259/",
    },
    {
      name: "Abhishek Saini",
      role: "Web Developer",
      company: "",
      image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumjheILcEKYdovOsGfC3D9tNMk6nXaAzRVqy05",
      linkedIn: "https://www.linkedin.com/in/abhisheksaini03/",
    },
  ];
  

const Catalyst = () => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    const scrollAmount =
      direction === "left"
        ? -sliderRef.current.clientWidth
        : sliderRef.current.clientWidth;

    sliderRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full py-24 bg-inherit overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="w-3/4">
          <div className="flex flex-wrap w-full py-32 relative mb-4">
            <img
              alt="gallery"
              className="w-full  object-contain h-full object-center block absolute inset-0 opacity-20"
              src={communityBg}
            />
            <div className="text-start pl-5 md:pl-20 relative z-10 w-full">
              <h2 className="text-xl md:text-6xl text-orange-600 font-medium title-font mb-2 text-animation">
                Our Esteemed Catalysts_
              </h2>
            </div>
          </div>
        </div>

        <div className="relative w-11/12 mx-auto">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-gray-800/90 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transform transition-all duration-200 hover:scale-110 focus:outline-none"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-gray-800/90 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transform transition-all duration-200 hover:scale-110 focus:outline-none"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            ref={sliderRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {honors.map((honor, index) => (
              <div
                key={index}
                className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 snap-start"
              >
                <div className="group relative bg-gray-800 rounded-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl h-[500px]">
                  <div className="h-full">
                    <img
                      src={honor.image}
                      alt={honor.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <Award className="w-5 h-5 text-yellow-400" />
                      <h3 className="text-xl font-semibold text-white">
                        {honor.name}
                      </h3>
                    </div>
                    <p className="text-gray-300 font-medium mb-1">
                      {honor.role}
                    </p>
                    <p className="text-gray-400 text-sm mb-3">
                      {honor.company}
                    </p>
                    <a
                      href={honor.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <span>Connect on LinkedIn</span>
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalyst;
