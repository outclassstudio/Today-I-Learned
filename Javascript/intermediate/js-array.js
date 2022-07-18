//*arr.splice()
//arr.splice(1, 0 , x, y) 특정요소를 지우지 않고 요소 추가 가능
let arr = ["나는", "개발자", "입니다"];
arr.splice(1, 0, "프론트엔드", "개발자");
console.log(arr); // ["나는", "프론트엔드", "개발자", "입니다"]

//*arr.indexOf(), arr.lastIndexOf()
let arr2 = [1, 2, 3, 4, 5, 1, 2, 3];
arr2.indexOf(3); // 2
arr2.indexOf(3, 3); // 7 / 두번째 인수는 시작위치

//?끝에서부터 탐색하고 싶다면
arr2.lastIndexOf(3); // 7

//*arr.find(fn), arr.findIndex(fn)
//!조건이 true가 되는 첫번째 요소를 반환

//*arr.map
//조건이 적용된 "새로운 배열" 반환
let userList = [
  { name: "Mike", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Tom", age: 19 },
];

//?새로운 배열이 반환되므로 변수를 선언하여 할당해줘야 한다
let newUserList = userList.map((user, idx) => {
  return Object.assign({}, user, {
    id: idx + 1,
    isAdult: user.age > 19,
  });
});
console.log(newUserList);
// [
//   { name: 'Mike', age: 30, id: 1, isAdult: true },
//   { name: 'Jane', age: 25, id: 2, isAdult: true },
//   { name: 'Tom', age: 19, id: 3, isAdult: false }
// ]
