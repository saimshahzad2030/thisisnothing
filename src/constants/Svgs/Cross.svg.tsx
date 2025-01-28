import React from "react";

const Cross: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width={20}
      height={20}
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 5L5 19M5.00001 5L19 19"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Cross;
