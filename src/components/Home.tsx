export default function Home() {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-green-800 text-white min-h-screen ">
      <div className="flex flex-col items-center ">
        <h2 className="text-4xl mt-4  font-semibold mb-4 marquee-left">Welcome To My Portfolio</h2>
        </div>
      <div className="flex items-center justify-center gap-40 h-screen bg-gradient-to-r from-black to-gray-500 text-white ">
        <div className="flex items-center space-x-8 slide-in-left">
        <img 
        src="hammad.jpg" 
        alt="Profile"
        className="w-96 h-96 -mt-20 rounded-full " 
      />
      </div>
      <div className="text-right -mt-20 ">
        <h1 className="text-3xl text-green-400 mb-10 text-start animate-bounce ">Hello Everyone,</h1>
        <h1 className="text-8xl mb-10  font-bold text-start font-serif slide-in-left "> I Am <br />Hammad Ali</h1>
        <p className="text-3xl text-center mt-2 border-4 border-green-600 slide-in-left ">Frontend Developer | UI/UX Enthusiast</p>
        <a href="hammad.cv.pdf" download target="_blank" rel="noopener noreferrer">
            <div className="flex justify-center mt-5 slide-in-left">
          <button className="mt-4 px-8 py-4  bg-black text-white rounded-full border-2 text-xl hover:bg-green-500 transform transition-transform duration-100 hover:scale-110">
            Download Resume
          </button>
          </div>
        </a>
        </div>
      </div>
      </div>
    );
  }
  