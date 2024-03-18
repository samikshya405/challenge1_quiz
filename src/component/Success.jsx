import React, { useState } from "react";

import "./LandingPage.css";

import { Data } from "../Data/Data";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import Layout from "./Layout";

const Success = () => {
 
  const navigate = useNavigate();
  const { id1, id2 } = useParams();

  return (
    <Layout>
      <div className="d-flex flex-column  gap-3 py-5">
        <div className="w-100 d-flex  justify-content-center">
          <div>
            <h1>Quiz completed </h1>
            <h1 className="bold">You Scored!</h1>
          </div>
        </div>
        <div className="d-flex  flex-column align-items-center  pt-4  w-100">
          <div className="w-50">
            <h1 className=" bold result text-center">{id1}</h1>
            <p className="text-secondary text-center">Out of 5</p>
            <Button
              className="nextBtn w-100"
              onClick={() => navigate(`/question/${0}`)}
            >
              Play Again
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Success;
