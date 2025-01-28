"use client";

import CastSection from "@/components/Cast/CastSection";
import LandingSection from "@/components/Landing/LandingSection";
import Navbar from "@/components/Navbar/Navbar";
import PictureSection from "@/components/PictureSection/PictureSection";
import SypnsosisSection from "@/components/SypnosisSection/SypnsosisSection";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center "> 
        <Navbar /> 
      <div className="bg-black w-full">
        <LandingSection />
      </div>
      <div
        className="bg-black top-[100vh] w-full flex flex-col items-center  bg-repeat-y bg-center relative"
        // style={{ backgroundImage: "url(/assets/noise-bg-3.gif)" }}
      >
        <SypnsosisSection />
        <CastSection />
        <PictureSection />
      </div>
    </div>
  );
}

// "use client";
// import React from "react";
// import CastSection from "@/components/Cast/CastSection";
// import LandingSection from "@/components/Landing/LandingSection";
// import Navbar from "@/components/Navbar/Navbar";
// import PictureSection from "@/components/PictureSection/PictureSection";
// import SypnsosisSection from "@/components/SypnosisSection/SypnsosisSection";

// export default function Home() {
//   const videoRef = React.useRef<HTMLVideoElement | null>(null);

//   React.useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.playbackRate = 0.8; // Adjust the playback speed (e.g., 0.5x slower)
//     }
//   }, []);
//   return (
//     <div className="w-full flex flex-col items-center ">
//       <div className=" w-full flex flex-col items-center  bg-repeat-y bg-center relative">
//           <video
//           autoPlay
//           loop
//           ref={videoRef}
//           muted
//           playsInline
//           className="absolute top-0 left-0 w-full inset-0  h-full object-cover z-2"
//         >
//           <source src="/assets/noise-bg-2.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//          <div className="top-0 absolute inset-0 bg-black opacity-90 z-20"></div>
//          <div className="top-0 absolute inset-0  backdrop-blur-xl  bg-opacity-95 z-30"></div>
//         <Navbar />
//         <LandingSection />

//           <SypnsosisSection />
//           <CastSection />
//           <PictureSection />
//       </div>
//     </div>
//   );
// }
