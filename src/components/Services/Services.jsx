


import React, { useState } from "react";

const ServicesData = [
  {
    id: 1,
    img: "https://blogstudio.s3.theshoppad.net/coffeeheroau/ec178d83e5f597b162cda1e60cb64194.jpg",
    name: "Espresso",
    description:
      "Rich and bold espresso to start your day with premium taste.",
    price: 4.99,
    aosDelay: "100",
  },
  {
    id: 2,
    img: "https://lh3.googleusercontent.com/proxy/DZ1sXrpR374t4_QIKG1W7uqG1cXRdHaKrMditSwSdtxPC-G86rEQ8JXxm53a8gz-mkzZIcZtPyn6g8-ounGtsJhWswKAs4mOdR5emrcqS6N07LDiuvn2YQ",
    name: "Americano",
    description:
      "Smooth Americano brewed to perfection for coffee lovers.",
    price: 5.49,
    aosDelay: "200",
  },
  {
    id: 3,
    img: "https://www.allrecipes.com/thmb/chsZz0jqIHWYz39ViZR-9k_BkkE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8624835-how-to-make-a-cappuccino-beauty-4x3-0301-13d55eaad60b42058f24369c292d4ccb.jpg",
    name: "Cappuccino",
    description:
      "Classic Cappuccino with creamy froth and rich aroma.",
    price: 5.99,
    aosDelay: "300",
  },
  {
    id: 4,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Caffe_Latte_at_Pulse_Cafe.jpg/1200px-Caffe_Latte_at_Pulse_Cafe.jpg",
    name: "Latte",
    description:
      "Velvety Latte with hints of caramel and chocolate notes.",
    price: 6.49,
    aosDelay: "400",
  },
  {
    id: 5,
    img: "https://ichef.bbc.co.uk/ace/standard/1600/food/recipes/the_perfect_mocha_coffee_29100_16x9.jpg.webp",
    name: "Mocha",
    description:
      "Decadent Mocha for chocolate and coffee lovers alike.",
    price: 6.99,
    aosDelay: "500",
  },
  {
    id: 6,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk3XESBeQ4LRX5JiKqTr1X9nf3RJhn-PMXEg&s",
    name: "Cold Brew",
    description:
      "Refreshing Cold Brew coffee, perfect for sunny days.",
    price: 5.29,
    aosDelay: "600",
  },
];

const Services = () => {
  const [orderMessage, setOrderMessage] = useState({});

  const handleOrder = (id) => {
    setOrderMessage((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setOrderMessage((prev) => ({ ...prev, [id]: false }));
    }, 3000); 
  };

  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          {/* Heading section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-cursive font-bold tracking-wide text-gray-800">
              Best Coffee For You
            </h1>
          </div>

          {/* Services Card section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 place-items-center">
            {ServicesData.map((service) => (
              <div
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="relative rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl transition-all duration-300 group max-w-[300px] hover:-translate-y-6 hover:shadow-2xl hover:z-50"
              >
                {/* Golden glowing outline */}
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ boxShadow: "0 0 20px 5px rgba(212, 175, 55, 0.6)" }}
                ></div>

                {/* Image */}
                <div className="h-[150px] w-[150px] mx-auto mt-[-60px] rounded-full overflow-hidden border-4 border-primary shadow-lg">
                  <img
                    src={service.img || "https://via.placeholder.com/150"}
                    alt={service.name}
                    className="object-cover w-full h-full transform transition-all duration-300 group-hover:scale-105 group-hover:rotate-6"
                  />
                </div>

                {/* Text */}
                <div className="p-6 text-center flex flex-col gap-3">
                  <h1 className="text-xl font-semibold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white transition-all duration-300 text-sm line-clamp-3">
                    {service.description}
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    ${service.price.toFixed(2)}
                  </p>

                  {/* Buy Now Button */}
                  <button
                    onClick={() => handleOrder(service.id)}
                    className="relative group bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-gray-900 font-semibold px-5 py-2 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-primary hover:text-white"
                  >
                    Buy Now
                    <span className="absolute top-0 left-0 w-0 h-full bg-white opacity-20 transform skew-x-[-20deg] group-hover:w-full transition-all duration-700"></span>
                  </button>

                  {/* Order message */}
                  {orderMessage[service.id] && (
                    <div className="mt-3 text-green-600 font-semibold text-sm transition-all duration-500 animate-fade-in-out">
                      Thank you! Your order will be delivered to you shortly with love.❤️
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add fade-in-out animation */}
      <style>
        {`
          @keyframes fadeInOut {
            0% { opacity: 0; transform: translateY(-10px); }
            10% { opacity: 1; transform: translateY(0); }
            90% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(-10px); }
          }
          .animate-fade-in-out {
            animation: fadeInOut 3s ease-in-out forwards;
          }
        `}
      </style>
    </>
  );
};

export default Services;
