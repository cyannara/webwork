import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({ count: 0, name: "option Eduardo~~" }),
  getters: {
    doubleCount: (state) => state.count * 2,
    doubleCpuntPlusOne: () => this.doubleCount + 1,
  },
  actions: {
    increment() {
      this.count++;
    },
    getJSON(url) {
      this.increment(); // 다른 액션 호출
    },
  },
});
