axios = require('axios')

//비동기  : ajax
function test() {
  async function getBoard() {
    let res = await axios.get("/api/board/1")
    console.log("2:", res.data.title);
  }
  getBoard();
  console.log("1","the end");
}

test();