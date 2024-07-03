// object literal
const mySymb = Symbol("keys");
const User = {
    
    name:"ABC",
    age: 11,
    location: "Delhi",
    email: "sush.com",
    isLoggedIn: false,
   [mySymb]: "the are the keys",
    lastLogginDays: ["Monday", "Wednesday"]

}


// console.log(User.age);
// console.log(User["name"]);
// console.log(typeof mySymb);
User.email = "sush@googole.com"
// console.log(User);
// Object.freeze(User); // object is freezed
User.email = "sush@yahoo.com"
// console.log(User);

User.greeting1 = function(){
    console.log("Hello, Sush! how are you");
}


User.greeting2 = function(){
    console.log(`Hello, Sushillaaa how are you, ${this.name}`);
}
// console.log(User.greeting1());
// console.log(User.greeting2());



//const X = new Object() Singleton  obj
const x ={}

x.id= "2sush";
x.name= "sush";
x.isLoggedIn= false;

// console.log(x);

const activeUser = {

    email: "sush@gmail.com",
    fullname: {
        userFullName:{
            firstName: "sush",
            surname: "sush"
        }

    }
}
// console.log(activeUser.fullname.userFullName.firstName);

// object merging
const obj1 ={a:1, b:2}
const obj2 ={c:3, d:4}
// const obj = Object.assign({}, obj1, obj2)
const obj = {...obj1, ...obj2}
// console.log(obj);

const users = [
    {
        email: 'sush@gmail.com',
        id: 211,
    },
    {
        email: 'sush@gmail.com',
        id: 212,
    },
    ]

// users[1].email;
// console.log(x);
// console.log(Object.keys(x));
// console.log(Object.values(x));
// console.log(Object.entries(x));

// console.log(x.hasOwnProperty('isLoggedIn'));

const {email} = activeUser;
console.log(email);