import React, { useState } from "react";
import { About, Account, Contact, Home, Services } from "./Components";

const Task = () => {
  const [page, setPage] = useState("Home");
  console.log(page);
  return (
    <div className="flex flex-col h-screen gap-2">
      <div className="flex items-center bg-black">
        {["Home", "About", "Contact", "Services", "Account"].map((item) => (
          <button
            style={{
              background: page === item ? "white" : "black",
              color: page === item ? "black" : "white",
            }}
            className="p-2"
            onClick={() => setPage(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {page === "Home" && <Home />}
      {page === "About" && <About />}
      {page === "Contact" && <Contact />}
      {page === "Services" && <Services />}
      {page === "Account" && <Account />}
    </div>
  );
};

export default Task;
