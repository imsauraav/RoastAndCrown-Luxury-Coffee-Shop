

import React from "react";
import BannerImg from "../../assets/coffee-white.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import BgImg from "../../assets/website/coffee-texture.jpg";

const bgImage = {
  backgroundImage: `url(${BgImg})`,
  backgroundColor: "#f8f3ef", 
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Banner = () => {
  return (
    <>
      <span id="about"></span>
      <div style={bgImage}>
        <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 bg-white/60 backdrop-blur-[2px]">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              {/* Image section */}
              <div data-aos="zoom-in">
                <img
                  src={BannerImg}
                  alt="premium coffee"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,0.7)] spin"
                />
              </div>

              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1
                  data-aos="fade-up"
                  className="text-4xl sm:text-5xl font-semibold font-serif text-amber-800 drop-shadow-lg"
                >
                  The Art of Premium Coffee
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-base text-black leading-relaxed tracking-wide max-w-md"
                >
                  At <span className="text-amber-800 font-medium">Roast & Crown</span>, 
                  every sip tells a story of luxury. Crafted from the world’s finest beans, 
                  our brews deliver an elegant harmony of aroma, warmth, and indulgence — 
                  designed for those who savor perfection.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-5">
                    <div data-aos="fade-up" className="flex items-center gap-3">
                      <GrSecure className="text-2xl h-12 w-12 shadow-md p-3 rounded-full bg-amber-100 text-[#5c2c0c]" />
                      <span className="text-sm font-medium text-black">
                        Signature Roast
                      </span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="300"
                      className="flex items-center gap-3"
                    >
                      <IoFastFood className="text-2xl h-12 w-12 shadow-md p-3 rounded-full bg-orange-100 text-[#5c2c0c]" />
                      <span className="text-sm font-medium text-black">
                        Freshly Brewed
                      </span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="500"
                      className="flex items-center gap-3"
                    >
                      <GiFoodTruck className="text-4xl h-12 w-12 shadow-md p-3 rounded-full bg-yellow-100 text-[#5c2c0c]" />
                      <span className="text-sm font-medium text-black">
                        Curated Blends
                      </span>
                    </div>
                  </div>

                  <div
                    data-aos="slide-left"
                    className="border-l-4 border-amber-700/60 pl-6 space-y-2"
                  >
                    <h1 className="text-2xl font-semibold font-serif text-amber-800">
                      For the Tea Connoisseurs
                    </h1>
                    <p className="text-sm text-black leading-relaxed">
                      Our handpicked teas are steeped in tradition and sophistication —
                      offering serenity in every pour, crafted for refined tastes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
