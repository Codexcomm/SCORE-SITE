
let english = Number(prompt("Pls Enter Your English Score"))
let math = Number(prompt("Pls Enter Your Math Score"))
let computer = Number(prompt("Pls Enter Your Computer Score"))

let total = english + math + computer
let average = total / 3
alert("Your Average Score Is " + average.toFixed(1))

if(average >= 90){
    alert("Excellent! 💪")
}
else if(average >= 80){
    alert("Very Good")
}
else if(average >= 70){
    alert("Good")
}
else if(average >= 60){
    alert("Fair")
}
else if(average >= 50){
    alert("Pass")
}
else{
    alert("Failed")
}