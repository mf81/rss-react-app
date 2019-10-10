import React from "react";
import Items from "./items";

const TablePopup = ({ fields, data }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Pole:</th>
          <th>Wartość:</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(fields).map(
          (item, i) =>
            data[item] &&
            item !== "imieNazwisko" && (
              <tr key={"tr" + item}>
                <td key={"td" + item}>{fields[item].label}</td>
                <td key={"item" + item}>
                  <Items data={data} item={item} />
                </td>
              </tr>
            )
        )}
      </tbody>
    </table>
  );
};

export default TablePopup;
