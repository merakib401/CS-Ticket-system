import React, { use } from "react";

const Tickets = ({ promiseTickets }) => {
  const ticketData = use(promiseTickets);
  console.log(ticketData);

  return (
    
    <div className="max-w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2  bg-[#F5F5F5]">

      {ticketData.map((ticket) => (
        <div className="m-6">
          <div className="card w-96 bg-base-100 card-sm shadow-sm ">
            <div className="card-body mt-4 ">
              <div className="flex justify-between">
                <h2 className="card-title">{ticket.title}</h2>
                <button className="btn bg-[#B9F8CF] text-[#02A53B] rounded-3xl text-[16px] ">
                  {ticket.status}
                </button>
              </div>
              <p>{ticket.description}</p>
              <div className=" flex gap-26">
                <div className="gap-4">
                  <span>{ticket.id} </span>
                  <span>{ticket.priority}</span>
                </div>
                <div className="">
                  <span>{ticket.customer}</span>
                  <span> {ticket.createdAt}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tickets;
