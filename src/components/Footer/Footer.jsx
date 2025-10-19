
import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";
import FooterBg from "../../assets/website/coffee-footer.jpg";

const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/#about" },
  { title: "Contact", link: "/#contact" },
  { title: "Blog", link: "/#blog" },
];

const bgImage = {
  backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${FooterBg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "400px",
  width: "100%",
};

const Footer = () => {
  return (
    <div style={bgImage} className="text-white font-serif">
      <div className="min-h-[400px] backdrop-blur-sm">
        <div className="container grid md:grid-cols-3 pb-20 pt-10 text-gray-100">
          {/* Company details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="font-cursive tracking-widest text-3xl sm:text-4xl text-amber-300 drop-shadow-lg"
            >
              Roast & Crown
            </a>
            <p className="pt-4 text-gray-200 max-w-sm leading-relaxed font-serif">
              Crafted Coffee, Cozy Vibes, Unforgettable Moments – Your Premium Espresso Experience.
            </p>

            {/* GitHub button */}
            <a
              href="https://github.com/imsauraav" // 
              target="_blank"
              className="inline-block bg-amber-700 hover:bg-amber-600 transition-all py-2 px-5 mt-5 text-sm rounded-full shadow-lg font-medium hover:scale-105 hover:shadow-amber-400/70 animate-pulse"
            >
              Welcome to my GitHub
            </a>
          </div>

          {/* Navigation links */}
          <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold text-amber-300 mb-3 font-serif">
                Navigation
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block font-serif hover:scale-110 hover:text-amber-300 transition-transform duration-300 animate-bounce"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Address + Social Icons */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold text-amber-300 mb-3 font-serif">
                Address
              </h1>
              <p className="mb-3 font-serif">Kolkata, West Bengal</p>
              <p className="font-serif">+91 92623491**</p>

              <div className="flex items-center gap-4 mt-6">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/imsauraav/?next=%2F"
                  target="_blank"
                  className="transition-transform duration-500 hover:scale-125 hover:drop-shadow-[0_0_15px_#facc15] animate-bounce"
                >
                  <FaInstagram className="text-3xl text-amber-300 hover:text-white" />
                </a>
                {/* GitHub */}
                <a
                  href="https://github.com/imsauraav"
                  target="_blank"
                  className="transition-transform duration-500 hover:scale-125 hover:drop-shadow-[0_0_15px_#facc15] animate-bounce"
                >
                  <FaGithub className="text-3xl text-amber-300 hover:text-white" />
                </a>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/saurav-kumar-ba7a2b338/"
                  target="_blank"
                  className="transition-transform duration-500 hover:scale-125 hover:drop-shadow-[0_0_15px_#facc15] animate-bounce"
                >
                  <FaLinkedin className="text-3xl text-amber-300 hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="border-t border-amber-700/50 text-center py-4 text-gray-300 font-serif text-sm animate-pulse">
          &copy; 2025 Roast & Crown. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
