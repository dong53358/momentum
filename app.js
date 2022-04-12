const age = parseInt(prompt("How old are you?"));

if (isNaN(age)) {
  console.log("Please wtite a number");
} else if (age < 18) {
  console.log("You are too young");
} else if (age >= 18 && age <= 50) {
  console.log("You can drink, soju");
} else {
  console.log("You don't drink soju");
}
