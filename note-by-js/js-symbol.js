//*심볼(Symbol) : 유일성이 보장되는 타입
const symbolA = Symbol(); //?new를 붙이지 않는다
const symbolB = Symbol();

//symbolA === symbolB -> false
const id = Symbol("id"); //?설명 붙이기 가능
const id2 = Symbol("id"); //?설명이 같아도 다른 심볼

const s_user = {
  name: "mike",
  age: 30,
  [id]: "myid",
};

Object.keys(s_user); // [name, age] => 심볼 숨겨짐
for (let key in s_user) {
  console.log(key);
} // For in에서도 symbol은 숨겨짐

//?특정 객체에 원본을 건드리지 않고 속성을 추가 할 수 있음

//*Symbol.for() : 전역 심볼
//하나의 심볼만 보장받을 수 있음
//Symbol함수는 매번 다른 Symbol 값을 생성하지만
//Symbol for는 메소드는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유
const sf_id1 = Symbol.for("s_id");
const sf_id2 = Symbol.for("s_id");
id1 === id2; // true
Symbol.keyFor("sf_id1"); // s_id => 전역심볼만 사용 가능

Object.getOwnPropertySymbols(s_user); // symbol조회가능
