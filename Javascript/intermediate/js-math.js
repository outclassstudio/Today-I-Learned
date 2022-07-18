//*toFixed()
//숫자를 인수로 받아 숫자만큼 소수점 자릿수를 표현
let rate = 30.1234;
rate.toFixed(2); //30.12
//!숫자가 아닌 문자열을 반환

//*isNaN()
//NaN여부를 판단하는 유일한 메소드
//NaN의 경우 자기 자신과도 같다고 판단하지 않음
let x = Number("x");
x === NaN; // false
NaN === NaN; // false
isNaN(x); // true

//*parseInt(),
//x진수를 10진수로 변환할 때
parseInt("someNumber", 16);
