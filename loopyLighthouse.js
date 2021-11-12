let isMultipleOf3 = false;
let isMultipleOf4 = false;

for(let i = 100; i <= 200; i++) {
  isMultipleOf3 = i % 3 === 0;
  isMultipleOf4 = i % 4 === 0;

  if(isMultipleOf3 && isMultipleOf4) {
    console.log("LoopyLighthouse");
  }else if(isMultipleOf3) {
    console.log("Loopy");
  }else if(isMultipleOf4) {
    console.log("Lighthouse");
  }else {
    console.log(i);
  }
}