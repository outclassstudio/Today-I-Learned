const lastName = prompt("Last name")
//!spread 패턴
const user = {
  username : "LMH",
  age : 34,
  ...(lastName !== "" && {lastName})
}

console.log(user)