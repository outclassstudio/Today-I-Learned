const button = document.querySelector("button")

//arrow function의 this
//* 일반적인 케이스
button.addEventListener("click", function() {
  console.log(this)
  this.style.backgroundColor = "red"
  //!? this는 button을 가리킴
})

//* arrow function의 경우
button.addEventListener("click", () => {
  console.log(this)
  this.style.backgroundColor = "red"
  //!? this는 window를 가리킴
})

//* 객체안의 arrow function과 this
const myProfile = {
  age: 24,
  addYear: () => {
    this.age++
  }
}

console.log("start", myProfile.age) // 24
myProfile.addYear()
myProfile.addYear()
console.log("end", myProfile.age) // 24
//! 객체안의 age가 업데이트 되지 않는다.