//* or 연산자 : falsy한 값들을 모두 false로 처리함
//* nullish 연산자 : 오직 undefined와 null만 false로 처리함
let variable  = 0
console.log(variable || "anonymous") // "anonymous"가 출력됨
console.log(variable ?? "anonymous") // 0이 출력됨