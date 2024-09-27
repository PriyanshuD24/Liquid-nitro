import React from "react";

const CustomCard = ({ setScene, style, className, children }) => {
  return (
    <div style={style} className={`absolute w-[90%] max-w-lg ${className}`}>
      <div
        onClick={() => setScene(0)}
        className="absolute -top-4 rotate-90 -right-4 grid place-content-center cursor-pointer z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="2.2rem" height="2.2rem" viewBox="0 0 24 24">
          <path
            fill="rgb(43, 58, 93,0.95)"
            stroke="#52A7D6"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.7"
            d="M20.5 15.8V8.2a1.91 1.91 0 0 0-.944-1.645l-6.612-3.8a1.88 1.88 0 0 0-1.888 0l-6.612 3.8A1.9 1.9 0 0 0 3.5 8.2v7.602a1.91 1.91 0 0 0 .944 1.644l6.612 3.8a1.88 1.88 0 0 0 1.888 0l6.612-3.8A1.9 1.9 0 0 0 20.5 15.8"
          />
          <path
            fill="none"
            stroke="#ffffff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.9"
            d="m15 9l-6 6m0-6l6 6"
          />
        </svg>
      </div>

      <div
        className="absolute box inset-[1px] bg-black/15 backdrop-blur-lg h-fit p-5"
        style={{
          clipPath:
            "polygon(10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)",
        }}>
        {children}
      </div>
    </div>
  );
};

export default CustomCard;
