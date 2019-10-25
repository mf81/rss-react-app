export default data => {
  if (data.uwagi) {
    if (
      data.uwagi.toLowerCase().includes("zielny:") ||
      data.uwagi.toLowerCase().includes("spłaco") ||
      data.uwagi.toLowerCase().includes("splaco")
    ) {
      return "success";
    }
    if (
      data.uwagi.toLowerCase().includes("niebieski:") ||
      data.uwagi.toLowerCase().includes("umorzo")
    ) {
      return "primary";
    }
    if (
      data.uwagi.toLowerCase().includes("żółty:") ||
      data.uwagi.toLowerCase().includes("raty")
    ) {
      return "warning";
    }
    if (
      data.uwagi.toLowerCase().includes("czarny:") ||
      data.uwagi.toLowerCase().includes("zgon") ||
      data.uwagi.toLowerCase().includes("zmarł")
    ) {
      return "dark";
    }
    if (data.uwagi.toLowerCase().includes("czerwony:")) {
      return "danger";
    }
  }
  return "outline-primary";
};
