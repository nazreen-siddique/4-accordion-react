import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';


function App() {
const [answer,setAnswer]=useState(false);
  return (
    <main>
      <div className="container">
        <h3>Question and answer about login</h3>
        <section className="info">
          {data.map((item) => {
            return (
             <SingleQuestion key={item.id}{...item}/>
            );
          })}{" "}
        </section>
      </div>
    </main>
  );
}

export default App;
