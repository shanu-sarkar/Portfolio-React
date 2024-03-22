import { useState } from "react";
import { FaDownload } from "react-icons/fa";
const Contact = () => {


  const [inputValue, setInputValue] = useState("");

  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white pt-12"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the from below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/ee39eb60-3bcb-4589-b57c-780ffb6539a0"
            method="POST"
            className="flex flex-col w-full md:w-1/2 cursor-pointer "
            //target="_blank"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-red-300 to-red-600 px-16 py-2 my-7  text-lg mx-auto flex items-center rounded-md hover:scale-110 duration-300 mb-1 cursor-pointer lg:px-2 lg:py-2 lg:mt-8">
              Let's talk
            </button>
          </form>
        </div>
      </div>
      <button className="text-white bg-gradient-to-b from-red-300 to-red-600 px-2 py-2 my-1 mx-auto flex items-center rounded-md hover:scale-110 duration-300 lg:hidden mt-1">
        <FaDownload className="mb-1" />
        <a href="/My-Resume.pdf" download={true} className="ml-1">
          {" "}
          Download My Resume
        </a>
      </button>
    </div>
  );
};

export default Contact;




