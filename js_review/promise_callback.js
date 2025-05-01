function wakeUp() {
  setTimeout(() => {
    console.log("1. 일어났어요! ⏰");
  }, 1000);
}

function washFace() {
  setTimeout(() => {
    console.log("2. 세수했어요! 💦");
  }, 1000);
}

wakeUp();
washFace();

function shower() {
  setTimeout(() => {
    console.log("2. 샤워했어요! 💦");
  }, 1000);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
