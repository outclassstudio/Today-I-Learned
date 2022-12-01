//* Logical OR Assignment
let aname = prompt("이름이 뭐에요")

//일반적인 방법
if(!aname){
  aname = "anonymous"
}

//Logical OR Assignment
//? 변수가 falsy하면 값을 넣는다
aname ||= "anonymous"

console.log(`Hello ${aname}`)

//* Logical AND Assignment
const user = {
  username: "LMH",
  password:123,
  isAdmin: false
}

//일반적인 방법
if(user.password) {
  user.password = "[Secret]"
}

//Logical AND Assignment
//? 변수가 truthy하면 값을 넣는다
user.password &&= "[Secret]"

console.log(user)

//* Logical NULLISH Assignment
//? 변수가 null 또는 undefined이면 값을 넣는다
//? OR와의 차이 : OR은 모든 falsy를, NULLISH는 null과 undefined만을 체크한다
user.isAdmin ??= true