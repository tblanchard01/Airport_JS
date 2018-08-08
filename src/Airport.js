var fizzBuzz = function(){};

fizzBuzz.prototype.isDivisibleByThree = function(num){
    return (num % 3 === 0);
}; 

fizzBuzz.prototype.isDivisibleByFive = function(num){
    return (num % 5 === 0);
}; 

fizzBuzz.prototype.isDivisibleByFifteen = function(num){
    return (num % 15 === 0);
}; 

fizzBuzz.prototype.says = function(num) {
if(this.isDivisibleByFifteen(num)) {
return "FizzBuzz";}
if(this.isDivisibleByThree(num)){ 
    return "Fizz"; }
if(this.isDivisibleByFive(num)) {
    return "Buzz"
}

}; 
