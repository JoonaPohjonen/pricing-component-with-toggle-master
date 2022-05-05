import React from "react";

function PriceCardProfessional(props) {
  return (
    <>
      <div className="container middleBox"  style={{ background: "linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%)" }}>
      <h2 className="titleUnique">Professional</h2>
        <div className="priceUnique">{props.prices.Professional}</div>
        <hr></hr>
        <p className="cardTextUnique">1 TB Storage</p>
        <hr></hr>
        <p className="cardTextUnique">5 Users Allowed</p>
        <hr></hr>
        <p className="cardTextUnique">Send up to 10 GB</p>
        <hr></hr>
        <div className="button">
          <button style={{ background: "white", color: "#8080ff" }}>LEARN MORE</button>
        </div>
      </div>
    </>
  );
}

export default PriceCardProfessional;
