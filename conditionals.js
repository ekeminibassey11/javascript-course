// grade calculator
let score = 68;
let grade;

if (score >= 90) {
    grade = 'A';
} 

else if (score >=80) {
    grade = 'B';
}

else if (score >=70) {
    grade = 'C';
}

else if (score >=60) {
    grade = 'D';
}

else {
    grade = 'F';
}

console.log(grade);

// age check
let age = 12;

if(age>=18){
    console.log('You can vote');
}

else if(age>=16){
    console.log('You can drive');
}

else if(age<18 && age<16){
    console.log('You are too young to vote or drive');
}

// Leap year check
let year = 1900;

if(year%400===0){
    console.log('This is a leap year');
}

else if(year%100===0){
    console.log('This is not a leap year');
}

else if(year%4===0){
    console.log('This is a leap year');
}

/* starting with 400, 1900 is not a leap year because it is divisible by 100 and 4, but not by 400. 
starting with 4, 1900 is a leap year because it is divisible by 4 but not by 400. */