function checkCredictCard() {
  let creditCardNumber;
  let stringified;

  do {
    creditCardNumber = parseInt(prompt("Credit Card Number:"));
    stringified = creditCardNumber.toString();
    if (
      stringified.length < 13 ||
      stringified.length > 16 ||
      isNaN(creditCardNumber) ||
      stringified.length == 14
    ) {
      console.log("Invalid card, try again:");
    }
  } while (
    stringified.length < 13 ||
    stringified.length > 16 ||
    isNaN(creditCardNumber) ||
    stringified.length == 14
  );

  return creditCardNumber;
}
