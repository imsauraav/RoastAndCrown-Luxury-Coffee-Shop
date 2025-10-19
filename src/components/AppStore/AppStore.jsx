// import React from "react";
// import AppStoreImg from "../../assets/website/app_store.png";
// import PlayStoreImg from "../../assets/website/play_store.png";
// import BgPng from "../../assets/website/coffee-beans-bg.png";

// const backgroundStyle = {
//   backgroundImage: `url(${BgPng})`,
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
//   height: "100%",
//   width: "100%",
// };
// const AppStore = () => {
//   return (
//     <>
//       <div className="py-14" style={backgroundStyle}>
//         <div className="container">
//           <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-4">
//             <div
//               data-aos="fade-up"
//               data-aos-duration="300"
//               className="space-y-6 max-w-xl mx-auto"
//             >
//               {/* text section */}
//               <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold text-white/90 pl-3">
//                 Coffee Cafe is available for Android and IOS
//               </h1>
//               {/* img section */}
//               <div className="flex flex-wrap justify-center sm:justify-start items-center">
//                 <a href="#">
//                   <img
//                     src={PlayStoreImg}
//                     alt="Play store"
//                     className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
//                   />
//                 </a>
//                 <a href="#">
//                   <img
//                     src={AppStoreImg}
//                     alt="App store"
//                     className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
//                   />
//                 </a>
//               </div>
//             </div>
//             {/* Empty div */}
//             <div></div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AppStore;




import React from "react";
import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";
import BgPng from "../../assets/website/coffee-beans-bg.png";

const backgroundStyle = {
backgroundImage: `url(${BgPng})`,
backgroundPosition: "center",
backgroundRepeat: "no-repeat",
backgroundSize: "cover",
height: "100%",
width: "100%",
};

const AppStore = () => {
return (
<> <div className="py-14" style={backgroundStyle}> <div className="container"> <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-4"> <div
           data-aos="fade-up"
           data-aos-duration="300"
           className="space-y-6 max-w-xl mx-auto text-center sm:text-left"
         >
{/* text section */} <h1 className="text-2xl sm:text-4xl font-semibold text-white/90 pl-3">
Roast & Crown — Coming Soon to Android and iOS. </h1>

```
          {/* img section */}
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-4">
            {/* Play Store */}
            <div className="flex flex-col items-center sm:items-start">
              <a href="#" className="cursor-not-allowed opacity-80">
                <img
                  src={PlayStoreImg}
                  alt="Play store"
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px] hover:scale-105 transition-all duration-300"
                />
              </a>
              <p className="text-sm text-yellow-200 mt-2 animate-pulse">
                Coming soon to Play Store ☕
              </p>
            </div>

            {/* App Store */}
            <div className="flex flex-col items-center sm:items-start">
              <a href="#" className="cursor-not-allowed opacity-80">
                <img
                  src={AppStoreImg}
                  alt="App store"
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px] hover:scale-105 transition-all duration-300"
                />
              </a>
              <p className="text-sm text-yellow-200 mt-2 animate-pulse">
                Coming soon to App Store 🍃
              </p>
            </div>
          </div>
        </div>

        {/* Empty div */}
        <div></div>
      </div>
    </div>
  </div>
</>


);
};

export default AppStore;
