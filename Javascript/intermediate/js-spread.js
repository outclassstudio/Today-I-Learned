//*전개구문
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let result = [...arr1, ...arr2];
let concat = [...arr2, ...arr1]; // [4,5,6,1,2,3]

let user = { name: "Mike", age: 30 };
let user2 = { ...user };

//예제
let userName = { name: "Thor" };
let info = { age: 30 };
let fe = ["JS", "React"];
let lang = ["Korean", "English"];

//?Object.assign이용
let objAssignUser = Object.assign({}, userName, info, { skills: [] });
fe.forEach((el) => objAssignUser.skills.push(el));
lang.forEach((el) => objAssignUser.skills.push(el));

//?Spread Sytax이용
let spreadUser = { ...userName, ...info, skills: [...fe, ...lang] };
