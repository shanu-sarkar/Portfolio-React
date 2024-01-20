import React from 'react'

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-fill h-full">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            About
          </p>
        </div>
        <p className="text-base mt-4 sm:text-xl">
          Passionate programmer and lifelong learner from India, currently
          honing my skills in web development through AlmaBetter's program.
          Committed to mastering the art of coding and contributing to
          innovative projects that make a positive impact. Excited about the
          endless possibilities in the tech world!
        </p>
        <br />
        <p className="text-base sm:text-xl">
          My journey in web development began <strong>1.6</strong> of Years ago,
          and since then, I've had the opportunity to work on a diverse range of
          projects. From responsive and mobile-friendly designs to robust and
          scalable backend development, I thrive on turning ideas into reality.
        </p>
        <br />
        <p className=" text-base sm:text-xl">
          If you're looking for a web developer who is not only technically
          skilled but also brings a creative touch to each project, you're in
          the right place. Let's collaborate and bring your digital ideas to
          life!
        </p>
        <br />
        <p className="text-base sm:text-xl">
          Constantly staying up-to-date with the latest technologies and trends,
          I am proficient in a variety of programming languages, including
          JavaScript, React, Redux, Mongo DB, Express JS, Node JS, Whether it's
          building a sleek and modern frontend using cutting-edge frameworks or
          optimizing server-side performance, I'm dedicated to delivering
          high-quality solutions that meet and exceed client expectations.
        </p>
      </div>
    </div>
  );
}

export default About