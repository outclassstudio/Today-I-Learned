//*Promise
const pr = new Promise((resolve, reject) => {
  //함수구현
  //pending -> resolve가 호출되면 fullfilled
  //pending -> reject가 호출되면 rejected
  setTimeout(() => {
    resolve("가져가세요");
  }, 1000);
});

console.log("시작");
pr.then(
  function (result) {
    //if successs
    console.log(result);
  },
  function (error) {
    //if error -> catch로 빼는게 더 좋음
  }
)
  //error가 날 경우
  .catch()
  //이행이든 거부든 마지막에 실행
  .finally();

//예제
const f1 = (msg) => {
  return new Promise((res, rej) => {
    console.log(msg);
    setTimeout(() => {
      res("2번주문완료");
    }, 1000);
  });
};

const f2 = (msg) => {
  console.log(msg);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("3번주문완료");
    }, 2000);
  });
};

const f3 = (msg) => {
  console.log(msg);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("끝");
    }, 3000);
  });
};

console.log("시작");
f1("1번주문완료")
  .then(f2)
  .then(f3)
  .then(console.log)
  .finally(() => console.log("빠이"));

//Promise.all
console.time("x");
Promise.all([f1("1번주문완료"), f2("2번주문완료"), f3("3번주문완료")]).then(
  (res) => {
    console.log(res);
    console.timeEnd("x");
  }
);

//Promise.race
//하나라도 끝나면 끝냄
console.time("y");
Promise.race([f1("1번주문완료"), f2("2번주문완료"), f3("3번주문완료")]).then(
  (res) => {
    console.log(res);
    console.timeEnd("y");
  }
);
