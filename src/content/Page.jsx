import React, { useState } from "react";
import PriceCardBasic from "./cards/PriceCardBasic";
import PriceCardProfessional from "./cards/PriceCardProfessional";
import PriceCardMaster from "./cards/PriceCardMaster";

const Page = () => {
  const [price, setPrice] = useState({
    Basic: "$199.99",
    Professional: "$249.99",
    Master: "$399.99",
  });

  return (
    <>
      <div>
        <h1 className="ourPricing">Our Pricing</h1>
        <div className="centerMe">
          <p className="contentSideBySide paddingForMe">Annually</p>

          <label className="switch contentSideBySide">
            <input
              type="checkbox"
              onChange={() =>
                price.Basic === "$199.99"
                  ? setPrice({
                      Basic: "$19.99",
                      Professional: "$24.99",
                      Master: "$39.99",
                    })
                  : setPrice({
                      Basic: "$199.99",
                      Professional: "$249.99",
                      Master: "$399.99",
                    })
              }
            />
            <span className="slider round"></span>
          </label>

          <p className="contentSideBySide paddingForMe">Monthly</p>
        </div>

        <div className="cardRow">
          <div className="makeRow sideRow firstBlock"><PriceCardBasic prices={price} /></div>
          <div className="makeRow middleRow"><PriceCardProfessional prices={price} /></div>
          <div className="makeRow sideRow"><PriceCardMaster prices={price} /></div>
        </div>
      </div>
    </>
  );
};

export default Page;
