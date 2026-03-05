import React from "react";

const Navber = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm max-w-10/12 mx-auto">
        <div className="flex-1">
          <a className="font-bold  text-xl">CS — Ticket System</a>
        </div>
        <div className="flex-none">
          <a className="mr-2 " href="">Home</a>
           <a className="mr-3 " href="">
               FAQ
             </a>
           <a className="mr-3 " href="">
               Changelog
             </a>
           <a className="mr-3 " href="">
               Blog
             </a>
           <a className="mr-3 " href="">
               Download
             </a>
           <a className="mr-3 " href="">
               Contact
             </a>
          <button className="btn bg-[#9F62F2] text-white text-[16px] ">
            + New Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navber;
