const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

console.log("\n");

// Write a for loop that prints out the contents of ingredients:
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
console.log("\n");

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let i = 1; i <= ingredients.length; i++) {
  console.log(ingredients[ingredients.length-i]);
}

console.log("\n");
//another solution using while loop
let j = ingredients.length - 1;
 while (j >= 0) {
   console.log(ingredients[j]);
   j--;
 }