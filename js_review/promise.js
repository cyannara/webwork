function wakeUp() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("1. 일어났어요! ⏰");
      resolve();
    }, 2000);
  });
}

function washFace() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2. 세수했어요! 💦");
      resolve();
    }, 2000);
  });
}

function eatBreakfast() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("3. 아침 먹었어요! 🍞");
      resolve();
    }, 1000);
  });
}

wakeUp()
  .then(washFace)
  .then(eatBreakfast)
  .then(() => console.log("준비완료"));

async function morningRoutin() {
  await wakeUp();
  await washFace();
  await eatBreakfast();
}
