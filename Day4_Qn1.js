var obj1 = { "name": "Person 1", "age":5 };
var obj2 = { "age":5, "name": "Person 1" };


let ordered1 = Object.keys(obj1).sort().reduce(
    (obj, key) => { 
      obj[key] = obj1[key]; 
      return obj;
    }, 
    {}
  );
  
let ordered2 = Object.keys(obj2).sort().reduce(
    (obj, key) => { 
      obj[key] = obj2[key]; 
      return obj;
    }, 
    {}
  );

if (JSON.stringify(ordered1) === JSON.stringify(ordered2)) {
    console.log("Same Properties")
}

else {
    console.log("Not the same properties")
}