//기본값 할당
const numbers = [1,2,3]
const [one, two, tree, four = 4] = number
console.log(one, two, three, four) // 1,2,3,4

//renaming + 기본값
const settings = {
  color: {
    chosen_color: "dark"
  }
}

const {
  color: { chosen_color: chosenColor = "light"}
} = settings
console.log(chosenColor) // dark

//약간의 트릭
let chosenColor2 = "blue"

(
  {
    color: { chosen_color: chosenColor2 = "light"}
  } = settings
)
// chosenColor2에 재할당함