// import React from 'react'

// const Header = () => {
//   return (
//     <>
//       <div className='h-20  main border flex justify-between items-center px-16 bg-gray-200'>
//             <div>
//                 <h1 className='text-2xl font-bold font-signature'>Shanu Sarkar</h1>
//             </div>
//             <div className='space-x-6'>
//                 <a href="/home" className='hover:text-red-500'>Home</a>
//                 <a href="/about" className='hover:text-red-500'>About</a>
//                 <a href="/skills" className='hover:text-red-500'>Skills</a>
//                 <a href="/portfoilo" className='hover:text-red-500'>Portfolio</a>
//                 <a href="/contsct" className='hover:text-red-500'>Contact</a>
//             </div>
//             <div>
//                 <button className='px-4 py-2 bg-orange-500 shadow
//                 text-1xl rounded-full'>Hire Me</button>
//             </div>
//       </div>
//     </>
//   )
// }

// export default Header;  // Iss me OLD Navbar hai

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from "react-scroll"

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      // link: "portfolio",
      link: "My Projects",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white shanu transparent fixed px-4">
      <div>
        {/* font-signature use karna hai */}
        <h1 className="text-4xl font-signatur font-bold ml-2">Portfolio</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200 hover:text-red-600"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-300

        hover:scale-110 duration-200 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-red-600">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-3xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
