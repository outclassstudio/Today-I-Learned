//* 문자열 메소드
let hour = "10"
let minutes = "3"
let seconds = "12"

console.log(`${hour}h:${minutes.padStart(2,"0")}m:${seconds.padStart(2,"0")}s`)
//길이를 충족하지 못하면 "0"을 채운다
//! 원본을 변화시키지 않고 메소드가 적용된 값을 리턴함