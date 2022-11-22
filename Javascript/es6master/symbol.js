// 심볼은 각각이 모두 고유함
const superBig = {
  [Symbol("nico")] : {
    age : 12
  },
  [Symbol("nico")] : {
    age : 12
  }
}

const symbols = Object.getOwnPropertySymbols(superBig)
symbols.forEach(symbol => console.log(superBig[symbol]))