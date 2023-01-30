import React, { useState, useEffect } from "react";
const Main = () => {
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);
  const [card, setCard] = useState([]);

  return (
    <div
      style={{ paddingTop: 200 }}
      className="d-flex flex-wrap justify-content-center bg-dark  gap-5 ">
      {card.map((item) => { 
        return (
          <div className="card w-25 p-3 shadow" key={item.name.common}>
            <h1>{item.name.common}</h1>
            <p>{item.capital}</p>
            <img src={item.flags.svg} alt="image" width={300} height={150} />
          </div>
        );
      })}
    </div>
  );
};
export default Main;
