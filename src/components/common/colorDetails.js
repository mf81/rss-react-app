export default data => {
  const greeenLabel = ["zielony:", "zielone:", "spłaco", "spłaca", "splaco"];
  const blueLabel = ["niebieski:", "niebieskie:", "umorzo"];
  const yellowLabel = ["żółty:", "żółte:", "raty"];
  const redLabel = ["czerwony:", "czerwone:"];
  const blackLabel = [
    "czarny:",
    "czarne:",
    "zgon",
    "zmarł",
    "śmierć",
    "zmarl",
    "smierc"
  ];

  if (data.uwagi) {
    let variant = "outline-success";

    greeenLabel.some(str => data.uwagi.toLowerCase().includes(str)) &&
      (variant = "success");

    blueLabel.some(str => data.uwagi.toLowerCase().includes(str)) &&
      (variant = "primary");

    yellowLabel.some(str => data.uwagi.toLowerCase().includes(str)) &&
      (variant = "warning");

    blackLabel.some(str => data.uwagi.toLowerCase().includes(str)) &&
      (variant = "dark");

    redLabel.some(str => data.uwagi.toLowerCase().includes(str)) &&
      (variant = "danger");

    return variant;
  } else return "outline-primary";
};
