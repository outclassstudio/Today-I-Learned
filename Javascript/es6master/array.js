//Array.of
const friend = Array.of("a", "b", "c", "d")
console.log(friend) // ["a", "b", "c", "d"]

//Array.from
//? 여러 엘리먼트를 배열로 변환할 때 사용하면 유용
const buttons = document.querySelector("button")
Array.from(buttons).forEach(button => {
  button.addEventListnener("click", () => {
    console.log("clicked!")
  })
})