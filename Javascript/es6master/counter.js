class Counter {
  constructor(initialCount = 0, counter, increase, decrease) {
    this.count = initialCount
    this.counter = document.getElementById(counter)
    this.increaseBtn = document.getElementById(increase)
    this.decreaseBtn = document.getElementById(decrease)
    this.addEventListner()
  }

  addEventListner = () => {
    this.increaseBtn.addEventListener("click", this.increase
    )
    this.decreaseBtn.addEventListener("click", this.decrease
    )
  }

  increase = () => {
    this.count++
    this.repaint()
  }

  decrease = () => {
    this.count--
    this.repaint()
  }

  repaint = () => {
    this.counter.innerText = this.count
  }
}

new Counter(0, "counter", "increase", "decrease")