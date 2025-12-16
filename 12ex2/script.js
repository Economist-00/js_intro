'use strict';


const multiply = (n1, n2) => n1 * n2;

console.log(multiply(2, 3));

const countPositive = (nums) => {
  let result = 0;
  nums.forEach(num => {
    if (num > 0) {
      result++;
    }
  });
  return result;
}

console.log(countPositive([1, -3, 5]));

const addNum = (array, num) => {
  return array.map(n => n + num);
}

console.log(addNum([1, 2, 3], 2));


const removeEgg = (foods) => {
  let counter = 0;
  return foods.filter(food => 
    {if (food === 'egg') {
      counter++;
      return counter > 2;
    } 
    return true; 
  }
  );
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));

