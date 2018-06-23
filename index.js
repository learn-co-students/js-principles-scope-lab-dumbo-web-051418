// Write your solution in this file!
var customerName = "bob";
const leastFavoriteCustomer = "peter";

function upperCaseCustomerName(){
  customerName = customerName.toUpperCase();
}

function setBestCustomer(){
  bestCustomer = "not bob";
  return bestCustomer;
}

function overwriteBestCustomer(name){
  bestCustomer = name;
  return bestCustomer;
}

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = "Joseph";
}
