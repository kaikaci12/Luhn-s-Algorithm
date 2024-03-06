function checkSum() {
  const splitedCard = creditCardNumber.split("");
  const everySecondNum = splitedCard.filter((number, index) => index % 2 == 0);
  console.log(everySecondNum);
}
checkSum();
const creditCardNumber = parseInt(prompt("Credit Card Number:"));
