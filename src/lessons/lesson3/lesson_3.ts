console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

// let pr = new Promise((resolve, reject) => {
//     // let a = 10;
//     // console.log(a);
//     // some request
//     setTimeout((response) => {
//         if (response.status === 200) {
//             resolve(response.value);
//         } else {
//             reject(response.error);
//         }
//     }, 100, { status: 200, value: 10, error: null });
// });
//
// pr.then( res => {
//     console.log(res);
//     //console.log('pr ', pr);
//     return new Promise((resolve, reject) => {
//         // res
//         setTimeout((response) => {
//             if (response.status === 200) {
//                 resolve(response.value);
//             } else {
//                 reject(response.error);
//             }
//         }, 100, { status: 200, value: 500, error: null });
//     })
// }).then(res2 => {
//     console.log(res2);
//     return new Promise((resolve, reject) => {
//         // res2
//         setTimeout((response) => {
//             if (response.status === 200) {
//                 resolve(response.value);
//             } else {
//                 reject(response.error);
//             }
//         }, 100, { status: 200, value: 100500, error: null });
//     })
// }).then(res3 => {
//     console.log(res3);
// })

// let pr = Promise.resolve(10);
//
// pr
//     .then( res => {
//         console.log(res);
//         return res * 2;
//     })
//     .then( res2 => {
//         console.log(res2);
//     })
//     .then( res3 => {
//         console.log(res3);
//     })

// function createRequest(url: string, param: any) {
//     return fetch(url, { param }); // return new promise obj
// }

// let pr = Promise.resolve(10);
//
// pr
//     .then( res => {
//         return createRequest('some URL', res);
//     })
//     .then( res2 => {
//         return createRequest('some URL 2', res2);
//     })
//     .then( res3 => {
//         console.log(res3);
//     })
// let pr = Promise.reject(0);
//
// pr
//     .then( res => {
//         console.log(res);
//     }, err => {
//         console.log(err);
//         return 100500;
//     })
//     .then(res2 => {
//         console.log(res2);
//     }, err2 => {
//         console.log(err2);
//         return 100500;
//     })
//     .then(res3 => {
//         console.log(res3);
//     }, err3 => {
//         console.log(err3);
//         return 100500;
//     })
//     .then( null, err4 => {
//         console.log(err4);
//     })

// let pr = Promise.reject(0);

// pr
//     .then( res => {
//         console.log(res);
//     }, err => {
//         console.log(err);
//         throw 5000;
//         return 100500;
//     })
//     .then(res2 => {
//         console.log(res2);
//     }, err2 => {
//         console.log('err2 ', err2);
//     })
//     .then(null, err3 => {
//         console.log(err3);
//     })
//     .catch(err => {
//         console.log(err);
//     })

// pr
//     .catch(err => {
//         console.log(err);
//     })
//     .then( res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.log(err);
//     })
//     .then(res2 => {
//         console.log(res2);
//     })
//     .catch(err => {
//         console.log(err);
//     })






// just a plug
export default ()=>{};