//*구조분해할당
//배열
let [x, y] = [1, 2];
console.log(x); // 1
console.log(y); // 2

let str = "Mike-Tom-Jane";
let [user1, user2, user3] = str.split("-");

//?기본값 지정 가능
let [a = 3, b = 4, c = 5] = [1, 2];

//?일부 값 무시
let [item1, , item2] = ["가", "나", "다"]; // "나"무시

//?값 바꿔치기
let f = 1;
let g = 2;
[f, g] = [g, f];

//객체
let user = { name: "Mike", age: 30 };
let { name, age } = user;

//?이름 바꾸기가능
let { name: userName, age: userAge } = user;

//?기본값 주기
let movie = { title: "Thor", year: 2022 };
let { title, year, genre = "action" } = movie;
