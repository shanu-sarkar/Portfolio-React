// import React from 'react'

// const Footer = () => {
//   return (
//     <footer
//       className=" bg-gray-700 text-white
//     "
//     >
//       <div className="container">
//         <p className="flex justify-center text-center text-2xl ">Made with ❤️ by Shanu Sarkar ©️ 2024</p>
//       </div>
      
//     </footer>
//   );
// }

// export default Footer

import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-3 bg-gray-900 text-white">
      <div className="flex justify-center gap-8 mt-1 mb-5 lg:text-3xl  text-2xl text-red-200">
        <a
          href="https://www.linkedin.com/feed/"
          target="_blank"
          rel="noreferror"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/shanu-sarkar"
          target="_blank"
          rel="noreferror"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/Shanu0156?t=OnKfrnU1yUG3DyvM6VAGOg&s=08"
          target="_blank"
          rel="noreferror"
        >
          <FaTwitter />
        </a>
        <a
          href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
          target="_blank"
          rel="noreferror"
        >
          <SiGmail />
        </a>
        <a
          href="https://www.instagram.com/me_shanu07/"
          target="_blank"
          rel="noreferror"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/sanu.kr.980?mibextid=ZbWKwL"
          target="_blank"
          rel="noreferror"
        >
          <FaFacebookSquare />
        </a>
      </div>

      <div>
        <p className="text-center text-xl md:text-2xl  md:font-bold">
          Made with ❤️ by Shanu Sarkar ©️ 2024
        </p>
        <div></div>
      </div>
    </div>
  );
}

export default Footer