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

  return creditCardNumber; // Return the validated credit card number
}

function checkCardType(stringified) {
  let firstTwoDigits;

  if (stringified.length === 15) {
    firstTwoDigits = stringified.slice(0, 2);
    if (firstTwoDigits === "34" || firstTwoDigits === "37") {
      return "American Express Card";
    }
  }
  if (stringified.length === 16) {
    firstTwoDigits = stringified.slice(0, 2);
    if (firstTwoDigits >= "51" && firstTwoDigits <= "55") {
      return "MasterCard";
    }
  }

  if (stringified.length === 13 || stringified.length === 16) {
    firstTwoDigits = stringified.slice(0, 1);
    if (firstTwoDigits === "4") {
      return "VISA";
    }
  }

  return "Unknown Card Type";
}
