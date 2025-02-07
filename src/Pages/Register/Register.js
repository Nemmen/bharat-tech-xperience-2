// import React from "react";
// import registrationBg from "../../Assets/registration.png";
// import { useState } from "react";
// import { useEffect } from "react";
// import { Link } from "react-router-dom";

// export default function Register() {
//   const [dataSheet, setData] = useState([]);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [isValidEmail, setIsValidEmail] = useState(true);
//   const [isDuplicate, setDuplicate] = useState(false);
//   const [checked, setChecked] = useState(false);

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [college, setCollege] = useState("");
//   const [teamName, setTeamName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [NoOfParticipants, setNoOfParticipants] = useState("");

//   useEffect(() => {
//     const readGoogleSheet = () => {
//       fetch("https://sheetdb.io/api/v1/v647mbyd47ind")
//         .then((response) => response.json())
//         .then((data) => setData(data));
//     };
//     readGoogleSheet();
//   }, []);

//   console.log(dataSheet);

//   const createGoogleSheet = () => {
//     fetch("https://sheetdb.io/api/v1/v647mbyd47ind", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         data: [
//           {
//             college: college,
//             name: name,
//             email: email,

//             team_Name: teamName,
//             phone_No: phone,
//             no_of_participants: NoOfParticipants,
//           },
//         ],
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => console.log(data));
//   };
//     // Clear form function
//     const resetForm = () => {
//       setName("");
//       setEmail("");
//       setCollege("");
//       setTeamName("");
//       setPhone("");
//       setNoOfParticipants("");
//       setChecked(false);
//     };

//   const duplicateEntry = () => {
//     for (const entry of dataSheet) {
//       if (entry.email === email) {
//         console.log("duplicate h");
//         setDuplicate(true);
//         setIsValidEmail(true);
//         return false;
//       }
//     }
//     return true;
//   };

//   const validEmail = (e) => {
//     const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
//     const isValid = emailPattern.test(email);

//     if (isValid) {
//       setIsValidEmail(true);

//       return true;
//     } else {
//       setIsValidEmail(false);
//       return false;
//     }
//   };

//   const createjson = () => {
//     console.log(college);
//     if (name !== "" && email !== "" && validEmail()) {
//       if (duplicateEntry()) {
//         createGoogleSheet();
//         setShowSuccess(true);
//         resetForm();
//       } else {
//         console.log("User alraedy exists");
//       }
//     } else {
//       console.log("Please fill in all required fields with valid data");
//     }
//   };

//   return (
//     <>
//       <div className=" h-auto text-white">
//         <div id="stars"> </div>

//         <section class=" body-font relative">
//           <div className="flex justify-end ">
//             <Link to="/">
//               <button className="  pt-6 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px] ">
//                 Get back to Home &rarr;
//               </button>
//             </Link>
//           </div>
//           <div class="container   mx-auto">
//             <div className="flex justify-center overflow-hidden">
//               <div className="container flex justify-center">
//                 <div className="w-full md:w-3/4">
//                   <div className="flex flex-wrap  w-full py-5 md:py-28 relative mb-4">
//                     <img
//                       alt="gallery"
//                       className="w-full  object-contain h-full object-center block absolute inset-0"
//                       src={registrationBg}
//                     />
//                     <div className="text-center  md:pl-20 relative z-10 w-full">
//                       <h2 className="text-2xl md:text-6xl text-white font-medium title-font mb-2 text-animation">
//                         Registration_
//                       </h2>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="lg:w-1/2 md:w-2/3 px-5 mx-auto">
//               <div class="flex flex-wrap ">
//                 {/* Naam */}
//                 <div class="p-2 md:w-1/2 w-full">
//                   <div class="relative">
//                     <label for="name" class="leading-7 text-sm ">
//                       Name
//                     </label>
//                     <input
//                       required
//                       type="text"
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                       id="name"
//                       name="name"
//                       class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                     />
//                   </div>
//                 </div>
//                 {/* email */}
//                 <div class="p-2 md:w-1/2 w-full">
//                   <div class="relative">
//                     <label for="email" class="leading-7 text-sm ">
//                       Email
//                     </label>

//                     <input
//                       required
//                       type="email"
//                       value={email}
//                       onChange={(e) => {
//                         setEmail(e.target.value);
//                         setDuplicate(false);
//                       }}
//                       id="email"
//                       name="email"
//                       className={`w-full bg-gray-100 bg-opacity-50 rounded border ${
//                         isValidEmail ? "border-gray-300" : "border-red-500"
//                       } focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
//                     />
//                     {!isValidEmail && (
//                       <p className="text-red-500 text-sm mt-2">
//                         Invalid email format
//                       </p>
//                     )}
//                   </div>
//                 </div>
//                 {/* College */}
//                 <div class="p-2 md:w-1/2 w-full">
//                   <div class="relative">
//                     <label for="name" class="leading-7 text-sm ">
//                       College
//                     </label>
//                     <input
//                       required
//                       type="text"
//                       value={college}
//                       onChange={(e) => setCollege(e.target.value)}
//                       id="name"
//                       name="name"
//                       class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                     />
//                   </div>
//                 </div>
//                 {/* team-name */}
//                 <div class="p-2 md:w-1/2 w-full">
//                   <div class="relative">
//                     <label for="name" class="leading-7 text-sm ">
//                       Team-Name
//                     </label>
//                     <input
//                       required
//                       type="text"
//                       value={teamName}
//                       onChange={(e) => setTeamName(e.target.value)}
//                       id="name"
//                       name="name"
//                       class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                     />
//                   </div>
//                 </div>
//                 {/* phone-no */}
//                 <div class="p-2 md:w-1/2 w-full">
//                   <div class="relative">
//                     <label for="name" class="leading-7 text-sm ">
//                       Phone no.
//                     </label>
//                     <input
//                       required
//                       type="text"
//                       value={phone}
//                       onChange={(e) => setPhone(e.target.value)}
//                       id="name"
//                       name="name"
//                       class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                     />
//                   </div>
//                 </div>
//                 {/* no-of-participants */}
//                 <div class="p-2 md:w-1/2 w-full">
//                   <div class="relative">
//                     <label for="name" class="leading-7 text-sm ">
//                       No. of participants
//                     </label>
//                     <input
//                       required
//                       type="text"
//                       value={NoOfParticipants}
//                       onChange={(e) => setNoOfParticipants(e.target.value)}
//                       id="name"
//                       name="name"
//                       class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                     />
//                     <p class="mt-2 text-sm text-green-600 ">
//                       Atmost 4 members are allowed
//                     </p>
//                   </div>
//                 </div>
//                 {/* checkbox */}
//                 <div class="flex items-start mb-6">
//                   <div class="flex items-center h-5 p-3">
//                     <input
//                       type="checkbox"
//                       checked={checked}
//                       onChange={() => setChecked(!checked)}
//                       id="remember"
//                       name="remember"
//                       class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
//                       required
//                     />
//                   </div>
//                   <label
//                     for="remember"
//                     class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                   >
//                     I agree with the{" "}
//                     <a href="#" class="text-green-600 hover:underline ">
//                       terms and conditions
//                     </a>
//                     .
//                   </label>
//                 </div>
//                 {/* submit */}

//                 <div class="p-2 w-full">
//                   <button
//                     disabled={!checked}
//                     onClick={() => createjson()}
//                     className={`flex mx-auto text-white bg-green-700 border-0 py-2 px-8 focus:outline-none rounded text-lg ${
//                       !checked ? "disableButton" : "" // Apply the disabled-button class when disabled
//                     }`}
//                   >
//                     submit
//                   </button>
//                 </div>
//                 {showSuccess && (
//                   <div className="mt-4 p-3 bg-green-300 text-green-700 rounded-lg">
//                     Success! Your form has been submitted.
//                   </div>
//                 )}
//                 {isDuplicate && (
//                   <div className="mt-4 p-3 bg-green-300 text-red-700 rounded-lg">
//                     Fails! user already exist
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }

// import React, { useState, useEffect } from "react"
// import { Link } from "react-router-dom"
// import { Link2, ChevronRight } from 'lucide-react'
// import registrationBg from "../../Assets/registration.png"

// export default function Register() {
//   const [dataSheet, setData] = useState([])
//   const [showSuccess, setShowSuccess] = useState(false)
//   const [isValidEmail, setIsValidEmail] = useState(true)
//   const [isDuplicate, setDuplicate] = useState(false)
//   const [currentStepIndex, setCurrentStepIndex] = useState(0)
//   const [typedText, setTypedText] = useState('')
//   const welcomeText = "Hey there! Welcome to Bharat tech xperience 2.0"

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     college: '',
//     teamName: '',
//     phone: '',
//     noOfParticipants: '',
//     agreed: false
//   })

//   const steps = [
//     {
//       id: 'email',
//       question: 'To start, could you give us your email?',
//       type: 'email',
//       placeholder: 'Enter email:'
//     },
//     {
//       id: 'name',
//       question: "What's your name?",
//       type: 'text',
//       placeholder: 'Enter name:'
//     },
//     {
//       id: 'college',
//       question: 'Which college are you from?',
//       type: 'text',
//       placeholder: 'Enter college name:'
//     },
//     {
//       id: 'teamName',
//       question: 'What would you like to name your team?',
//       type: 'text',
//       placeholder: 'Enter team name:'
//     },
//     {
//       id: 'phone',
//       question: "What's your phone number?",
//       type: 'tel',
//       placeholder: 'Enter phone number:'
//     },
//     {
//       id: 'noOfParticipants',
//       question: 'How many participants are in your team?',
//       type: 'number',
//       placeholder: 'Enter number of participants:'
//     },
//     {
//       id: 'agreed',
//       question: 'Last step! Please review and agree to our terms:',
//       type: 'checkbox',
//       placeholder: ''
//     }
//   ]

//   useEffect(() => {
//     const readGoogleSheet = () => {
//       fetch("https://sheetdb.io/api/v1/v647mbyd47ind")
//         .then((response) => response.json())
//         .then((data) => setData(data))
//     }
//     readGoogleSheet()
//   }, [])

//   // Typing animation effect
//   useEffect(() => {
//     let currentIndex = 0
//     const interval = setInterval(() => {
//       if (currentIndex <= welcomeText.length) {
//         setTypedText(welcomeText.slice(0, currentIndex))
//         currentIndex++
//       } else {
//         clearInterval(interval)
//       }
//     }, 50)

//     return () => clearInterval(interval)
//   }, [])

//   const createGoogleSheet = () => {
//     fetch("https://sheetdb.io/api/v1/v647mbyd47ind", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         data: [
//           {
//             college: formData.college,
//             name: formData.name,
//             email: formData.email,
//             team_Name: formData.teamName,
//             phone_No: formData.phone,
//             no_of_participants: formData.noOfParticipants,
//           },
//         ],
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => console.log(data))
//   }

//   const resetForm = () => {
//     setFormData({
//       name: '',
//       email: '',
//       college: '',
//       teamName: '',
//       phone: '',
//       noOfParticipants: '',
//       agreed: false
//     })
//     setCurrentStepIndex(0)
//   }

//   const duplicateEntry = () => {
//     for (const entry of dataSheet) {
//       if (entry.email === formData.email) {
//         setDuplicate(true)
//         setIsValidEmail(true)
//         return false
//       }
//     }
//     return true
//   }

//   const validEmail = () => {
//     const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
//     const isValid = emailPattern.test(formData.email)

//     if (isValid) {
//       setIsValidEmail(true)
//       return true
//     } else {
//       setIsValidEmail(false)
//       return false
//     }
//   }

//   const handleInputChange = (e, field) => {
//     if (typeof e === 'boolean') {
//       setFormData(prev => ({ ...prev, [field]: e }))
//     } else {
//       setFormData(prev => ({ ...prev, [field]: e.target.value }))
//       if (field === 'email') {
//         setDuplicate(false)
//         setIsValidEmail(true)
//       }
//     }
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()

//     if (currentStepIndex < steps.length - 1) {
//       if (currentStepIndex === 0 && !validEmail()) {
//         return
//       }
//       setCurrentStepIndex(prev => prev + 1)
//     } else {
//       if (formData.name !== "" && formData.email !== "" && validEmail()) {
//         if (duplicateEntry()) {
//           createGoogleSheet()
//           setShowSuccess(true)
//           resetForm()
//         }
//       }
//     }
//   }

//   const renderInput = (step) => {
//     if (step.type === 'checkbox') {
//       return (
//         <div className="flex items-center space-x-2">
//           <input
//             type="checkbox"
//             id="terms"
//             checked={formData.agreed}
//             onChange={(e) => handleInputChange(e.target.checked, 'agreed')}
//             className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
//           />
//           <label htmlFor="terms" className="text-sm text-zinc-400">
//             I agree to the{" "}
//             <a href="#" className="text-green-500 hover:underline">
//               terms and conditions
//             </a>
//           </label>
//         </div>
//       )
//     }

//     return (
//       <div className="flex items-center space-x-2 text-zinc-400">
//         <ChevronRight className="h-4 w-4" />
//         <span>~</span>
//         <input
//           type={step.type}
//           value={formData[step.id]}
//           onChange={(e) => handleInputChange(e, step.id)}
//           className="bg-transparent border-none focus:outline-none text-zinc-100 flex-1 font-mono"
//           placeholder={step.placeholder}
//           required
//         />
//       </div>
//     )
//   }

//   const currentStep = steps[currentStepIndex]

//   return (
//     <div className="h-[120vh] text-white">
//       <div id="stars"></div>

//       <section className="body-font relative">
//         <div className="flex justify-end">
//           <Link to="/">
//             <button className="pt-6 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
//               Get back to Home &rarr;
//             </button>
//           </Link>
//         </div>

//         <div className="container mx-auto">
//           <div className="flex justify-center overflow-hidden">
//             <div className="container flex justify-center">
//               <div className="w-full md:w-3/4">
//                 <div className="flex flex-wrap w-full py-5 md:py-28 relative mb-4">
//                   <img
//                     alt="gallery"
//                     className="w-full object-contain h-full object-center block absolute inset-0"
//                     src={registrationBg}
//                   />
//                   <div className="text-center md:pl-20 relative z-10 w-full">
//                     <h2 className="text-2xl md:text-6xl text-white font-medium title-font mb-2 text-animation">
//                       Registration_
//                     </h2>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="lg:w-1/2 md:w-2/3 mx-auto px-5">
//             <div className="w-full bg-slate-900/50 backdrop-blur-xl rounded-lg shadow-xl overflow-hidden">
//               {/* Terminal window controls */}
//               <div className="flex items-center px-4 py-2 pb-6 bg-slate-900/50 ">
//                 <div className="flex space-x-2">
//                   <div className="h-3 w-3 rounded-full bg-red-500" />
//                   <div className="h-3 w-3 rounded-full bg-yellow-500" />
//                   <div className="h-3 w-3 rounded-full bg-green-500" />
//                 </div>
//                 <div className="flex-1 text-center text-sm text-zinc-400 font-mono">
//                   bharat-tech-xperience 2.0
//                 </div>
//               </div>

//               {/* Form content */}
//               <form onSubmit={handleSubmit} className="p-6 space-y-6">
//                 <div className="space-y-6">
//                   {/* Welcome message with typing animation */}
//                   <div className="space-y-4">
//                     <p className="text-zinc-100 font-mono">
//                       {typedText}
//                       {typedText === welcomeText && <Link2 className="inline h-4 w-4 ml-2" />}
//                     </p>
//                     <div className="border-t border-zinc-700 my-8" />
//                   </div>

//                   {/* Current step */}
//                   <div className="space-y-4 animate-fade-in">
//                     <p className="text-zinc-100 font-mono">
//                       {currentStep.question}
//                     </p>
//                     {renderInput(currentStep)}
//                     {currentStep.id === 'noOfParticipants' && (
//                       <p className="text-sm text-green-500 mt-2">
//                         Atmost 4 members are allowed
//                       </p>
//                     )}
//                     {!isValidEmail && currentStepIndex === 0 && (
//                       <p className="text-sm text-red-500 mt-2">
//                         Invalid email format
//                       </p>
//                     )}
//                     {isDuplicate && (
//                       <p className="text-sm text-red-500 mt-2">
//                         User already exists
//                       </p>
//                     )}
//                   </div>

//                   {/* Navigation */}
//                   <button
//                     type="submit"
//                     className="w-full bg-green-700 text-white py-2 px-8  rounded disabled:opacity-50 disabled:cursor-not-allowed"
//                     disabled={
//                       currentStep.type === 'checkbox'
//                         ? !formData.agreed
//                         : !formData[currentStep.id]
//                     }
//                   >
//                     {currentStepIndex === steps.length - 1 ? 'Submit' : 'Continue'}
//                   </button>
//                 </div>

//                 {showSuccess && (
//                   <div className="mt-4 p-3 bg-green-300 text-green-700 rounded-lg">
//                     Success! Your form has been submitted.
//                   </div>
//                 )}
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }





import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Link2 } from "lucide-react"
import registrationBg from "../../Assets/registration.png"

export default function Register() {
  const [showSuccess, setShowSuccess] = useState(false)
  const [typedText, setTypedText] = useState("")
  const [formErrors, setFormErrors] = useState({})
  const [activeStep, setActiveStep] = useState(0)
  const [teamMembers, setTeamMembers] = useState(1)
  const [loading, setLoading] = useState(false)

  const welcomeText = "Hey there! Welcome to Bharat tech xperience 2.0"

  const [formData, setFormData] = useState({
    teamName: "",
    teamLeader: {
      name: "",
      email: "",
      phone: "",
      github: "",
      college: "",
    },
    teamMembers: Array(1)
      .fill()
      .map(() => ({
        name: "",
        email: "",
        phone: "",
        github: "",
        college: "",
      })),
  })

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= welcomeText.length) {
        setTypedText(welcomeText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const handleInputChange = (e, field, index = null) => {
    const value = e.target.value
    if (index !== null) {
      const updatedMembers = [...formData.teamMembers]
      updatedMembers[index] = { ...updatedMembers[index], [field]: value }
      setFormData({ ...formData, teamMembers: updatedMembers })
    } else if (field.startsWith("teamLeader.")) {
      const leaderField = field.split(".")[1]
      setFormData({
        ...formData,
        teamLeader: { ...formData.teamLeader, [leaderField]: value },
      })
    } else {
      setFormData({ ...formData, [field]: value })
    }
  }

  const handleTeamMembersChange = (e) => {
    const num = Number.parseInt(e.target.value)
    setTeamMembers(num)
    const updatedMembers = Array(num)
      .fill()
      .map(() => ({
        name: "",
        email: "",
        phone: "",
        github: "",
        college: "",
      }))
    setFormData({ ...formData, teamMembers: updatedMembers })
  }

  const validateStep = () => {
    const errors = {}

    if (activeStep === 0 && !formData.teamName) {
      errors.teamName = "Team Name is required"
    }

    if (activeStep === 1) {
      Object.entries(formData.teamLeader).forEach(([key, value]) => {
        if (!value) errors[`teamLeader.${key}`] = `${key} is required`
        if (key === "email" && value && !/^\S+@\S+\.\S+$/.test(value)) {
          errors[`teamLeader.${key}`] = "Enter a valid email address"
        }
        if (key === "phone" && value && !/^\d{10}$/.test(value)) {
          errors[`teamLeader.${key}`] = "Enter a valid 10-digit phone number"
        }
      })
    }

    if (activeStep === 2) {
      formData.teamMembers.forEach((member, index) => {
        Object.entries(member).forEach(([key, value]) => {
          if (!value) errors[`teamMembers.${index}.${key}`] = `${key} is required`
          if (key === "email" && value && !/^\S+@\S+\.\S+$/.test(value)) {
            errors[`teamMembers.${index}.${key}`] = "Enter a valid email address"
          }
          if (key === "phone" && value && !/^\d{10}$/.test(value)) {
            errors[`teamMembers.${index}.${key}`] = "Enter a valid 10-digit phone number"
          }
        })
      })
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleNext = () => {
    if (validateStep()) {
      setActiveStep((prev) => prev + 1)
    }
  }

  const handleBack = () => {
    setActiveStep((prev) => prev - 1)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    // Validate form data
    if (!validateStep()) {
      setLoading(false)
      console.error("Validation failed")
      return
    }

    try {
      const response = await fetch("https://bharat-tech-backend.vercel.app/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        setLoading(false)
        throw new Error(errorData.message || "Something went wrong")
      }

      const data = await response.json()
      console.log("Registration successful:", data)

      setShowSuccess(true) // Show success message
      setLoading(false)
      setFormData({
        teamName: "",
        teamLeader: {
          name: "",
          email: "",
          phone: "",
          github: "",
          college: "",
        },
        teamMembers: Array(1)
          .fill()
          .map(() => ({
            name: "",
            email: "",
            phone: "",
            github: "",
            college: "",
          })),
      })
      setActiveStep(0) // Reset form to the first step
    } catch (error) {
      setLoading(false)
      console.error("Error submitting the form:", error.message)
      alert("Failed to submit the form: " + error.message)
    }
  }

  const steps = [
    {
      label: "Team Details",
      content: (
        <div>
          <label className="block text-zinc-400 mb-2 font-medium">Team Name</label>
          <input
            type="text"
            value={formData.teamName}
            onChange={(e) => handleInputChange(e, "teamName")}
            onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
            className="w-full bg-transparent border border-zinc-700 text-zinc-100 rounded py-2 px-4"
            placeholder="Enter Team Name"
          />
          {formErrors.teamName && <p className="text-red-500 text-sm">{formErrors.teamName}</p>}
        </div>
      ),
    },
    {
      label: "Team Leader Details",
      content: (
        <div className="space-y-4">
          {Object.keys(formData.teamLeader).map((field) => (
            <div key={field}>
              <label className="block mb-2 text-zinc-400 font-medium capitalize">Team leader {field}</label>
              <input
                type="text"
                value={formData.teamLeader[field]}
                onChange={(e) => handleInputChange(e, `teamLeader.${field}`)}
                onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
                className="w-full bg-transparent border border-zinc-700 text-zinc-100 rounded py-2 px-4"
                placeholder={`Enter ${field}`}
              />
              {formErrors[`teamLeader.${field}`] && (
                <p className="text-red-500 text-sm">{formErrors[`teamLeader.${field}`]}</p>
              )}
            </div>
          ))}
        </div>
      ),
    },
    {
      label: "Team Member Details",
      content: (
        <div>
          <label className="block mb-2 text-zinc-400 font-medium">Number of Team Members</label>
          <select
            value={teamMembers}
            onChange={handleTeamMembersChange}
            className="w-full bg-transparent border border-zinc-700 text-zinc-100 rounded py-2 px-4"
          >
            {[1, 2, 3].map((num) => (
              <option key={num} className="text-black" value={num}>
                {num}
              </option>
            ))}
          </select>

          {formData.teamMembers.map((member, index) => (
            <div key={index} className="space-y-4 mt-4">
              <h4 className="text-sm  text-green-500">Team Member {index + 1}</h4>
              {Object.keys(member).map((field) => (
                <div key={field}>
                  <label className="block mb-2 text-zinc-400 font-medium capitalize">{field}</label>
                  <input
                    type="text"
                    value={member[field]}
                    onChange={(e) => handleInputChange(e, field, index)}
                    onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
                    className="w-full bg-transparent border border-zinc-700 text-zinc-100 rounded py-2 px-4"
                    placeholder={`Enter ${field}`}
                  />
                  {formErrors[`teamMembers.${index}.${field}`] && (
                    <p className="text-red-500 text-sm">{formErrors[`teamMembers.${index}.${field}`]}</p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      ),
    },
  ]

  return (
    <div className="min-h-[100vh] p-10 text-white">
      <div id="stars"></div>

      <section className="body-font relative">
        <div className="flex justify-end">
          <Link to="/">
            <button className="pt-6 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
              Get back to Home &rarr;
            </button>
          </Link>
        </div>

        <div className="container mx-auto">
          <div className="flex justify-center overflow-hidden">
            <div className="container flex justify-center">
              <div className="w-full md:w-3/4">
                <div className="flex flex-wrap w-full py-5 md:py-28 relative mb-4">
                  <img
                    alt="gallery"
                    className="w-full object-contain h-full object-center block absolute inset-0"
                    src={registrationBg || "/placeholder.svg"}
                  />
                  <div className="text-center md:pl-20 relative z-10 w-full">
                    <h2 className="text-2xl md:text-6xl text-white font-medium title-font mb-2 text-animation">
                      Registration_
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 md:w-2/3 mx-auto px-5">
            <div className="w-full bg-slate-900/50 backdrop-blur-xl rounded-lg shadow-xl overflow-hidden">
              <div className="flex items-center px-4 py-2 pb-6 bg-slate-900/50 ">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 text-center text-sm text-zinc-400 font-mono">bharat-tech-xperience 2.0</div>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="p-6 space-y-6">
                <div className="space-y-4">
                  <p className="text-zinc-100 font-mono">
                    {typedText}
                    {typedText === welcomeText && <Link2 className="inline h-4 w-4 ml-2" />}
                  </p>
                  <div className="border-t border-zinc-700 my-8" />
                </div>

                <div>{steps[activeStep].content}</div>

                <div className="flex justify-between">
                  {activeStep > 0 && (
                    <button type="button" className="bg-gray-700 text-white py-2 px-8 rounded" onClick={handleBack}>
                      Back
                    </button>
                  )}
                  {activeStep < steps.length - 1 ? (
                    <button type="button" className="bg-blue-700 text-white py-2 px-8 rounded" onClick={handleNext}>
                      Next
                    </button>
                  ) : loading ? (
                    <button type="button" className="bg-blue-700 text-white py-2 px-8 rounded" disabled>
                      Submitting...
                    </button>
                  ) : (
                    <button type="button" className="bg-green-700 text-white py-2 px-8 rounded" onClick={handleSubmit}>
                      Submit
                    </button>
                  )}
                </div>

                {showSuccess && (
                  <div className="mt-4 p-3 bg-green-300 text-green-700 rounded-lg">
                    Success! Your form has been submitted.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

