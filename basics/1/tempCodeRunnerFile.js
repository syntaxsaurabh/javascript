function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  return this;
}

const userOne = new User("saurabh", 13, true);
const userTwo = new User("hello", 13, true);

console.log(userOne.constructor); //keyword
console.log(userTwo);




//protype in js

//ye rukta hay at point of(array-->obejct-->null)
//same as string
//for function
function multi5(num) {
  return num * 5;
}
multi5.power = 2;
console.log(multi5(5));
console.log(multi5.power);
console.log(multi5.prototype);



//this

function createUser(username,score){
    this.username=username
    this.score=score;

}

createUser.prototype.incriment=function(){
    this.score++
}

createUser.prototype.printMe=function(){
    console.log(`price is ${this.score}`)
}
const chai=new createUser("chai",342)