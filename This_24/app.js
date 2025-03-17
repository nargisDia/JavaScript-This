// JavaScript This

//'use strict';
//console.log(this);


var firstName = 'diya';


function myfunction() {
    return this;
}
//console.log(myfunction());


const myfunc = () => {
   // console.log(this);
}
myfunc();


// const mybtn = document.querySelector('button');
// mybtn.addEventListener('click', function () {
//     console.log(this);
// })

const mybtn = document.querySelector('button');
mybtn.addEventListener('click', function () {
   // console.log(this);
}) 
//let fName = 'Nargis';  
var fName = 'Nargis';
const student = {
    fName: 'diya',
    sInfo: function () {
       // console.log(`${student.fName} loves to read`); ;
        return `${this.fName} loves to read`;
    },
    arrowfunction: () => {
        return `${this.fName} loves to read`;
    },
};
console.log(student.sInfo());
student.fName = 'Mou';
console.log(student.sInfo());
console.log(student.arrowfunction());
  

/*
* Method 👉object
* function 👉 window / Global
*/



function newPhone() {
    let phone = 'Android';
    console.log(this.phone);
}
newPhone();

const game = {
    gName: 'NFS',
    gInfo: function () {
        console.log(` Love to play ${this.gName}`);
    },
};

const aGame = {
    gName: 'car Game',
};
const bindGame = game.gInfo.bind(aGame)
console.log(game.gInfo());
console.log(bindGame());