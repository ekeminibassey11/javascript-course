//printing numbers from 1 to 10
for(let a = 1; a <= 10; a++){
    console.log(a);
} 

//even numbers
for (let a = 2; a <=20; a += 2){
    console.log(a);
}


// countdown from 10 to 1
let count = 10;
while(count >= 1){
    console.log(count);
    count--;
}
console.log("Liftoff!");


//printing numbers 1 to 30
for(let a=1; a <= 30; a++){
    if(a%3===0 && a%5===0)
    { console.log("Fizzbuzz");}

    else if(a%3===0){
        console.log("Fizz");
    }

    else if(a%5===0){
        console.log("Buzz");
    }

    else{
        console.log(a);
    }
}