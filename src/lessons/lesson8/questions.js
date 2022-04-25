//Task A
var a = 50

function f() {
    a = 100
    let b = 150
}

if (true) {
    a = 175
    let c = 200
    var d = 300
    const e = 400
}
f()
console.log(a)  //100
console.log(b)  //b is not defined
console.log(c)
console.log(d)
console.log(e)


//Task B

let a = 5
{
    a = 10
}
console.log(a)

function f2() {
    console.log(a)
    a = 20
    var b = 20
}

console.log(b)
f2()
console.log(a)
//10
//b is not defined


//Task C
{
    let c = 100
    var family = 'it-incubator'

    function f() {
        console.log(c)
    }
}
let doc = false
if (!doc) {
    function c() {
        console.log(family)
    }
}
f()
c()
console.log(family)
console.log(c)
//100
//'it-incubator'
//'it-incubator'
//c(){
//         console.log(family)
//     }


//Task 1

// let car1 = new Promise((_, reject) => setTimeout(reject, 2000, 'Car 1 crashed in'));
// let car2 = new Promise(resolve => setTimeout(resolve, 1500, 'Car 2 completed'));
// let car3 = new Promise(resolve => setTimeout(resolve, 3000, 'Car 3 completed'));
//
// Promise.race([car1, car2, car3])
// 	.then(value => {
// 		let result = `${value} the race.`;
//      console.log(result);
// 	})
// 	.catch(err => console.log('Race is cancelled.', err));


//Task 2
// console.log('Start');
// Promise.resolve('Success').then(console.log);
// console.log('End');
// 'Start'   'End'   'Success'


//Task 3
// setCurrentUrl();
// console.log('The current URL is: ' + url);
//
// function setCurrentUrl() {
// 	url = window.location.href;
// }
// инициализация url на глобальном уравне, т.к. происходит присвоение

//Task 4
// Какие ключи будут заполнены у pet1
// function Animal(size, type) {
// 	this.type = type || 'Animal';
// 	this.canTalk = false;
// }
// Animal.prototype.speak = function() {
// 	if (this.canTalk) {
// 		console.log('It spoke!');
// 	}
// }
//
// let Pet = function(size, type, name, owner) {
// 	Animal.call(this, size, type);
// 	this.size = size;
// 	this.name = name;
// 	this.owner = owner;
// }
//
// Pet.prototype = Object.create(Animal.prototype);
// let pet1 = new Pet();
//console.log(pet1)
// Result: {type:'Animal', canTalk: false, size: undefined,name:undefined, owner:undefined}, speak in prototype


//Task 5
// let array = [1,2,3,4,4,5,4,4];
// for (let i = 0; i < array.length; i++) {
// 	if (array[i] === 4){
// 		array.splice(i,1);
// 	}
// }
// console.log(array);            // [1,2,3,4,5,4]

//Task 5a
// function Monster(){};
// Monster.prototype.growl = () => console.log('Grr!');
//
// console.log(new Monster().growl === new Monster().growl);           // true

//Task 6
// let first = 'Who';
// let second = 'What';
// try {
// 	try {
// 		throw new Error('Sad trombone');
// 	} catch (err) {
// 		first = 'Why';
// 		throw err;
// 	} finally {
// 		second = 'When';
// 	}
// } catch (err) {
// 	second = 'Where';
// }
//
// console.log(first);            //Why
// console.log(second);           //Where

//Task 7
// setTimeout(() => console.log(1), 0);
// console.log(2);
// new Promise((resolve, reject) => {
// 	setTimeout(() => reject(console.log(3), 1000));
// }).catch(() => console.log(4));
// console.log(5);
// 2 5 1 3 4

//Task 8
let date = new Date(2020,05,10);
let dateDusplayOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};
let formattedDate = date.toLocaleDateString('en', dateDusplayOptions);
console.log(formattedDate);
// June 10, 2020


//Task 9
let objBook = {title: 'JavaScript',};
Object.preventExtensions(objBook);
let newObjBook = objBook;
newObjBook.author = 'Robert';

console.log(objBook);       // {title: 'JavaScript'}
console.log(newObjBook);   // {title: 'JavaScript'}

//Task 10
function getAvaliabilityMessage(item) {
    if (getAvailability(item)) {
        var msg = 'Username avaliable';
    }
    return msg;
}

function getAvailability(name) {
    return name === 'Eugene';
}
console.log('getAvaliabilityMessage ', getAvaliabilityMessage('newUserName'));  //undefined
