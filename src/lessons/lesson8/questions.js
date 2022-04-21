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

