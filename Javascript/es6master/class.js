class User {
  constructor(userName, lastName, email, password) {
    this.username = userName
    this.lastName = lastName
    this.email = email
    this.password = password
  }

  sayHello() {
    console.log(`Hi, my name is ${this.username}`)
  }
  getProfile() {
    console.log(`${this.username}` `${this.lastName}`, `${this.email}`)
  }
  updatePassword (newPassword, oldPassword) {
    if(oldPassword === this.password) {
      this.password = newPassword
    } else {
      console.log("Cant change password")
    }
  }
}

const instanceUser = new User("Minhyeong", "Lee", "abc@abc.com", "1234")

class Admin extends User {
  constructor(userName, lastName, email, password) {
    //자식 class에서 constructor를 쓰려면 super키워드로 부모 요소의 constructor를 상속받아야 사용가능함
    super(userName, lastName, email, password)
  }
  deleteWebsite () {
    console.log("deleted!")
  }
}

const adminUser = new Admin("Minhyeong", "Lee", "abc@abc.com", "1234")