function checkFraud(){

let amount = document.getElementById("amount").value;
let location = document.getElementById("location").value;
let device = document.getElementById("device").value;
let time = document.getElementById("time").value;
let transactions = document.getElementById("transactions").value;

let result = document.getElementById("result");

/* simple fraud rules */

if(amount > 5000 && transactions > 8){
result.innerHTML = "⚠️ Fraud Transaction Detected";
result.style.color = "red";
}

else if(location == 3 && device == 2){
result.innerHTML = "⚠️ Suspicious Transaction";
result.style.color = "orange";
}

else{
result.innerHTML = "✅ Legitimate Transaction";
result.style.color = "green";
}

}