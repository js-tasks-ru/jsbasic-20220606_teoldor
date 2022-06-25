function checkSpam(str) {
  let a = "1xBet".toLowerCase();
  let b = "XXX".toLowerCase();
  let resultStr = str.toLowerCase();

  if (resultStr.includes(a) || resultStr.includes(b)) {
    return true;
  } else {
    return false;
  }
}
