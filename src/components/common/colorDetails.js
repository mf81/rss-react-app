export default data => {
  if (data.uwagi) {
    if (
      data.uwagi.toLowerCase().includes("zielony:") ||
      data.uwagi.toLowerCase().includes("zielone:") ||
      data.uwagi.toLowerCase().includes("spłaco") ||
      data.uwagi.toLowerCase().includes("spłaca") ||
      data.uwagi.toLowerCase().includes("splaco")
    ) {
      return "success";
    }
    if (
      data.uwagi.toLowerCase().includes("niebieski:") ||
      data.uwagi.toLowerCase().includes("niebieskie:") ||
      data.uwagi.toLowerCase().includes("umorzo")
    ) {
      return "primary";
    }
    if (
      data.uwagi.toLowerCase().includes("żółty:") ||
      data.uwagi.toLowerCase().includes("żółte:") ||
      data.uwagi.toLowerCase().includes("raty")
    ) {
      return "warning";
    }
    if (
      data.uwagi.toLowerCase().includes("czarny:") ||
      data.uwagi.toLowerCase().includes("czarne:") ||
      data.uwagi.toLowerCase().includes("zgon") ||
      data.uwagi.toLowerCase().includes("zmarł")
    ) {
      return "dark";
    }
    if (
      data.uwagi.toLowerCase().includes("czerwony:") ||
      data.uwagi.toLowerCase().includes("czerwone:")
    ) {
      return "danger";
    }
  }
  return "outline-primary";
};
