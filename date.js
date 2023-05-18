const d = new Date();
// DATE METHODS
console.log(d);
// new Date(date string)
// const d =new Date("September 23,1997 10:30:00");
// const d = new Date("2022-03-25");

// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)

// 6 numbers specify year, month, day, hour, minute, second:
// const d = new Date(2018, 11, 24, 10, 33, 30);
// console.log(d);
console.log(d.toDateString());
console.log(d.toTimeString());
console.log(d.toLocaleDateString());
console.log(d.toLocaleTimeString());
console.log(d.toLocaleString());
console.log(d.toUTCString());
// ===========================================================================
// ===========================================================================

// DATE GET METHODS


// getFullYear()	Get year as a four digit number (yyyy)
// console.log(d.getFullYear());

// getMonth()	Get month as a number (0-11)
// console.log(d.getMonth());

// getDate()	Get day as a number (1-31)
// console.log(d.getDate());

// getDay()	Get weekday as a number (0-6)
// console.log(d.getDay());

// getHours()	Get hour (0-23)
// console.log(d.getHours());

// getMinutes()	Get minute (0-59)
// console.log(d.getMinutes());

// getSeconds()	Get second (0-59)
// console.log(d.getSeconds());

// getMilliseconds()	Get millisecond (0-999)
// console.log(d.getMilliseconds());

// getTime()	Get time (milliseconds since January 1, 1970)
// console.log(d.getTime());

// Date.now() returns the number of milliseconds since January 1, 1970.
// let date=Date.now();
// console.log(date);


// ===========================================================================
// ===========================================================================

// DATE SET METHODS


// setDate()	Set the day as a number (1-31)
// d.setDate(1);
// console.log(d.toDateString());

// setFullYear()	Set the year (optionally month and day)
// d.setFullYear(1997);
// console.log(d.toDateString());

// setHours()	Set the hour (0-23)
// d.setHours(4);
// console.log(d.toTimeString());

// setMilliseconds()	Set the milliseconds (0-999)
// d.setMilliseconds(2000);
// console.log(d.toTimeString());

// setMinutes()	Set the minutes (0-59)
// d.setMinutes(15);
// console.log(d.toTimeString());

// setMonth()	Set the month (0-11)
// d.setMonth(9);
// console.log(d.toDateString());

// setSeconds()	Set the seconds (0-59)
// d.setSeconds(25)
// console.log(d.toTimeString());

// COMPARE DATES

// let text;
// const today = new Date();
// const someday = new Date();
// someday.setFullYear(1997, 8, 23);

// if (someday > today) {
//   text = "Today is before January 14, 1900.";
// } else {
//   text = "Today is after January 14, 1900.";
// }

// console.log(text);



