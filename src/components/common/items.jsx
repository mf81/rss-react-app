import React from "react";
import AmountSum from "./amountSumComponent";

const Items = ({ data, item }) => {
  switch (item) {
    case "wartosc":
      return <AmountSum data={data} item={item} />;
    default:
      return <React.Fragment>{data[item]}</React.Fragment>;
  }
};

export default Items;
