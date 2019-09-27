import React from "react";
import uuid from "uuid/v1";

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
                <td key={uuid()}>{fields[item]}</td>
                <td key={uuid()}>{data[item]}</td>
              </tr>
            )
        )}
      </tbody>
    </table>
  );
};

export default TablePopup;
