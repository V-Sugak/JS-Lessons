console.log('Lesson 7');

// __Proto__
// https://learn.javascript.ru/prototype-inheritance
// https://habr.com/ru/post/518360/
// https://learn.javascript.ru/native-prototypes

// Prototype
// https://learn.javascript.ru/function-prototype
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype


// https://www.youtube.com/watch?v=aQkgUUmUJy4&t=21s
// https://www.youtube.com/watch?v=b55hiUlhAzI


// https://developer.mozilla.org/ru/docs/Learn/JavaScript/Objects/Object_prototypes

//learn.javascript 4.4  toString, valueOf

// console.dir(function () {})
// console.dir(Function)
// console.dir(Object)
// console.dir(() => {})
// console.dir(class {})

// function f() {
//
// }
//
// console.log(typeof f.prototype)

// console.dir(Array);
// console.log([]);

// const arrayPrototypeObj = Object.getPrototypeOf([]);
//
// console.log(Array.prototype === arrayPrototypeObj)
// // @ts-ignore
// console.log(Array.prototype === [].__proto__)

// const obj = { name: 'Yo'};
// console.log(obj)
// // @ts-ignore
// console.log(obj.__proto__)

// class Test {
//     constructor(public name: string) {
//     }
//
//     getName() {
//         return this.name;
//     }
// }
//
// // @ts-ignore
// Test.prototype.sayHi = function () {};
//
// let obj = new Test('Bla');
// console.dir(Test);
// console.log(obj)
//
// // @ts-ignore
// obj.__proto__.someFunc = function (){};
// let obj2 = new Test('Yo');
// console.log(obj2)


// class Test {
//     constructor(public name: string) {
//     }
//
//     getName() {
//         return this.name;
//     }
// }
//
// let obj = new Test('Bla');
// const objPrototype = Object.getPrototypeOf(obj);
// objPrototype.setSomeProperty = function () {};
// let obj2 = new Test('Yo');
// console.log(obj2)



// class Test {
//     constructor(public name: string) {
//     }
//
//     getName() {
//         return this.name;
//     }
// }

//Test.prototype = { yo: function (){} }
// @ts-ignore
// Test.prototype.yo = function () {};
//
// let obj = new Test('Bla');
// //let objPrototype = Object.getPrototypeOf(obj);
// // objPrototype = { f: function () {}};
// // console.log(obj)
//
// // @ts-ignore
// // obj.__proto__ = { f: function () {}};
// // console.log(obj)
//
// let objPrototype = Object.getPrototypeOf(obj);
// delete objPrototype.getName;
// objPrototype.hhhhh = 10;
//
// let obj2 = new Test('Yo');
// console.log(obj2)

// class Test {
//     constructor(public name: string) {
//     }
//
//     getName() {
//         return this.name;
//     }
// }
//
// class SuperTest extends Test {
//     constructor(name: string) {
//         super(name);
//     }
//     getName() {
//         return '';
//     }
// }
//
// let obj = new SuperTest('Yo');
//
//
// // @ts-ignore
// //obj.__proto__.__proto__.getName = 50;
// const objParentPrototype = Object.getPrototypeOf(Object.getPrototypeOf(obj));
// objParentPrototype.getName = 100;
//
// console.log(obj)


// function Test(name: string) {
//     // @ts-ignore
//     this.name = name;
// }
// // @ts-ignore
// Test.prototype = { constructor: Test, getName: function () {}, getName2: 50 };
//
// //Object.defineProperty(Test, 'prototype', {writable: false});
// Object.defineProperty(Test.prototype, 'getName2', {writable: false});
//
// Test.prototype = { f: function () {}};
//
// // @ts-ignore
// let obj = new Test('adsfsdf');
// console.log(obj)


//Task 01
// ?????????????????????? ?????????? Animal ?????????????? ?????????????????? name(???? ?????????????????? 'Animal') ?? ???????????????? ??????????????????, ?? ???????????????? ?????????? 3
// ???????????? walk, eat, sleep - ???????????? ?????????? ???????????? ???????????????? ?? ?????????????? ???????????? ?????? + ????????????????. ????????????:
// walk => `${this.name} walking`
// ??????????????????, ?????? ???????????? ????????????????


//Task 02
// ?????????????????????? ?????????? Monkey ???? ???????? ???????????? Animal,  ?????????????????????? ?????????????????? name(???? ?????????????????? 'Monkey') ?? ????????????????
// ??????????????????, ?????????????????????? ???????????? roar ?? climb ???????????????????? ???????????? Animal
// ??????????????????, ?????? ?????? ???????????? ????????????????


//Task 03
// ?????????????????????? ?????????? Human ???? ???????? ???????????? Monkey, ?????????????????????? ?????????????????? name(???? ?????????????????? 'Human') ?? ????????????????
// ??????????????????, ?????????????????????? ???????????? speak ?? think ???????????????????? ???????????? Animal
// ??????????????????, ?????? ?????? ???????????? ????????????????


// Task 04
// ?????????????????????? ?????????? 01-03 ?????????? ?????????????? ???????????????????????? ?? ?????????????????? JS ??????????, ?????????????????????? ????????????????????????


// Task 05
// ?????????????????? ?????????? Apply ?????????????????????? ???????? ?????????????????????? ?????????? bind


// just a plug
export default () => {};