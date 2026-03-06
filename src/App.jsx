import { Suspense, useState } from "react";
import "./App.css";
import Navber from "./Components/Navber/Navber";
import Banner from "./Components/Banner/banner";
import Tickets from "./Components/Tickets/Tickets";
import Footer from "./Components/footer/footer";


const fetchTickets = async () =>{
  const res = await fetch("/tickets.json")
  return res.json()
}


function App() {
  const promiseTickets = fetchTickets()
  return (
    <>
      <Navber></Navber>
      <Banner></Banner>
     <Suspense fallback= {<span className="loading loading-spinner loading-lg"></span>}>
       <Tickets promiseTickets = {promiseTickets} ></Tickets>
     </Suspense>
     <Footer></Footer>
    </>
  );
}

export default App;
