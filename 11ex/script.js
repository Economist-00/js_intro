'use strict';


// gets min and max 
// returns null for empty inputs 
// returns the input itself when the input is just a single number 

const findMinMax = (numbers) => {
  let minNum = numbers[0];
  let maxNum = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < minNum) {
      minNum = numbers[i];
    }
    if (numbers[i] > maxNum) {
      maxNum = numbers[i];
    }
  }
  if (!minNum && !maxNum) {
    minNum = null;
    maxNum = null;
  }
  const result = `min: ${minNum} max: ${maxNum}`;
  return result;
}

console.log(findMinMax([1, 0, 2]));
console.log(findMinMax([]));
console.log(findMinMax([1]));

// returns object that maps string to counts

const counter = (strings) => {
  const result = {};
  
  for (let i = 0; i < strings.length; i++) {
    if (result[strings[i]]) {
      result[strings[i]] += 1;
    } else {
      result[strings[i]] = 1;
    }
  }
  
  return result;
}

console.log(counter(['a', 'a', 'b', 'c']));


const findIndex = (list, word) => {
  let result = -1;
  for (let i = 0; i < list.length; i++) {
    if (list[i] === word) {
      result = i;
      break;
    }
  }
  return result;
}

console.log(findIndex(['abc', 'def', 'abc', 'def'],'de'));

const foods = ['egg', 'apple', 'egg', 'egg', 'ham']

const removeEgg = (foods) => {
  const result = [];
  let eggsRemoved = 0;
  for (let i = foods.length - 1; i > -1; i--) {
    if (foods[i] === 'egg' && eggsRemoved < 2) {
      eggsRemoved++
    } else {
      result.push(foods[i]);
    }
    
  }
  result.reverse();
  return result;
}

console.log(removeEgg(foods));
console.log(foods);


const FizzBuzz = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 == 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

FizzBuzz(20);


const unique = (list) => {
  const result = [];
  
  for (let i = 0; i < list.length; i++) {
    if (findIndex(result, list[i]) === -1) {
      result.push(list[i]);
    }
  }
  return result;
}

console.log(unique(['green', 'red', 'green', 'red']));