
import React, { useState } from "react";
import HeroPng from "../../assets/coffee2.png";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [msg, setMsg] = useState(""); // Inline message
  const [showMsg, setShowMsg] = useState(false);

  const coffeeMenu = [
    "Espresso Royale",
    "Caramel Macchiato",
    "Vanilla Latte",
    "Cappuccino Deluxe",
    "Mocha Supreme",
    "Cold Brew Classic",
  ];

  const handleClick = (item) => {
    setMsg(`"${item}" Added soon, sorry for that 😇`);
    setShowMsg(true);
    setTimeout(() => setShowMsg(false), 2000); // fade out after 2s
  };

  return (
    <div className="min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white relative">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* Text Section */}
          <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left">
            <h1
              data-aos="fade-up"
              data-aos-once="true"
              className="text-5xl sm:text-6xl lg:text-7xl font-serif font-medium leading-tight"
            >
              We serve the richest{" "}
              <span
                data-aos="zoom-out"
                data-aos-delay="300"
                className="bg-clip-text text-transparent bg-gradient-to-b from-amber-400 via-amber-200 to-yellow-100 font-serif"
              >
                Coffee
              </span>{" "}
              in the city
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-gray-200 font-sans text-lg max-w-md font-light"
            >
              New items coming soon! Stay tuned for our premium coffee blends.
            </p>

            {/* Dropdown Button */}
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="relative inline-block"
            >
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="bg-gradient-to-r from-amber-400 to-yellow-200 text-black font-semibold py-3 px-6 rounded-full shadow-lg hover:scale-105 hover:shadow-amber-400/50 transition-all duration-300 font-medium"
              >
                New Items Coming Soon
              </button>

              {/* Inline message above dropdown */}
              {showMsg && (
                <div className="absolute left-1/2 -translate-x-1/2 -top-12 bg-black/90 px-4 py-2 rounded-md shadow-lg text-white text-sm font-sans font-medium animate-fadeInOut z-50">
                  {msg}
                </div>
              )}

              {/* Dropdown Menu */}
              {menuOpen && (
                <div className="absolute mt-3 bg-black/80 backdrop-blur-sm rounded-lg shadow-lg py-2 w-64 animate-fadeIn z-40">
                  {coffeeMenu.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleClick(item)}
                      className="w-full text-left px-4 py-2 hover:bg-amber-400/20 transition-colors duration-200 rounded-md font-sans font-light"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Image Section */}
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="min-h-[450px] flex justify-center items-center relative"
          >
            <img
              data-aos-once="true"
              src={HeroPng}
              alt="Coffee Hero"
              className="w-[300px] sm:w-[450px] sm:scale-125 mx-auto spin drop-shadow-2xl rounded-lg"
            />
            {/* Premium Label */}
            <div
              data-aos="fade-left"
              className="bg-gradient-to-r from-amber-400 to-yellow-200 p-3 rounded-xl absolute top-10 left-10 drop-shadow-lg"
            >
              <h1 className="text-black font-serif font-medium">
                Premium Blends
              </h1>
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="0"
              className="bg-gradient-to-r from-amber-400 to-yellow-200 p-3 rounded-xl absolute bottom-10 right-10 drop-shadow-lg"
            >
              <h1 className="text-black font-serif font-medium">
                Best Coffee
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(-10px);}
          10% { opacity: 1; transform: translateY(0);}
          90% { opacity: 1; transform: translateY(0);}
          100% { opacity: 0; transform: translateY(-10px);}
        }
        .animate-fadeInOut {
          animation: fadeInOut 2s ease-in-out forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Hero;
