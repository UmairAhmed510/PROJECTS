var age;
age= prompt("enter your age");
console.log(age);
if(age<12){
    console.log("You are eligible for a Child Ticket.");
    alert("You are eligible for a Child Ticket.")
}
else if(age>12 && age <=17){
    console.log("You are eligible for a Teen Ticket");
    alert("You are eligible for a Teen Ticket")
}
else if(age>=18 && age <=64){
    console.log("You are eligible for an Adult Ticket.");
    alert("You are eligible for an Adult Ticket.")
}
else if(age >=65){
    console.log("You are eligible for a Senior Ticket.");
    alert("You are eligible for a Senior Ticket.")
}
