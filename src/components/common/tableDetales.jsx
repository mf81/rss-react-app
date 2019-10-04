import React from "react";
import uuid from "uuid/v1";
import Items from "./items";

const TablePopup = ({ fields, data }) => {
  return (
    <table key={uuid()} className="table table-striped">
      <thead>
        <tr key={uuid()}>
          <th key={uuid()}>Pole:</th>
          <th key={uuid()}>Wartość:</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(fields).map(
          (item, i) =>
            data[item] &&
            item !== "imieNazwisko" && (
              <tr key={uuid()}>
                <td key={uuid()}>{fields[item].label}</td>
                <td key={uuid()}>
                  <Items data={data} item={item} />
                  {fields[item].label}
                </td>
              </tr>
            )
        )}
      </tbody>
    </table>
  );
};

export default TablePopup;
