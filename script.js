/// WAP to print 1to 10 using a while loop

let i =1
while(i<=10){
    console.log(i);
    i= i+1
}

// WAP to print 5 to 15 using a for loop


for( var p=5; p<=15; p=p+1){
    console.log(p);
}


//WAP to print 10 to 1 using a while loop

let j=10
while(j>1){
console.log(j);
   j= j-1

}

//wap to print 15 to 10 using a for loop

for(var k=15; k>=10; k=k-1){
    console.log(k);
}

// WAP to print 1 to  10 even number using while loop

let v = 0
while(v<=10){
    console.log(v);
     v= v+2
}

// WAP to print 1 to 10 odd number using for loop

for(let s=0; s<=10;s=s+3){
    console.log(s);
}

///WAP first ten multipies of 4 using while loop?

let z =0
let u = 4
while(z<10){
    console.log(z*u);
    z++
}



//multiple of 4 are 4, 8,12,16

let q =0
let d =4
while (q < 4){
console.log(d*q);
q++;
}


// WAP TO PRINIT MULTIPICATION TABLE OF 6  USING WHILE LOOP

var w = 0
var s  = 6
while ( w<=10) {
  console.log(s*w);
  w++

}



// wap to factores of 24 using while loop


 var l = 0;
 
 while (l<=24){
    
     l++;
     24%l ==0? console.log(l):null;

 } 



//write a program to print reverse digits of numbers


var numbers =[2,5,8,9];
var newNumber=numbers.reverse();
console.log(newNumber);


// 12.write a program to read 5 number and print only even numbers

var number = [2,5,8,7,9,6,3,4];

var newNumber = number.slice(0,5);

newNumber.filter(newNumber=> (newNumber%2 == 0 ? console.log(newNumber): null))



// 13.fibinochi serice
 
var fib=function(n){
    if (n===1){
        return[0,1];
    } else {
        var arr= fib(n-1);
        arr.push(arr[arr.length-1]+arr[arr.length-2]);
        return arr;
    
    }
};
console.log(n)










///WAP TO Check a given number is Armstrong number or not

let num = 153 
let one = num%10 ; 



