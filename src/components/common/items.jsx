import React from "react";
import Popup from "./popupComponent";
import EditTable from "./editTable";
import AmountSum from "./amountSumComponent";
import color from "./colorDetails";

const Items = ({ data, item }) => {
  switch (item) {
    case "wartosc":
      return <AmountSum data={data} item={item} />;
    default:
      return <React.Fragment>{data[item]}</React.Fragment>;
  }
};

export default Items;
