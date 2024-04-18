const age = Number(prompt("Enter your age:"));
const movieType = prompt("Enter movie type (regular or 3D):");
const timeOfDay = prompt("Enter time of day (matinee or evening):");
let ticketPrice = 0;

e;
if (age < 10) {
  ticketPrice = 5;
} else if (age <= 65) {
  ticketPrice = 15;
} else {
  ticketPrice = 10;
}

if (movieType === "3D") {
  ticketPrice += 5;
}

if (timeOfDay === "evening") {
  ticketPrice += 5;
}

const hasDiscountTicket = confirm(
  "Do you have a discount ticket? (OK for Yes, Cancel for No)"
);
if (hasDiscountTicket) {
  const discount = Math.min(ticketPrice * 0.25, 5);
  ticketPrice -= discount;
}

console.log(`The price of the ticket for you is: ${ticketPrice} GEL.`);
