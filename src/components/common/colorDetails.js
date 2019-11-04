export default data => {
  const greeenLabel = ["zielony:", "zielone:", "spłaco", "spłaca", "splaco"];
  const blueLabel = ["niebieski:", "niebieskie:", "umorzo"];
  const yellowLabel = ["żółty:", "żółte:", "raty"];
  const blackLabel = [
    "czarny:",
    "czarne:",
    "zgon",
    "zmarł",
    "śmierć",
    "zmarl",
    "smierc"
  ];
  const redLabel = ["czerwony:", "czerwone:"];

  if (data.uwagi) {
    if (
      greeenLabel.some(substring =>
        data.uwagi.toLowerCase().includes(substring)
      )
    ) {
      return "success";
    }

    if (
      blueLabel.some(substring => data.uwagi.toLowerCase().includes(substring))
    ) {
      return "primary";
    }

    if (
      yellowLabel.some(substring =>
        data.uwagi.toLowerCase().includes(substring)
      )
    ) {
      return "warning";
    }
    if (
      blackLabel.some(substring => data.uwagi.toLowerCase().includes(substring))
    ) {
      return "dark";
    }

    if (
      redLabel.some(substring => data.uwagi.toLowerCase().includes(substring))
    ) {
      return "danger";
    }
  }
  return "outline-primary";
};
