// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers(){
    return drivers.slice(0, 2);
}
function returnLastTwoDrivers(){
    return drivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
function createFareMultiplier(value){
   return function(){
    return value * value
   }
}
function fareDoubler(fare){
    return fare*2;
}
function fareTripler(fare){
    return fare*3;
}
function selectDifferentDrivers(array, fn){
    return fn(array)
}