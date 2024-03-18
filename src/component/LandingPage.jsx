import React, { useState } from "react";

import "./LandingPage.css";

import { Data } from "../Data/Data";
import { Link, useNavigate } from "react-router-dom";
import Layout from "./Layout";

const LandingPage = () => {
 

  return (
   <Layout>
    <div className="d-flex gap-3 py-5">
          <div className="w-100 d-flex  justify-content-center">
            <div>
              <h1>Welcome to the </h1>
              <h1 className="bold">Frontend Quiz!</h1>
              <p className="py-3">Pick a Subject to get started</p>
            </div>
          </div>
          <div className="d-flex flex-column gap-2 w-100">
            {Data.map((item, index) => {
              return (
                <Link  to={`/question/${index}`} key={index} className="a">
                <div
                  
                  className="w-100 fs-5 d-flex gap-4 p-2 align-items-center shadow rounded  quiz "
                 
                >
                  <div>
                    <img
                      className="rounded overflow-hidden"
                      width={"50px"}
                      height={'100%'}
                      src={item?.img}
                      alt=""
                    />
                  </div>
                  <p className="bold">{item.subject}</p>
                </div>
                </Link>
              );
            })}
          </div>
        </div>

   </Layout>
        
     
  );
};

export default LandingPage;
