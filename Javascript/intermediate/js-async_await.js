//*async, await
//async를 붙인 함수는 promise를 반환한다
async function getName(name) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(name);
    }, 1000);
  });
}

getName("Thor").then(console.log);

async function showName() {
  //?await 오른쪽에는 promise가 오고 실행될때까지 기다림
  const result = await getName("Steve Rogers");
  console.log(result);
}

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

//!error처리는 try..catch문을 쓴다

try {
  async function order() {
    const result1 = await f1("1번주문완료");
    const result2 = await f2(result1);
    const result3 = await f3(result2);
    console.log(result3);
  }
} catch (error) {
  console.log(error);
}

async function newOrder() {
  const result = await Promise.all([f1(), f2(), f3()]);
  console.log(result);
}
