import React from "react";

function PriceCardMaster(props) {
  return (
    <>
      <div className="container sideBox">
      <h2 className="title">Master</h2>
        <div className="price">{props.prices.Master}</div>
        <hr></hr>
        <p className="cardText">2 TB Storage</p>
        <hr></hr>
        <p className="cardText">10 Users Allowed</p>
        <hr></hr>
        <p className="cardText">Send up to 20 GB</p>
        <hr></hr>
        <div className="button">
          <button style={{ background: "linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%)" }}>LEARN MORE</button>
        </div>
      </div>
    </>
  );
}

export default PriceCardMaster;
