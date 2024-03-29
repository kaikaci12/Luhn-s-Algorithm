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

function checkSum(creditCardNumber) {
  const stringified = creditCardNumber.toString();
  const splitedCard = stringified.split("");
  const everySecondNum = splitedCard.filter((number, index) => index % 2 == 0);
  const MultyipliedByTwo = everySecondNum.map((num) => num * 2);

  let count = 0;

  for (let i = 0; i < MultyipliedByTwo.length; i++) {
    if (MultyipliedByTwo[i] >= 10) {
      MultyipliedByTwo[i] =
        (MultyipliedByTwo[i] % 10) + Math.floor(MultyipliedByTwo[i] / 10);
    }
    count += MultyipliedByTwo[i];
  }

  let count2 = 0;
  for (let i = 1; i < splitedCard.length; i = i + 2) {
    count2 += Number(splitedCard[i]);
  }

  const finalNumber = count + count2;
  if (finalNumber % 10 == 0) {
    return `The Card Is valid and It is: ${checkCardType(stringified)}`;
  } else {
    return "Invalid Card Number";
  }
}

alert(checkSum(checkCredictCard()));
