import React from "react";

const EditTable = ({ data, fields }) => {
  return Object.keys(fields).map(
    (item, i) =>
      fields[item] !== "_id" &&
      fields[item] !== "__v" && (
        <p key={i}>
          {fields[item].label} {data[item]}
        </p>
      )
  );
};

export default EditTable;
