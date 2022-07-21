//*Class
class User {
  //?객체를 만들어주는 생성자 메소드
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showName() {
    console.log(this.name);
  }
}

//class는 new없이 실행할 수 없음(생성자 함수와의 차이)
const tom = new User2("Tom", 19);

//class의 메소드는 for ... in문에서 제외된다

//class의 상속은 extends키워드로
class Car {
  constructor(color) {
    this.color = color;
    this.wheels = 4;
  }
  drive() {
    console.log("drive");
  }
  stop() {
    console.log("stop");
  }
}

class BMW extends car {
  constructor(color) {
    //?부모 클래스의 컨스트럭터를 받아와야 함
    super(color);
    this.navigation = 1;
  }

  park() {
    console.log("Park");
  }
  //?같은 이름 다른 함수 => 덮어써짐
  stop() {
    //?오버라이딩
    super.stop();
    console.log("stopstop");
  }
}

const z4 = new BMW("Blue");
