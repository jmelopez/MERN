const arr = [1,2,3,4]; //const array/objects can still be changed 
arr.push(5);
Object.freeze(arr); //prevents array/object changes completely
// arr.push(6);
console.log(arr)

// const groceryList = Object.freeze([
//     { "item": "carrots",           "haveIngredient": false },
//     { "item": "onions",            "haveIngredient": true  },
//     { "item": "celery",            "haveIngredient": false },
//     { "item": "cremini mushrooms", "haveIngredient": false },
//     { "item": "butter",            "haveIngredient": true  }
// ]);  

// const needThyme = [ ...groceryList, { "item": "thyme", "haveIngredient": false } ];
// const gotTheThyme = [ ...needThyme.slice(0, 5), { ...needThyme[5], "haveIngredient": true } ];



// const sortedList = [...groceryList].sort( (a, b) => (a.item > b.item) ? 1:-1);
// console.log(sortedList)

const values = [1, 2, 3, 4, 5];
const cubes = values.map( val => val**3 );

const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const groceryList = groceries.map( item => `<li>${item}</li>` );

console.log(groceryList);
console.log(cubes);