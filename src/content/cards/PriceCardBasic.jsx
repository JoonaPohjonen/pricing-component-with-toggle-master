import React from "react";

function PriceCardBasic(props) {
  return (
    <>
      <div className="container sideBox">
        <h2 className="title">Basic</h2>
        <p className="price">{props.prices.Basic}</p>
        <hr></hr>
        <p className="cardText">500 GB Storage</p>
        <hr></hr>
        <p className="cardText">2 Users Allowed</p>
        <hr></hr>
        <p className="cardText">Send up to 3 GB</p>
        <hr></hr>
        <div className="button">
          <button style={{ background: "linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%)" }}>LEARN MORE</button>
        </div>
      </div>
    </>
  );
}

export default PriceCardBasic;
