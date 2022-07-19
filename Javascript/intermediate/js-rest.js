//*나머지 매개 변수
function showName(name) {
  console.log(name);
}

showName("Mike"); // "Mike"

//*arguments
//함수로 넘어온 모든 인수에 접근
//함수 내에서 이용 가능한 지역 변수
//length, index존재
//Array형태의 객체
//배열의 내장 메서드는 없음
//!화살표 함수에는 없음

//?arguments사용 예시
function argTest(args) {
  console.log(arguments.length);
  console.log(arguments[0]);
  console.log(arguments[1]);
}

argTest("Mike", "Tom"); // Mike, Tom

function restTest(...names) {
  console.log(names);
}

//예제1
//...numbers는 배열 → 배열 메소드 사용 가능
//인수에 아무것도 안 넣을 시 빈배열 리턴
function add(...numbers) {
  let result = 0;
  numbers.forEach((num) => (result += num));
}
add(1, 2, 3);
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//예제2
//!나머지 매개변수는 맨 마지막에 위치해야 함
function User(name, age, ...skills) {
  this.name = name;
  this.age = age;
  this.skills = skills;
}

const user1 = new User("Mike", 30, "html", "css");
