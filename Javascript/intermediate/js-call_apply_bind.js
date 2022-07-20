//*call, apply, bind
//함수 호출 방식과 관계없이 this를 임의로 지정할 수 있음

//?call
const mike = { name: "Mike" };
const tom = { name: "Tom" };

function showThisName() {
  console.log(this.name);
}

showThisName(); // 현재 this가 window를 가리키기 때문에 undefined가 뜬다
showThisName.call(mike); // "Mike", ()안의 객체의 메소드 처럼 행동하게 할 수 있다
showThisName.call(tom); // "Tom"

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}

//this가 call의 첫번째 인자를 가리키게 만든다.
update.call(mike, 1999, "singer");
console.log(mike);

//?apply
//매개변수를 처리하는 방식을 제외하고 call과 완전히 같다.
//매개변수로 배열을 취한다
update.apply(tom, [2000, "student"]);
console.log(tom);

//call과 apply사용법 예시
const nums = [1, 2, 3, 4, 5];
const maxNums = Math.max.call(null, ...nums);
const minNums = Math.min.apply(null, nums);

//?bind
//함수의 this를 영구히 바꿀 수 있다
//새로운 함수를 생성한다
const Thor = { name: "Thor" };
const updateMike = update.bind(Thor);
updateMike(500, "백수");
console.log(Thor);

//예제
const newUser = {
  name: "Steve",
  showName: function () {
    console.log(`This is ${this.name}`);
  },
};

newUser.showName(); // This is Steve
const fn = newUser.showName();
fn(); // This is -> 함수만 남고 this를 잃어버림

fn.call(newUser);
fn.apply(newUser);
//This is Steve, 같은 결과 적용됨

let bindFn = fn.bind(newUser);
bindFn(); // This is Steve, 이전에는 this를 잃어버렸지만, 여기에서는 this를 잃지 않는다
