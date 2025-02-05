import React from 'react';


export default function Sponsers() {
  return (
    <>
      <div className="md:h-screen mb-24" id="sponser">
        <div className="flex justify-start  overflow-hidden">
          <div className="container">
            <div className="w-3/4">
              <div className="flex flex-wrap w-full py-20 relative mb-4">
                <img
                  alt="gallery"
                  className="w-full object-contain h-full object-center block absolute inset-0 opacity-20"
                  src="https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumWSD0vm9dK5rAVSzcy9Z7GwITFbsHaq1kfQ48"
                />
                <div className="text-start pl-5 md:pl-20 relative z-10 w-full">
                  <h2 className="text-xl md:text-6xl text-white font-medium title-font mb-2 text-animation">
                    Sponsors_
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="text-gray-600 body-font relative mb-10">
          <div className="container px-5 md:py-24 mx-auto">
            {/* "To be announced" text */}
            {/* <div className="absolute inset-0 flex items-center justify-center z-20">
              <h1 className="text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-500 to-orange-500 font-bold">To Be Announced</h1>
            </div> */}

            {/* Blurred sponsor logos */}
            <div className="flex flex-wrap gap-10 justify-center -m-4  relative z-10">
              {/* Sponsor 1 */}
              <div className="p-3 md:w-1/4">
                <div className="h-full overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-contain object-center"
                    src="https://zko8va4y8i.ufs.sh/f/GunMk0mxX0j1nucRSEsECSK8AjNdrgYpf73zOMkeuRc6sqH1"
                    alt="POLYGON LOGO"
                  />
                </div>
              </div>

              {/* Sponsor 2 */}
              <div className="p-3 md:w-1/4">
                <div className="h-full overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-contain object-center"
                    src="https://zko8va4y8i.ufs.sh/f/GunMk0mxX0j18BwLgB6XqMVjC5Yym1zpGLT0vhxNwtrHsKOB"
                    alt="DEVFOLIO LOGO"
                  />
                </div>
              </div>

              {/* Sponsor 3 */}
              <div className="p-3 md:w-1/4">
                <div className="h-full overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-contain object-center"
                    src="https://zko8va4y8i.ufs.sh/f/GunMk0mxX0j104NKUrj2BgTSw4jofNesEM5XCWlqrODpKUiz"
                    alt="ETHINDIA LOGO"
                  />
                </div>
              </div>
              <div className="p-3 md:w-1/4">
                <div className="h-full overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-contain object-center"
                    src="https://zko8va4y8i.ufs.sh/f/GunMk0mxX0j16RqQrVfLyVCDu9gTJ0kZmWBw8Y6zlRpN3fId"
                    alt="Quickpic"
                  />
                </div>
              </div>
              <div className="p-3 md:w-1/4">
                <div className="h-full overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-contain object-center"
                    src="https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAummmfjOID2prEbC7OkVZGhPtxlqaunXTvJiBsM"
                    alt="Quickpic"
                  />
                </div>
              </div>
              <div className="p-3 md:w-1/4">
                <div className="h-full overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-contain object-center"
                    src="https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumlXTWAGu4P3qMiabZeUz87wrEkVfCgNntQHSJ"
                    alt="Quickpic"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
