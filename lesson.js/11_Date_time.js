//================Date==============//

let doomsDay = new Date()
console.log(doomsDay.toString());
console.log(doomsDay.toDateString());
console.log(doomsDay.toLocaleString());
console.log(typeof doomsDay);// object

let myCreatedDate = new Date(2020,3,12)
console.log(myCreatedDate.toDateString());

// alternatives 

let myCreatedDate02 = new Date(2020,3,12 ,5,3)// time included
console.log(myCreatedDate02.toDateString());

let myCreatedDate03 = new Date("2024-08-29")//yy-mm-dd
console.log(myCreatedDate03.toDateString());

let myCreatedDate04 = new Date("08-29-2024")//mm-dd-yy
console.log(myCreatedDate04.toDateString());

//time stamps

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date,now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth());

newDate.toLocaleString('default', {
    weekday: "long"

}) 



