function sayHi(name = "anonymous") {
  return "Hi " + name
}

console.log(sayHi()) // 인자를 입력하지 않으면 anonymous가 기본값으로 들어가게 됨

//* 응용
//? 인자에 변수 넣을 수 있음, string 아닌 것도 가능
const DEFAULT = "Abcd"
const sayHello = (name = DEFAULT) => "Hello " + name
console.log(sayHello()) 