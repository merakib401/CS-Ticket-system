import React,{use} from "react";

const Tickets = ({promiseTickets}) => {
    const ticketData = use(promiseTickets)
    console.log(ticketData);
    
    return(
        <h1 className="max-w-10/12 mx-auto text-2xl font-semibold">Customer Tickets</h1>
    )   
}


export default Tickets;