
import React from "react";
import Logo from "../../assets/website/coffee_logo.png";
import { FaCoffee } from "react-icons/fa";

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Services", link: "/#services" },
  { id: 3, name: "About", link: "/#about" },
];

const Navbar = () => {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-gradient-to-r from-[#3D2517] via-[#5C3A21] to-[#3D2517] shadow-xl sticky top-0 z-50 text-white backdrop-blur-md bg-opacity-90">
      <div className="container mx-auto py-3 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3 text-2xl sm:text-3xl font-cursive tracking-wider font-semibold hover:scale-105 transition-transform duration-300"
        >
          <img src={Logo} alt="Logo" className="w-14" />
          Roast & Crown
        </a>

        {/* Menu */}
        <div className="flex items-center gap-8 sm:gap-10">
          <ul className="hidden sm:flex gap-8 sm:gap-10">
            {Menu.map((menu) => (
              <li key={menu.id} className="relative group">
                <a
                  href={menu.link}
                  className="text-white/70 text-lg font-medium transition-all duration-300"
                >
                  {menu.name}
                </a>
                {/* Hover underline animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Order Button */}
          <button
            onClick={scrollToServices}
            className="relative group bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-gray-900 font-semibold px-5 py-2 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
          >
            Order
            <FaCoffee className="text-lg" />
            {/* Shimmer effect */}
            <span className="absolute top-0 left-0 w-0 h-full bg-white opacity-20 transform skew-x-[-20deg] group-hover:w-full transition-all duration-700"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
