import React, { useState } from "react";

import "./LandingPage.css";



const Layout = ({children}) => {
  const [brightNess, setBrightNess] = useState(false);
 

  return (
    <div
      className=" w-100   main "
      style={{
        background: brightNess ? "white" : "#303d52",
        color: brightNess ? "black" : "white",
      }}
    >
      <div className="container p-5">
        <div className=" d-flex gap-3 justify-content-end align-items-center ">
          <i className="bi bi-brightness-high-fill"></i>
          {brightNess ? (
            <i
              className="bi bi-toggle2-off fs-2 toggle "

              onClick={() => {
                setBrightNess(false);
              }}
            ></i>
          ) : (
            <i
              className="bi bi-toggle2-on fs-2 toggle"
              onClick={() => setBrightNess(true)}
            ></i>
          )}
          <i className="bi bi-moon"></i>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
