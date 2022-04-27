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


// Task 11
// const entries = [];
// entries.push('a');
// entries.push('b', 'c');
// console.log(entries.pop());             //c
// console.log(entries.push('L'));         //4

// Task 12
// const entries = ['a', 1, true];
// console.log(entries instanceof Array);   //true

// Task 13
// const priority = new Set(['High', 'Low']);
// function logSetElements(key, value, set) {
// 	console.log(`s[${key}] = ${value}`);
// }
// priority.forEach(logSetElements);
//Result:     s[High] = High           s[Low] = Low


// Task 14
// const ids = new Set([1, '1']);
// console.log(ids.size);     //2


// Task 15
// const entries = ['a', 'b', 'c'];
// entries.length = 10;
// console.log(entries.length);     //  10
//console.log(entries);             // ['a', 'b', 'c', empty × 7]

// Task 16
// const priority = [1, 2, 3];
// const priority100 = Array.from(
// 	priority,
// 	function(p) {
// 		return p*10 + this.adjustment;
// 	},                                    // это функция сопоставления
// 	{ adjustment: 100 }                   // context for function
// );
// console.log(priority100);              Result:  [110, 120, 130]

// Task 17
// const ratings = [1, 2, 3, 4, 5];
// const result = ratings.reduce((start, next, index, array) =>
// 	start * next );
// console.log(result);                        //120

// Task 18
// const priority = [,,];
// for (const item of priority) {
// 	console.log(item);
// }                                  //undefined    undefined


// Task 19
// const entries = ['a', 'b', 'c'];
// const newEntries =
// 	entries.concat(['d', 'e', 'f'], 'g', 'h');
// console.log(newEntries.length);                  //8

// Task 20
// const priority = ['Low', 'Normal', 'High'];
// // … - rest operator
// const [low, ...remaining] = priority;
// console.log(remaining);                           //['Normal', 'High']

// Task 21
// let task = { isDone: false };
// console.log( Object.prototype.isPrototypeOf(task) );   // true

// Task 22
// let task1 = { id: 1 };
// let task2 = { id: 2, priority: 100 };
// let target = {};
// Object.assign(target, task1, task2);
// console.log(target);                              //{ id: 2, priority: 100 }

// Task 23
// 'use strict';        -строгий режим
// let task = { id: 1 };
// Object.freeze(task);
// task.id = 2;
// task.action = 'Create';
// Object.defineProperty(task, 'priority', {value: 'High'})
// console.log(task);
//строгий режим: ошибка на 286 строке
// нестрогий режим: ошибка на 288 строке, так как используется системный метод
