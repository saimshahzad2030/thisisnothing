export const Hamburger: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 42 18"
      fill="none"
      className={className ?? className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40.3833 8.36511L2.00001 8.60155"
        stroke="white"
        width="3"
        strokeLinecap="round"
      />
      <path
        d="M36.9861 16L5.00001 16.197"
        stroke="#A1A1A1"
        width="2"
        strokeLinecap="round"
      />
      <path
        d="M33.5889 1L8.00001 1.15763"
        stroke="#A2A2A2"
        width="2"
        strokeLinecap="round"
      />
    </svg>
  );
};


