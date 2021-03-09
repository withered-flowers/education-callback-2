let arr = [3, 2, 4, 1, 5, 7, 6];

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// arr.forEach([forEachFunction])
// forEachFunction 
//   currentValue
//   index [optional]
//   array [optional]

arr.forEach(function forEachLooping(element, index) {
  console.log(index, element);
});

// atau bisa ditulis juga dengan cara seperti ini
function forEachLooping(element, index) {
  console.log(index, element)
};

arr.forEach(forEachLooping);