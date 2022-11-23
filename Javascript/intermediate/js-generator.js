//*제네레이터
//함수를 중간에 중단시켰다가 실행시킬 수 있음

function* fn() {
  console.log(1);
  yield 1;
  console.log(2);
  yield 2;
  console.log(3);
  yield 3;
  return "finish";
}

//!next로 댜음으로 이행하며 가장 가까운 yield를 만날때까지 실행되었다가 멈춤
const a = fn();
a.next();

//return
//return문 호출 즉시 함수종료
a.return("끝");

//Generator는 iterable
//symbol.iterator가 있다
//symbol.iterator로 반복 가능할 때 iterable하다고 할 수 있다

//?외부로부터 값 입력 가능
function* fn2() {
  const num1 = yield "첫번째 숫자를 입력해주세요";
  console.log(num1);

  const num2 = yield "두번째 숫자를 입력해주세요";
  console.log(num2);

  return num1 + num2;
}

const b = fn2();
b.next(1);
b.next(2);

//이행이 끝나면 done이 true가 됨

//?next로만 다음으로 이행하기 때문에 무한 반복되지 않는다
function* fn3() {
  let index = 0;
  while (true) {
    yield index++;
  }
}

const c = fn3();

//여러개의 제네레이터

function* gen1() {
  yield "W";
  yield "o";
  yield "r";
  yield "l";
  yield "d";
}

//?실행안됨
function gen2() {
  yield "hello";
  //반복가능한 모든 객체가 올 수 있음
  yield* gen1();
  yield "!";
}