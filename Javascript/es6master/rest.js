const bestFriendMaker = (firstOne, ...rest) => {
  console.log(`my best friend is ${firstOne}`)
  console.log(`rest.. ${rest}`)
}

bestFriendMaker(["a", "b", "c", "d", "e"])

const user = {
  name : "LMH",
  age : 24,
  password : 12345
}

//* case 1 : 특정 속성 없애기
const killPassword = ({ password, ...rest }) => rest
const cleanUser = killPassword(user)

console.log(cleanUser)

//* case 2 : 기본값 설정
const setCountry = ({ country = "KR", ...rest }) => ({ country, ...rest})
const addedCountry = setCountry(user)

//* case 3 : 변수명 바꾸기
const rename = ({name:NAME, ...rest }) => ({NAME, ...rest})
const renamed = rename(user)