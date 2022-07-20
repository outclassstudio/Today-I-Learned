//*클로저
//어휘적 환경(Lexical Environment)
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add3 = makeAdder(3);
console.log(add3(2)); //5

const add10 = makeAdder(10);
console.log(add10(5)); //15
console.log(add3(2)); //5

//클로저는 함수와 함수의 어휘적 환경의 조합
//함수가 생성될 당시의 외부 변수를 기억
//외부 함수가 소멸하더라도 내부함수에서 계속 접근 가능

function makeCounter() {
  let num = 0;

  return function () {
    return num++;
  };
}

console.log(makeCounter()); //1
console.log(makeCounter()); //2
console.log(makeCounter()); //3
