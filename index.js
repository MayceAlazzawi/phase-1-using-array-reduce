
// Code your solution here
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
let totalBatteries = batteryBatches.reduce(myFunc);

function myFunc(a, b) {
  return a + b;
}

console.log(totalBatteries)




