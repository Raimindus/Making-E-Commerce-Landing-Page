let array = [
  100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000
];
let value = [500000, 700000];
var lowEnd = value[0];
var highEnd = value[1];
var filtered = array.filter(checkNumber);

function checkNumber(h) {
  return h >= lowEnd && h <= highEnd;
}

console.log(filtered);
