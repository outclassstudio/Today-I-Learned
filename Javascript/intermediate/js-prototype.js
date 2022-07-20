//*프로토타입
const user = {
  name: "Mike",
};

//객체에 해당 프로퍼티가 있으면 그 속성을 사용하지만
//없다면 프로토타입체인에서 찾는다

const car = {
  wheels: 4,
  drive() {
    console.log("drive!");
  },
};

const bmw = {
  color: "red",
  navigation: 1,
};

bmw.__proto__ = car;

for (let key in bmw) {
  console.log(key);
}
//proto에 있는 key도 나온다

Object.keys(bmw); // 해당 객체에 있는 속성만 나온다

//?instanceof
//instance여부 확인

//클로저 응용
const BMW = function (color) {
  const c = color;
  this.getColor = function () {
    console.log(c);
  };
};

const newBmw = BMW("red");
