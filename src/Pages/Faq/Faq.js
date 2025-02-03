import React from "react";

const Faq = () => {
  return (
    <div>
      <div className=" mb-6" id="sponser">
        <div className="flex justify-start  overflow-hidden">
          <div className="container">
            <div className="w-3/4">
              <div className="flex flex-wrap w-full py-20 relative mb-4">
                <img
                  alt="gallery"
                  className="w-full object-contain h-full object-center block absolute inset-0 opacity-20"
                  src="https://zko8va4y8i.ufs.sh/f/GunMk0mxX0j18NgZyQ6XqMVjC5Yym1zpGLT0vhxNwtrHsKOB"
                />
                <div className="text-start pl-5 md:pl-20 relative z-10 w-full">
                  <h2 className="text-xl md:text-6xl text-white font-medium title-font mb-2 text-animation">
                    FAQs_
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col divide-y px-5 sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
      <details className="py-3 my-1">
        <summary className="text-lg text-white py-2 outline-none cursor-pointer focus:underline">What is the required team size for the hackathon?</summary>
        <div className="px-4 pb-4">
          <p className="text-slate-100">The minimum members(including your team leader) required to participate in Bharat Tech Xperience 2.0 is 2 and maximum can be 4(including your team leader)</p>
        </div>
      </details>
      <details className="py-3 my-1">
        <summary className="text-lg text-white py-2 outline-none cursor-pointer focus:underline">Is the registration free?</summary>
        <div className="px-4 pb-4">
          <p className="text-slate-100">Yes! You don't have to pay any registration fee in order to participate in Bharat Tech Xperience 2.0.</p>
        </div>
      </details>
      <details className="py-3 my-1">
        <summary className="text-lg text-white py-2 outline-none cursor-pointer focus:underline">Will accomodation facilities be provided by the Organizers?</summary>
        <div className="px-4 pb-4">
          <p className="text-slate-100">Though Optional, we will be providing accomodation facilities to the teams. You may or may not opt for it. And it will be available throughout the event so one can opt for it anytime they want.</p>
        </div>
      </details>
      <details className="py-3 my-1">
        <summary className="text-lg text-white py-2 outline-none cursor-pointer focus:underline">Are there any pre-evaluation of idea before coming to the venue?</summary>
        <div className="px-4 pb-4">
          <p className="text-slate-100">No. There won't be any pre-evaluation/idea or PPT submission before 8-9th of February. All rounds of evaluation will be done at the venue on the day of event.</p>
        </div>
      </details>
      <details className="py-3 my-1">
        <summary className="text-lg text-white py-2 outline-none cursor-pointer focus:underline">Why need GitHub Accounts for team leader and members?</summary>
        <div className="px-4 pb-4">
          <p className="text-slate-100">Each team will be given a repository specific to their team name, where they all will be working on their project. This will be explained in detail to the team leaders. Till then, stay tuned with us.</p>
        </div>
      </details>
      
      
    </div>
    </div>
  );
};

export default Faq;
