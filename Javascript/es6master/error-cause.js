try {
  2+2
  throw new Error("DB Connection Failed", {
    cause: {
      error: "Password is incorrect",
      value: 1234,
      message: ["too short", "only number not ok"]
    } 
  })
} catch(e) {
  console.log(e.message, e.cause)
}