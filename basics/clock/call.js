class User {
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
}
const chai = new User("chai","xwdsaurabh@gmail.com","1234567890")

console.log(chai.encryptPassword());
 m 