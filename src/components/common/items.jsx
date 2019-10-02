import React from "react";

const Items = ({ data, item }) => {
  let text = data[item];

  if (item === "wartosc") {
    let sum;

    const regexConstructor = new RegExp("\\(\\d+,\\d+\\+\\d+,\\d+\\)");
    if (regexConstructor.test(text)) {
      text = text.replace("(", "");
      text = text.replace(")", "");
      text = text.replace(/,/g, ".");
      text = text.replace(" ", "");
      text = text.split("+");
      sum = parseFloat(text[0], 10) + parseFloat(text[1], 10);
      sum = sum.toFixed(2);
      sum = sum.replace(".", ",");
      return (
        <React.Fragment>
          {data[item]} <br /> {sum} zł
        </React.Fragment>
      );
    } else {
      return <React.Fragment>{text} zł</React.Fragment>;
    }
  }
  return text;
};

export default Items;
