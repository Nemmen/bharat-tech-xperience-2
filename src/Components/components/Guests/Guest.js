
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



// Your cards data
const cards = [
    {
        title: "Branch Manager at Larsen & Toubro",
        name: "Jaswant Singh",
        company: "Larsen & Toubro",
        description: `As a Branch Manager at Larsen & Toubro, Jaswant Singh brings extensive experience in engineering and project management. He is responsible for overseeing branch operations, ensuring smooth execution of projects, and driving strategic growth initiatives.`,
        image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumLyzB1O0pJTjhB1safN9YzRtPmg236DXq5uS4"
    },
    {
        title: "Head HR, Admin, CSR & IT",
        name: "Devdutta Sarma",
        company: "Nabha Power Limited, L&T",
        description: `Devdutta Sarma leads HR, Admin, CSR, and IT at Nabha Power Limited, L&T. With a focus on organizational development, workforce management, and technology integration, he ensures operational efficiency and employee well-being.`,
        image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumiJ8SOzfb2az8t64xBvVQ3dyjGgHlh7Y0fDTo"
    },
    {
        title: "Head - Learning & Development",
        name: "Vishal Sharma",
        company: "ASB Academy",
        description: `Vishal Sharma is the Head of Learning & Development at ASB Academy and a distinguished Guest Speaker on Blockchain Technology. His expertise lies in shaping educational frameworks and empowering professionals with cutting-edge blockchain knowledge.`,
        image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumHCXzftlIhc4kFWTUs6obV79KrivaxPgzmfpA"
    },
    {
        title: "COO at Antier Solutions",
        name: "Shashi Pal",
        company: "Antier Solutions",
        description: `As the Chief Operating Officer at Antier Solutions, Shashi Pal plays a key role in steering the company's operations, focusing on blockchain innovation, fintech solutions, and business growth strategies.`,
        image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumlhjRUymu4P3qMiabZeUz87wrEkVfCgNntQHS"
    },
    {
        title: "Global CEO | Keynote Speaker | Startup Enabler",
        name: "Vikram R Singh",
        company: "Self-Employed",
        description: `On a mission to make India the world's Web3 capital, Vikram R Singh is a Global CEO, Keynote Speaker, and Startup Enabler. His expertise spans blockchain ecosystems, entrepreneurship, and emerging technologies.`,
        image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAum8RK8v4XlJfrKGuWUjb4n6NYRd3wE9DxCgy0v"
    },
    {
        title: "Senior Manager - Training & Enablement",
        name: "Kapil Narula",
        company: "Caelius Consulting",
        description: `Kapil Narula, Senior Manager at Caelius Consulting, specializes in training and enablement, helping professionals and organizations navigate the evolving tech landscape with skill development and strategic guidance.`,
        image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumoBv1jcUNYKaOD79uVLETgslNocC8Sqw3xt5m"
    },
    {
        title: "Co-Founder & COO",
        name: "Mankesh Dadhwal",
        company: "Caelius Consulting",
        description: `Mankesh Dadhwal is the Co-Founder & COO of Caelius Consulting. His leadership drives business innovation, operational excellence, and strategic consulting services in the tech industry.`,
        image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumK5lhdBk0DQkEFIRNZ5MqBjLvotuhOKYrSbUG"
    },
    {
        title: "Dean Academics",
        name: "Prof. Vikas Chawla",
        company: "I.K. Gujral Punjab Technical University",
        description: `Prof. Vikas Chawla, Dean Academics at I.K. Gujral Punjab Technical University, is dedicated to academic excellence, curriculum innovation, and student success through research and educational leadership.`,
        image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumpqk0JIQ6ntRyaQormsAvUSgqZTJcibOuXfBW"
    },
    {
        title: "Founder",
        name: "Pankaj Judge",
        company: "Chai Thela",
        description: `Pankaj Judge is the Founder of Chai Thela, an entrepreneurial venture that revolutionizes the tea industry with a unique business model, bringing authentic flavors and experiences to tea lovers.`,
        image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumwyBDveYh6vMjIobVskel2URXBKJwfdaEic9W"
    },
    {
        title: "Associate Staff Engineer",
        name: "Pranav Kumar",
        company: "Nagarro",
        description: `Pranav Kumar, Associate Staff Engineer at Nagarro, specializes in software engineering, system architecture, and innovative tech solutions that enhance business efficiency and digital transformation.`,
        image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumKtzkjs0DQkEFIRNZ5MqBjLvotuhOKYrSbUGT"
    },
    {
        title: "Senior Software Engineer",
        name: "Loveleen Kaur",
        company: "Astrotalk",
        description: `Loveleen Kaur is a Senior Software Engineer at Astrotalk, contributing to cutting-edge software development and enhancing user experience through technological advancements in astrology services.`,
        image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumAXB9DGMaBDdmCoRJZjItUX34hq2PyvkYHzVA"
    }
];



// Department card component
const DepartmentCard = ({ title, name, description, image }) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 md:gap-4 gap-3 py-12">
        <div className="flex flex-col justify-center">
            <p className="text-3xl font-medium text-white">{title}</p>
            <p className="text-lg pl-2 border-l-4 border-[#fea700] mt-3 text-white">{name}</p>
            <p className="text-justify pt-6 max-w-lg text-white">
                {description}
            </p>
        </div>
        <div className="flex items-center justify-center">
            <img
                src={image}
                className="h-[460px] w-4/5 object-cover shadow-md rounded-[10%_0%_10%_0%] border-b-8 border-[#fea700]"
                alt={name}
            />
        </div>
    </div>
);

// Department carousel component
const Guest = () => {
    const settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Show one slide at a time due to the grid layout
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <div
            className="mt-16 bg-inherit"
            // style={{
            //     backgroundImage: `url(https://res.cloudinary.com/startup-grind/image/upload/c_limit,dpr_2,f_auto,g_center,h_1440,q_auto:good,w_2048/v1/gcs/platform-data-goog/event_wrapup/DSC05771.JPG)`,
            //     backgroundSize: 'cover',
            //     backgroundPosition: 'center center',
            //     backgroundRepeat: 'no-repeat',
            //     backgroundAttachment: 'fixed',
            //     backgroundColor: 'rgba(0, 0, 0, 0.9)', // to add some transparency overlay
            //     backgroundBlendMode: 'overlay' // ensures the transparency is applied over the background image
            // }}
        >
            <div className="container">
        
        <div className="w-full">
          
          <div className="flex flex-wrap w-full py-24 relative mb-20">
            
            <img
              alt="gallery"
              className="w-full  object-contain h-full object-center block absolute inset-0 opacity-20"
              src="https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumxMw89h5n96rMwa3N4fR0hndkIVipFyKUB8bH"
            />
            
            <div className="text-start pl-5 md:pl-20 relative z-10 w-full">
              
              <h2 className="text-xl md:text-6xl text-orange-600 font-medium title-font mb-2 text-animation">
                Our Esteemed Guests_
              </h2>
              
            </div>
            
          </div>
          
        </div>
        
      </div>
            <div className="py-12 w-10/12 mx-auto lg:mt-[-120px]">
                <Slider {...settings} className="w-full">
                    {cards.map((card, index) => (
                        <div key={index} className="w-[95%] mx-auto px-2 ">
                            <DepartmentCard
                                title={card.name}
                                name={card.title}
                                description={card.description}
                                image={card.image}
                            />
                        </div>
                    ))}
                </Slider>
                
            </div>
        </div>
    );
};

export default Guest;
