import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { IoIosAdd, IoIosClose } from "react-icons/io";
const Question = ({title,info}) => {
  const[showInfo,setShowInfo]=useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>

        <button
          className="btn"
          onClick={() => {
            setShowInfo(!showInfo);
          }}
        >
          {showInfo ? <IoIosClose /> :<IoIosAdd/>}
        </button>
      </header>
      {showInfo && info}
    </article>
  );
};

export default Question;
