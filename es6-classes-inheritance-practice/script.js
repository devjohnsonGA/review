class User {  //class name 
    constructor(username, password){ //blueprint builder
        this.username = username; //name 
        this.password = password; //password
    }
    changePassword(newPassword){ //ability to change password 
        this.password = newPassword; //new password
    }
}

class Admin extends User { //extends inherits user class
    constructor(username, password, accessLevel){ //what to build this class extension with
        super(username, password); //super sends up this info to parent class
        this.accessLevel = accessLevel; // additional attribute to be collected for this class
    }
    overridePassword(username, newPassword){ //allows admin to alter user passwords
        user.changePassword(newPassword);  //how admin can change users password
    }
}

let normalUser = new User('john', '123');
let superUser = new Admin('webmaster', 'woot', 100);
console.log(normalUser)
console.log(superUser)
