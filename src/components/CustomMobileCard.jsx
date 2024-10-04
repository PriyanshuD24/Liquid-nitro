import React from "react";
import { IoClose } from "react-icons/io5";

const CustomMobileCard = ({ setScene, style, className, children }) => {
  return (
    <div style={style} className={`   z-20 ${className}`}>
      {/* <div
        onClick={() => setScene(0)}
        className="absolute -top-0 rotate-90 -right-0 grid place-content-center cursor-pointer z-10">
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
      </div> */}

      <div
        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  z-20 w-[90%] box inset-[1px] text-white bg-black/15 rounded-xl backdrop-blur-lg  h-fit max-h-[80svh] overflow-x-hidden overflow-y-auto p-3 border-cyan-400 border-[1px]"
        // style={{
        //   clipPath:
        //     "polygon(10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)",
        // }}
        >
            <div className="absolute text-xl text-white right-1.5 top-1.5 hover:cursor-pointer w-fit z-20" onClick={()=>setScene(0)}> 
              <IoClose/>
            </div>
        {children}
      </div>
    </div>
  );
};

export default CustomMobileCard;
