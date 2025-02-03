
import communityBg from "../../../Assets/3 copy.png"
import { motion } from "framer-motion";

export default function Glimpses() {
  return (
    <section className="w-full bg-inherit lg:mt-[-100px] px-4 md:px-6 overflow-hidden">
       
               <div className="flex  justify-start  overflow-hidden">
               <div className="container">
                 <div className="w-3/4">
                   <div className="flex flex-wrap w-full py-32 relative mb-4">
                     <img alt="gallery" className="w-full  object-contain h-full object-center block absolute inset-0 opacity-20" src={communityBg} />
                     <div className="text-start pl-5 md:pl-20 relative z-10 w-full">
                       <h2 className="text-xl md:text-6xl text-white font-medium title-font mb-2 text-animation">Recap of Past Glories</h2>
                     </div>
                   </div>
                 </div>
               </div>
             </div> 
      <div className="max-w-7xl mx-auto relative">
        {/* Main Content Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[600px]">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-white mb-4"
              >
                Champions of Bharat-tech-xperience 1.0
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 text-lg"
              >
               At Bharat Tech-Xperience 1.0, we honored the extraordinary talent and vision of individuals and teams who turned their innovative ideas into tangible solutions. This event was a testament to the power of creativity, collaboration, and determination, where every participant showcased their dedication to making a difference.
              </motion.p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg"
              >
                <div className="text-3xl font-bold text-orange-500">₹25,000</div>
                <div className="text-gray-400">First Prize</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg"
              >
                <div className="text-3xl font-bold text-orange-500">₹10K</div>
                <div className="text-gray-400">Second Prize</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg"
              >
                <div className="text-3xl font-bold text-orange-500">₹5K</div>
                <div className="text-gray-400">Third Prize</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg"
              >
                <div className="text-3xl font-bold text-orange-500">10+</div>
                <div className="text-gray-400">Special Mentions</div>
              </motion.div>
            </div>
          </div>

          {/* Right Side - Image Grid */}
          <div className="relative grid grid-cols-6 grid-rows-6 gap-4 h-[600px]">
            {/* Large Main Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="col-span-6 row-span-3 relative rounded-lg overflow-hidden"
            >
              <img
                src="https://zko8va4y8i.ufs.sh/f/GunMk0mxX0j1STztFvnwEv2BVAcoJNpX7nh6YD0Qgq5mejMf"
                alt="Grand Prize Winners"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold text-xl">First Prize Winners</h3>
                <p className="text-sm text-gray-200">Team Innovators</p>
              </div>
            </motion.div>

            {/* Top Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="col-span-3 row-span-2 relative rounded-lg overflow-hidden"
            >
              <img
                src="https://zko8va4y8i.ufs.sh/f/GunMk0mxX0j1xeHMjbepbcDkl89RFvZQW1IV2iPaSqgf3Kyp"
                alt="Second Prize Winners"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-2 left-2 text-white">
                <p className="text-sm font-semibold">Second Prize</p>
              </div>
            </motion.div>

            {/* Bottom Left Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="col-span-3 row-span-2 relative rounded-lg overflow-hidden"
            >
              <img
                src="https://zko8va4y8i.ufs.sh/f/GunMk0mxX0j1GB12iixX0j1TBxdg45UstlV6oWamyKOQPfYD"
                alt="Third Prize Winners"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-2 left-2 text-white">
                <p className="text-sm font-semibold">Third Prize</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
