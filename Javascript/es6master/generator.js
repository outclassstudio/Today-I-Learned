function* listPeople() {
  yield "A";
  yield "B";
  yield "C";
  yield "D";
}
const list = listPeople()
//값 호출
list.next()

const friends = ["A", "B", "C", "D", "E"]

function* callFriends () {
  for(let friend of friends) {
    yield friend
  }
}

const callMyFriends = callFriends()
//값 호출
callMyFriends.next()