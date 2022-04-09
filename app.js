const player = {
  name: "gg",
  points: 10,
  fat: false,
};

console.log(player.name);
console.log(player["points"]);
console.log(player);

player.fat = true;
console.log(player);

player.lastName = "g";
console.log(player);

player.points = player.points + 15;
console.log(player);
