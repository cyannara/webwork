### Vue UI 컴포넌트 라이브러리

1. Vuetify
2. Element Plus
3. Naive UI
4. PrimeVue
5. Quasar
6. BootstrapVue 3
7. Tailwind + Headless UI

#### 선택기준

- 회사/관리자 페이지 → Element Plus, Vuetify, PrimeVue
- 스타트업/개인 프로젝트 → Naive UI, Tailwind + Headless UI
- 모바일 앱까지 고려 → Quasar
- Bootstrap 좋아하면 → BootstrapVue 3

Vuetify, PrimeVue 컴포넌트는 무료이지만 테마나 템플릿은 유료가 있음

### vuetify

https://vuetifyjs.com/en/

### primevue

https://primevue.org/

### BootstrapVueNext

https://bootstrap-vue-next.github.io/bootstrap-vue-next/

## pinia

1. main.js : vue 인스턴스에 pinia 등록

```javascript
import { createPinia } from "pinia";

const pinia = createPinia();

app.use(pinia);
```

2. store 생성

```javascript
import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});
```

3. 컴포넌트에서 pinia 사용하기

```javascript
// mapState는 Pinia 스토어의 state를 반응형으로 가져오는 헬퍼 함수입니다.
// useCounterStore: 우리가 만든 Pinia 스토어입니다.
// ["name", "count"]: 그 스토어에서 가져올 state 속성입니다.
// ...: 전개 연산자로, 반환되는 객체의 속성들을 개별로 꺼내 쓰기 위함입니다.
```

### dependency

sockjs-client
vue-iamport
webstomp-client
