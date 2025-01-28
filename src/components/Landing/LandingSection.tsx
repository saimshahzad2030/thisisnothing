// "use client";
// import { lexend } from "@/fonts/fonts";
// import React, { useState, useRef } from "react";

// const LandingSection = () => {
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const videoRef = useRef<HTMLVideoElement>(null);

//   const handleOpenDialog = () => {
//     setIsDialogOpen(true);
//     setTimeout(() => {
//       videoRef.current?.play();
//     }, 100);
//   };

//   const handleCloseDialog = () => {
//     console.log("first");
//     videoRef.current?.pause();
//     setIsDialogOpen(false);
//   };

//   return (
//     <div className="container mx-auto w-full">
//       <div className="fixed flex flex-col items-center w-full bg-black min-h-[calc(100vh)] justify-center">
//         <img
//           src="/assets/logo-movie.png"
//           alt="movie logo"
//           className="w-4/12 h-auto"
//         />
//         <button
//           onClick={handleOpenDialog}
//           className={`mt-3 font-semibold p-2 bg-black rounded-md border border-white text-white hover:bg-white hover:border-black hover:text-black transition-colors duration-300 ${lexend.className}`}
//         >
//           WATCH TRAILER
//         </button>
//       </div>

//       {isDialogOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
//           <div className="relative w-10/12 max-w-4xl bg-white rounded-lg overflow-hidden">

//             <button
//               onClick={handleCloseDialog}
//               className="absolute top-3 right-3 text-black bg-white border border-black rounded-full w-8 h-8 flex items-center justify-center font-bold hover:bg-black hover:text-white transition duration-300 z-50"
//             >
//               X
//             </button>

//             <video
//               ref={videoRef}
//               className="w-full h-auto"
//               controls
//               muted
//               poster="/assets/thumbnail.png"
//             >
//               <source src="/assets/trailer.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LandingSection;

"use client";
import { lexend } from "@/fonts/fonts";
import React, { useState, useRef } from "react";

const LandingSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };

  const handleCloseDialog = () => {
    console.log("first");
    videoRef.current?.pause();
    setIsDialogOpen(false);
  };

  return (
    <div className="z-30 container mx-auto w-full">
      <div className=" fixed inset-0 flex flex-col items-center w-full  min-h-[calc(100vh)] justify-center">
        <video
          className="absolute inset-0 w-full h-full object-cover z-[-1]" // Ensure the video fills the background and stays behind content
          autoPlay
          loop
          muted
          playsInline // Makes it mobile-friendly
        >
          <source src="/assets/trailer-no-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <img
          data-aos="zoom-in"
          src="/assets/logo-movie.png"
          alt="movie logo"
          className="w-4/12 h-auto"
        />
        <button
          data-aos="zoom-in-up"
          onClick={handleOpenDialog}
          className={`mt-3 font-semibold p-2 bg-black rounded-md border border-white text-white hover:bg-white hover:border-black hover:text-black transition-colors duration-300 ${lexend.className}`}
        >
          WATCH TRAILER
        </button>
      </div>

      {isDialogOpen && (
        <div className="fixed inset-0  z-50  flex items-center justify-center bg-black bg-opacity-80">
          <div className="relative z-50 w-10/12 max-w-4xl bg-white rounded-lg overflow-hidden">
            <button
              onClick={handleCloseDialog}
              className="absolute top-3 right-3   rounded-full w-8 h-8 flex items-center justify-center font-bold  bg-black  text-white transition duration-300 z-50"
            >
              X
            </button>

            <video
              ref={videoRef}
              className="w-full h-auto"
              controls
              muted
              poster="/assets/thumbnail.png"
            >
              <source src="/assets/trailer.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingSection;
