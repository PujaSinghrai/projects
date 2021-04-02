// writing a program to check number is divisible by 7 or not


let x=70;

if(x%7==0){
    console.log("x is divisible by 7");
}else{
    console.log("x is not divisible by 7");
}


// // writing a program to check number is multible by 3 or not

let a =30;

if(a % 3 == 0){
    console.log("a is a multiple of 3");
}else{
    console.log("a is not amultiple of 3");
}

// // //WAP to check a number is possitive or not?

let b = 2;
    

    if (b=>0) {
        console.log("b number is possitiv");
    } else {
        console.log("b munber is  not possitive ");
    }



///// wap to check munber is 3 digit  number or not ?



    let number = 123;
    let newNumber = number.toString();
    newNumber.length == 3 ? console.log("3 digit number") : console.log("not 3 digit number")
   
   
    ///// WAP  to check a munber is having 4 at unit's place or not?
    
    
    let nunber=2543
    let X = nunber.toString()
    X.slice(x.length-1)==4 ? console.log("units place  is 4"): console.log("unit place is not 4") ;

    ////WAP to print even or odd for given number?

    let xy=46
     xy % 2 ==0 ? console.log("even number"): console.log("odd number");

     // 7.write a program to print gratest number in given two numbers

     let ab =76
     let cd= 55
     ab>cd  ? console.log("ab"): console.log("cd");

     // 8.write a program to print least number in given two numbers?

     let mum=67
     let num =55
     mum<num ?  console.log(" mum"): console.log("num");

     // 9.write a program to print the greatest number in given 3 numbers

     let firstNumber = 66;
 let secondNumber = 55;
 let thirdNumber = 22;
 if(firstNumber > secondNumber && firstNumber > thirdNumber){
     console.log(firstNumber)
     }else if(secondNumber > firstNumber && secondNumber > thirdNumber){
         console.log(secondNumber)
     }else{
         console.log(thirdNumber)
     }

     // 10.write a program to print the least number in given 3 numbers

 let M = 6;
 let N = 55;
 let O = 22;
 if(M< N && M< O){
     console.log(M)
     }else if(N < M && N < O){
         console.log(N)
     }else{
         console.log(O)
     }


// 11.write a program to print 3 numbers in asending order

let S =[56,98,105]; 
S.sort((a, b) => a - b);
 console.log(S);


// 12.write a program to print 3 numbers in descending order

 let P =[56,98,105];
 P.sort((a, b) => b - a);
 console.log(P);

 