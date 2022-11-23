const userObj = {
  username : "LMH", 
  age : 10,
  password: 1234,
}

//프록시에 사용되는 트랩
const userFilter = {
  get: (target, prop, receiver) => {
    console.log("this is getter")
    return prop ==="password" ? `${"*".repeat(5)}` : target[prop]
  },
  set: () => {
    console.log("this is setter")
  },
  deleteProperty: (target, prop) => {
    if(prop === "password") {
      console.log("BAAAAM")
      return;
    } else {
      target[prop] = "DELETED"
    }
  }
}

const filteredUser = new Proxy(userObj, userFilter)

// 원본 객체를 보호하면서 객체에 접근하고자 할 때 사용