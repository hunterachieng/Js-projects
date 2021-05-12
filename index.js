//initiating the count
let count = 0;

//calling the buttons and counter
const counter = document.querySelector("#counter-values");
const buttons = document.querySelectorAll(".btn");


buttons.forEach((button)=>{
    //iterating through the selected buttons
    button.addEventListener("click", function(items){
    //adding an event listener to each button
        const values = items.currentTarget.classList;
     if(values.contains("decrease")){
         count --;
     }
     else if(values.contains("increase")){
         count++;
     }
     else{
         count=0;
     }
     if(count >0 ){
         counter.style.color="green";
     }
     if(count < 0){
         counter.style.color = "red";
     }
     if(count === 0){
         counter.style.color = "black"
     }
     counter.textContent = count;
    })
})