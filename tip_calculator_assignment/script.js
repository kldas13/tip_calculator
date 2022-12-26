// console.log(bill_value);

let bill_value;
let percent;
let people;
let tip_amount;

let tip_result;

let total_amount;

function bill() {
  bill_value = parseInt(document.getElementById("bill").value);
  console.log(bill_value);
}

function five() {
  //   let percent = document.getElementById("five").value;
  percent = 5;
  console.log(percent);
}

function ten() {
  //   let percent = document.getElementById("ten").value;
  percent = 10;
  console.log(percent);
}

function fifteen() {
  //   let percent = document.getElementById("fifteen").value;
  percent = 15;
  console.log(percent);
}

function twenty_five() {
  //   let percent = document.getElementById("twenty_five").value;
  percent = 25;
  console.log(percent);
}

function fifty() {
  //   let percent = document.getElementById("fifty").value;
  percent = 50;
  console.log(percent);
}

function custom() {
  percent = parseInt(document.getElementById("custom").value);
  console.log(percent);
}

function left() {
  people = parseInt(document.getElementById("people").value);
  console.log(people);
  get_tip();
}

function get_tip() {
  tip_amount = (bill_value * (percent / 100)) / people;
  //   console.log(tip_amount);
  //   tip_result = parseInt(document.getElementById('tip_result'));
  //     tip_result=tip_amount;
  //     console.log(tip_result);
  total_amount = bill_value + tip_amount;
  dummy();
}

function dummy () {
    document.getElementById('demo').innerHTML = tip_amount;
    document.getElementById('demo1').innerHTML = total_amount;
}