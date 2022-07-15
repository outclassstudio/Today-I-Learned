// tdz : temporal dead zone
// 변수
// 1. 선언
// 2. 초기화
// 3. 할당
//함수스코프(var) : 함수의 스코프만 인정 vs 블록스코프(let const) : 다른 스코프도 인정

//객체 리터럴
let user = {
  name: "mike",
  age: "18",
};

//생성자 함수
function User(name, age) {
  //this = {} <- 암묵적으로 선언되어 있음
  this.name = name;
  this.age = age;
  this.sayName = function () {
    console.log(`제 이름은 ${this.name}입니다.`);
  };
  // return this <- 암묵적으로 선언되어 있음
}

let user1 = new User("test", 20);
console.log(user1); // { name : 'test, age : 20}
user1.sayName(); // 제 이름은 test입니다.

//computed property
let a = "age";

//객체의 키에 변수나 식 등 할당 가능
const c_user = {
  name: "Mike",
  [a]: 15,
  [1 + 4]: 5,
  ["안녕" + "하세요"]: "hi",
};

//Object.assign() 새로운 객체로 복사
//변수에 객체를 할당할 경우 참조값이 복사됨
const newUser = Object.assign({}, user);

const info1 = {
  age: 30,
};
const info2 = {
  gender: "male",
};

const newUser2 = Object.assign({ name: "hi" }, info1, info2);
