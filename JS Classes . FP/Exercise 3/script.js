let array = [{name: "Michael", surname: "Torry", age: 25}, 
    {name: "Mark", surname: "Spice", age: 30}, 
    {name: "Laura", surname: "Kendall", age: 27}, 
    {name: "Dorothy", surname: "Paulsen", age: 42}, 
    {name:"Cara", surname: "Salmons", age: 53}, 
    {name: "Gary", surname:"Miller", age: 68}];

let newArray = array.map(el => `${el.name} ${el.surname}`);

console.log(newArray);

let found = array.find(el => el.name === "Dorothy");

console.log(found);