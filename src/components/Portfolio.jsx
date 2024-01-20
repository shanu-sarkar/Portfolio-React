
import amazon from '../assets/portfolio/amazon.png'
import calclutor from "../assets/portfolio/calclutor.png";
import laptop from '../assets/portfolio/laptop.png'
import myntra from '../assets/portfolio/myntra.png'
import netflix from '../assets/portfolio/netflix.png'
import todo from '../assets/portfolio/todo.png'

const Portfolio = () => {

    const portfolio = [
      {
        id: 1,
        src: amazon,
        demo: "",
        code: "https://github.com/shanu-sarkar/Amazon-Cloning",
      },
      {
        id: 2,
        src: calclutor,
        code: "https://github.com/shanu-sarkar/React-JS/tree/main/Calculator",
      },
      {
        id: 3,
        src: laptop,
        code: "https://github.com/shanu-sarkar/Laptop-website-Tech.in",
      },
      {
        id: 4,
        src: myntra,
        code: "https://github.com/shanu-sarkar/React-JS/tree/main/Myntra-Clone-React/Myntra-clone",
      },
      {
        id: 5,
        src: netflix,
        code: "https://github.com/shanu-sarkar/Netflix-cloning",
      },
      {
        id: 6,
        src: todo,
        code: "https://github.com/shanu-sarkar/chai-aur-React/tree/main/toDoContext",
      },
    ];

 const handleClick = []
 
  return (
    <div
      name="My Projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right hare</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolio.map(({ id, src, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105
                "
                >
                  <a href={code} target='_blank'> Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio