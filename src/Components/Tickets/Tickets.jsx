import React, { use } from "react";

const Tickets = ({ promiseTickets }) => {
  const ticketData = use(promiseTickets);
  console.log(ticketData);
 
  return (
    <div className=" bg-[#F5F5F5] md:flex ">
      <h1 className="max-w-10/12 mx-auto font-semibold text-2xl">
        Customer Tickets
      </h1>
      <div className="max-w-10/12 mx-auto grid grid-cols-1  md:grid-cols-2  bg-[#F5F5F5]">
      
        {ticketData.map((ticket) => (
          <div className="m-4 ">
            <div className="card w-96 bg-base-100 card-sm shadow-sm ">
              <div className="card-body mt-4 ">
                <div className="flex justify-between">
                  <h2 className="card-title">{ticket.title}</h2>
                  <button
                    className={`btn  rounded-3xl text-[16px] ${ticket.span == "Open" ? "text-[#0B5E06] bg-[#10341d]" : ticket.status == "In Progress" ? "text-[#9C7700] bg-[#F8F3B9] " : "text-[#9C7700] bg-[#eeeac3]"}`}
                  >
                    {ticket.status}
                  </button>
                </div>
                <p>{ticket.description}</p>
                <div className=" flex gap-26">
                  <div className="gap-4 space-x-4">
                    <span>{ticket.id} </span>
                    <span
                      className={`font-bold ${ticket.priority == "High" ? "text-[#F83044]" : ticket.priority == "Medium" ? "text-[#FEBB0C]" : "text-[#02A53B]"}`}
                    >
                      {ticket.priority}
                    </span>
                  </div>
                  <div className="space-x-4">
                    <span>{ticket.customer}</span>
                    <span> {ticket.createdAt}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
       
      </div>
       <div>
          <h2 className="text-[24px] font-semibold mb-4">Task Status</h2>
          <div className="space-y-4">
              <p className="text-[#627382]">
                Select a ticket to add to Task Status
              </p>
              <div className="bg-white p-4 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-3">Billing discrepancy</h3>
              <button className="w-full btn bg-green-500 text-white py-2 rounded-lg">
                Complete
              </button>
            </div>
            <h2 className="text-[24px] font-semibold pt-4">Resolved Task</h2>
            <p className="text-[#627382]">No resolved tasks yet.</p>
             <div className="bg-blue-200 p-4 rounded-xl">
              Login issues on mobile
            </div>
          </div>
        </div>
    </div>
  );
};

export default Tickets;
