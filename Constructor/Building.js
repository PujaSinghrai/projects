
/// class is the template , plan , blue print etc to construct object.///

class building{
    cost = 300000 
}
console.log(new building);

//// class number -properties and methods
//// variable and function//
 class bank{
     mainBal =500
     name= "pushpa"

 }
  console.log(new bank());

//// using this in class///

class dal{
    constructor(name, color){
        this.name="riya";
        this.color=5;
    
    }
}
console.log(new dal());

let c1=new bank("customer");
let c2=new dal("name")
console.log(c1);
console.log(c2);
////
class school{
    name_student="ravi, rahul ";
    constructor(a){
           first_room=a
    }
    get balance(){
        console.log("good children");
    }
}
lat c3 =new 