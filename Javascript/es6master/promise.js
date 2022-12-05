const promiseTest = new Promise((res, rej) => {
  setTimeout(res, 3000, "wowow")
})

// console.log(promiseTest)
// setInterval(console.log, 1000, promiseTest)

//? then과 catch는 각기 다른 상황에서 실행된다
promiseTest
  .then(value => console.log(value))
  .catch(value => console.log(value))
  .finally(() => console.log("the end"))

const p1 = new Promise(res => {
  setTimeout(res, 10000, "First")
})

const p2 = new Promise((res, rej) => {
  setTimeout(rej, 1000, "Second")
})

const p3 = new Promise(res => {
  setTimeout(res, 3000, "Third")
})

const promises = Promise.all([p1, p2, p3])
promises
  .then((res) => console.log(res))
  .catch((error) => console.log(error))

  //* Promise.any
  //? 하나라도 끝나면 다음으로 진행
  Promise.any([p1, p2, p3])
    .then(console.og)