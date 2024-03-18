import React, { useEffect, useState } from "react";

import "./LandingPage.css";

import { Data } from "../Data/Data";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Form, ProgressBar } from "react-bootstrap";
import Layout from "./Layout";

const Question = () => {
  const { id } = useParams();
  
  const subject = Data[id];
  const qusn = subject.qna;
  const [currentState, setCurrentState] = useState(0);
  const [selected, setselected] = useState("");
  const navigate = useNavigate();
  const [correctAns, setcorrectAns] = useState(0);

  const handleClick = (index) => {
    qusn[currentState].selectedAns = index;
    setselected(index);
  };

  const handleNext = () => {
    if (selected !== "") {
      const isCorrect = qusn[currentState].Ans[selected].correct;
      setcorrectAns(prevCorrectAns => isCorrect ? prevCorrectAns + 1 : prevCorrectAns);
    }
    console.log(correctAns);
    setCurrentState(currentState + 1);

    setselected("");
  };

  const handleSubmit=()=>{
    if (selected !== "") {
      const isCorrect = qusn[currentState].Ans[selected].correct;
      if(isCorrect){
        navigate(`/success/${correctAns+1}/${id}`)

      }
    }else{
      navigate(`/success/${correctAns}/${id}`)

    }

   
  }
  return (
    <Layout>
      <div className="d-flex gap-5 py-5">
          <div className="w-100 d-flex flex-column  justify-content-around">
            <div>
              <p className="text-secondary">
                Question {currentState + 1} out of {qusn.length}
              </p>
              <h2 className="bold">{qusn[currentState].question}</h2>
            </div>

            <ProgressBar
              now={(100 * (currentState + 1)) / qusn.length}
              variant="success"
              animated
            />
          </div>
          <div className="d-flex flex-column gap-2 w-100">
            {qusn[currentState].Ans.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-100 fs-5 d-flex gap-4 p-2 align-items-center shadow rounded  quiz "
                  style={{
                    background: selected === index ? "blue" : "inherit",
                    color: selected === index ? "white" : "inherit",
                  }}
                  onClick={() => handleClick(index)}
                >
                  <div className="box">{index + 1}</div>
                  <p className="bold">{item.ans}</p>
                </div>
              );
            })}

            {currentState != qusn.length - 1 ? (
              <Button className="nextBtn" onClick={handleNext}>
                Next
              </Button>
            ) : (
              <Button
                className="nextBtn"
                onClick={() => handleSubmit()}
              >
                Submit Answer
              </Button>
            )}
          </div>
        </div>

    </Layout>
  )
        
     
};

export default Question;
