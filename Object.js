/*// create an object?

let employee={
    name:"pushpa"

    }
    console.log(employee);

    /// This code assigns many values (Fiat, 500, white) to a variable named car:

    var car = {type:"Fiat", model:"500", color:"white"};
    console.log(car);

///// objects are containers for named values called properties or methods.?
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

console.log(person);
*/

////
let person={firstName:"John",
 lastName:"Doe",

 fun: function(){
     return this.firstName +" " + this.lastName;
 }
};
console.log(person.fun());
console.log(person.fun);
console.log(person.this);


