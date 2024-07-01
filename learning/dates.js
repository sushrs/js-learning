let myDate = new Date();
//console.log(myDate.toString()); output:  Mon Jul 01 2024 04:11:53 GMT+0000
//console.log(myDate.toDateString); output:  [Function: toDateString]
//console.log(myDate.toISOString()); output:  2024-07-01T04:14:10.548Z
//console.log(myDate.toJSON); output:  [Function: toJSON]
//console.log(myDate.toLocaleString()); output: 7/1/2024, 4:17:35 AM

//console.log(typeof myDate); // obj
let myNewDate = new Date(2024, 0, 24);
//console.log(myNewDate.toDateString()); // Wed Jan 24 2024
let myDate2 = new Date(2024, 0, 24, 10, 5);
//console.log(myDate2.toLocaleString()); // 1/24/2024, 10:05:00 AM

//  let myDate3 = new Date('04-14-2023');
// console.log(myDate3.getTime()); 

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);


let newDate = new Date();
console.log(newDate);