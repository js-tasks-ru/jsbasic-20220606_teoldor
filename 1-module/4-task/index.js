function checkSpam(str) {
  let resultStr = str.toLowerCase();

  if (resultStr.includes("1xBet") || resultStr.includes("XXX")) {
    return true;
  } else {
    return false;
  }
}
