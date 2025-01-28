// import { playfairDisplay } from "@/fonts/fonts";
// import React, { useRef, useState } from "react";

// const PictureSection = () => {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [progress, setProgress] = useState(0);

//   const handleTimeUpdate = () => {
//     const current = videoRef.current?.currentTime || 0;
//     const duration = videoRef.current?.duration || 1;
//     setProgress((current / duration) * 100);
//   };

//   return (
//     <div className="z-30 container px-auto w-full p-4 md:px-8 overflow-y-hidden">
//       <div
//         className="relative flex flex-col items-center w-full min-h-[40vh] sm:min-h-[100vh] pt-12"
//         data-aos="fade-up"
//       >
//          <div
//           className={`capitalize relative z-10 flex flex-col items-center w-full text-center justify-center ${playfairDisplay.className}`}
//         >
//            <div className="relative flex items-center justify-center w-11/12 h-auto bg-gray-400 bg-opacity-55">
//              <video
//               ref={videoRef}
//               className="w-full h-full object-cover"
//               controls
//               poster="/assets/thumbnail.png"
//               onTimeUpdate={handleTimeUpdate}
//             >
//               <source src="/assets/trailer.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PictureSection;
import { playfairDisplay } from "@/fonts/fonts";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

const PictureSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };
  useEffect(() => {
    if (isPlaying && videoRef.current) {
      videoRef.current.play();
    }
  }, [isPlaying]);

  const handleStop = () => {
    if (videoRef.current) {
      setIsPlaying(false);
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset the video to the start
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          handleStop(); // Reset changes when the section is out of view
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="z-30 container px-auto w-full p-4 md:px-8 overflow-y-hidden"
    >
      <div
        className="relative flex flex-col items-center justify-center w-full min-h-[40vh] sm:min-h-[100vh] pt-12"
        data-aos="fade-up"
      >
        <div
          className={`capitalize relative z-10 flex flex-col items-center w-full text-center justify-center ${playfairDisplay.className}`}
        >
          <div className="relative flex items-center justify-center w-11/12 lg:h-[85vh] h-auto bg-gray-400 bg-opacity-55">
            {!isPlaying ? (
              <div
                className="relative w-full h-full flex items-center justify-center cursor-pointer"
                onClick={handlePlay}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
                <Image
                  src="/assets/thumbnail-2.png"
                  alt="Video Thumbnail"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                />
                <div className="z-20 absolute flex items-center justify-center w-16 h-8 bg-white bg-opacity-90 rounded-full">
                  <svg
                    className="w-40 h-40"
                    viewBox="0 -3 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-300.000000, -7442.000000)"
                      >
                        <g
                          id="icons"
                          transform="translate(56.000000, 160.000000)"
                          fill="#EF0107"
                        >
                          <path
                            d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289"
                            id="youtube-[#168]"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            ) : (
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                controls
                poster="/assets/thumbnail-2.png"
                onTimeUpdate={() => {}}
              >
                <source src="/assets/trailer-no-bg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PictureSection;
