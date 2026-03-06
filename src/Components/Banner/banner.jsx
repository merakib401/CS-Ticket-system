import React from "react";

const Banner = () => {
  return (
    <div className="bg-[#F5F5F5] grid grid-cols-1 md:grid-cols-2">
      <div className="max-w-10/12 mx-auto  m-8">
        <div className="card  bg-[#9F62F2]  text-neutral-content w-96 h-40">
          <div className="flex">
            <img className=" absolute p-0 m-0 "
              src="/src/assets/vector1.png" ></img>
          </div>
          <div className="card-body items-center   overflow-hidden text-center">
            <h2 className="card-title text-center items-center text-white    text-[24px]">
              In-Progress!
            </h2>
            <p className="text-[60px] text-white">0</p>
          </div>
        </div>
      </div>
      <div className="max-w-10/12 mx-auto mt-8">
        <div className="card  bg-gradient-to-r from-[#54CF68] from-0%  to-[#00827A] to-100%  text-neutral-content w-96 h-40">
          <img
            className="absolute p-0 m-0 "
            src="/src/assets/vector1.png"
          ></img>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-[24px] text-white">Resolved!</h2>
            <p className="text-[60px] text-white">0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
