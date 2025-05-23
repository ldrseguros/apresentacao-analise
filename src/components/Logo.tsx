import React from "react";

interface LogoProps {
  className?: string;
  type?: "ldr" | "gm";
}

const Logo: React.FC<LogoProps> = ({ className, type = "ldr" }) => {
  if (type === "ldr") {
    return (
      <div className={`flex flex-col items-center ${className}`}>
        <div className="text-4xl font-bold tracking-wider text-white">
          <span className="relative">
            LDR
            <span className="absolute right-0 transform translate-x-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="0"
                    y1="10"
                    x2="34"
                    y2="10"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#c6d72b" />
                    <stop offset="0.5" stopColor="#ffcc00" />
                    <stop offset="1" stopColor="#c6d72b" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </span>
        </div>
        <div className="text-xs font-medium tracking-widest uppercase text-white mt-1">
          <span>CORRETORA</span>
        </div>
        <div className="text-xs font-medium tracking-widest uppercase text-white">
          <span>DE SEGUROS</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`font-bold ${className}`}>
      <span className="text-white">GUSTAVO</span>
      <span className="text-brand-lightblue">MARIANO</span>
    </div>
  );
};

export default Logo;
