import React from "react";

const EditTable = ({ data }) => {
  return (
    <React.Fragment>
      {Object.keys(data).map(item => (
        <p>
          {item !== "_id" && item !== "__v" && (
            <p>
              {item}: {data[item]}
            </p>
          )}
        </p>
      ))}
    </React.Fragment>
  );
};

export default EditTable;
