// import React, { useRef } from 'react'
// import Heroimage from"../assets/portfolio/hero.png"
// import { MdOutlineKeyboardArrowRight } from "react-icons/md"
// import {Link} from "react-scroll"
// import Typed from "typed.js"

// const Home = () => {

//   const el = useRef(null)

//   return (
//     <div
//       name="home"
//       className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
//     >
//       <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
//         <div className="flex flex-col justify-center h-full">
//           <h2 className="text-4xl sm:text-7xl font-bold text-white">
//             I'm a Full Stack Developer
//           </h2>
//           <p className="text-gray-300 py-4 max-w-md">
//             I have 1.2 years of experience building and desgining softwere.
//             Currently, I love to work on web application using technologies like
//             React, Tailwind, Next JS and MongoDB
//           </p>
//           <div>
//             <Link
//               to="My Projects"
//               smooth
//               duration={500}
//               className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
//             >
//               Projects
//               <span className="group-hover:rotate-90 duration-300">
//                 <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
//               </span>
//             </Link>
//           </div>
//         </div>
//         <div>
//           <img
//             src={Heroimage}
//             alt="my Profile"
//             className="rounded-2xl mx-auto w-2/3 md:w-full sanu"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

import React, { useEffect, useRef } from "react";
import Heroimage from "../assets/portfolio/hero.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Typed from "typed.js";

const Home = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer", "Backend Developer", "I ❤️ Coding"],
      startDelay: 150,
      typeSpeed: 40,
      backSpeed: 30,
      backDelay: 70,
      loop: true,
    });
    return () => {
      typed.destroy();
    }
  }, [])

  return (
    <div
      name="home"
      className="w-full bg-gradient-to-b from-black via-black to-gray-800 pt-32"
    >

      <div className="max-w-screen-lg mx-auto flex flex-col gap-4 items-center justify-center px-4 md:flex-row">

        <div className="flex flex-col justify-center h-full">
          <h3 className="text-4xl md:text-6xl font-bold text-white w-full ">
            Hi, I'm
          </h3>
          <h1 className="text-5xl font-bold text-red-600">
            Shanu Sarkar
          </h1>
          <h2 className="text-3xl text-white">
            I'm <span className="font-bold text-white" ref={el}></span>
          </h2>
          <p className="text-gray-300 py-4 max-w-md">
            Web Developer with expertise of React.js, Redux, Cloud Firestore,
            HTML and CSS. currently learning MERN Stack for Web Application.
          </p>
          <div>
            <Link
              to="My Projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>

        </div>

        <div className="mb-20 md:mb-10">
          <img
            src={Heroimage}
            alt="my Profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full sanu"
          />
        </div>

      </div>


    </div>
  );
};

export default Home;