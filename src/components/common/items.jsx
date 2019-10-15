import React from "react";
import Popup from "./popupComponent";
import EditTable from "./editTable";
import AmountSum from "./amountSumComponent";

const Items = ({ data, item, fields, onEdit }) => {
  switch (item) {
    case "imieNazwisko":
      return (
        <Popup
          label={data[item] ? data[item] : "brak wartości"}
          title="Edytuj wpis"
          template={<EditTable data={data} fields={fields} onEdit={onEdit} />}
          size="lg"
          variant="outline-primary"
          closeButton="Zamknij bez zapisania"
          extraProps
        />
      );
    case "wartosc":
      return <AmountSum data={data} item={item} />;
    default:
      return <React.Fragment>{data[item]}</React.Fragment>;
  }
};

export default Items;
