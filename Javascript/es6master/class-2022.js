class Counter {
  //* 기존문법
    // constructor() {
    //   this.count = 0;
    // }
  //* ECMA Script 2022 문법
  //? private
  #count = 0;

  //? static은 instance가 아닌 class 자체에 붙어있다.
  static description = "5까지 셉니다";
  
  static isMyChild(instance) {
    return instance instanceof Counter;
  }

  //* getter
  get count () {
    return this.#count;
  }

  plus() {
    if(this.#count === 5) {
      //? 내부에서는 사용됨
      this.#reset()
    } else {
      this.#count++;
    }
  }

  //? private
  #reset() {
    this.#count = 0
  }
}

//! 작동하지 않음
// c.#count = 100 
// c.#reset()

const c = new Counter()
console.log(c.description) // undefined
console.log(Counter.description) // "5까지 셉니다";
console.log(Counter.isMyChild(c)) // true