// Question 1

let obj1 = {
    name: "Fatima",
    age: 28
};

let obj2 = {
    age: 28,
    name: "Fatima"
};

//Comparing 2 JSON using Lodash _isEqual()

console.log("Do the 2 objects have same properties : " +_.isEqual(obj1,obj2));

// O/P: Do the 2 objects have same properties : true

// Note:  Lodash _isEqual() returns true if the properties are same even if they are not in order.

// Comparing using JSON.Stringify and "==="
console.log(JSON.stringify(obj1) === JSON.stringify(obj2));

// O/P: false