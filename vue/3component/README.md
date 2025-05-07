# 컴포넌트 실습

### 하위 컴포넌트에서 상위 컴포넌트로 데이터 전달하기

이벤트를 발생하여 전달($emit)

부모는 특정 이벤트를 기다리고, 자식은 이벤트를 발생

```
  this.$emit('myevent');
```

자식 컴포넌트에서 이벤트가 발생되면 부모가 인지하여 부모컴포넌트가 가지고 있는 메소드를 호출하여 실행한다.

```vue
<div id="app">
    <child-component @myevent="parentFunc"/>
  </div>
```

## 새 프로젝트 생성

### vite 프로젝트 생성

```sh
npm create vue@latest
    3component    # 프로젝트명 입력
    router        # 패키지 선택
cd 3component
npm install
npm install axios
npm install bootstrap
npm run dev
```

### 부트스트랩 임포트

main.js

```javascript
//import "./assets/main.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
```

### 라우터

router / index.js 파일 변경

```js
    {
      path: '/nested',
      name: 'nested',
      component: () => import('../views/NestedComponent.vue'),
    },
```

## json-server

✔ JSON 파일을 기반으로 가상의 REST API를 생성해주는 툴  
✔ 백엔드 없이도 API 요청을 처리할 수 있도록 만들어줌  
✔ GET, POST, PUT, DELETE 등 HTTP 요청을 처리 가능  
✔ 실제 데이터베이스(DB)는 없지만, JSON 파일을 DB처럼 사용

referer : https://github.com/typicode/json-server

1. 새 터미널창 열기

```sh
$ npm install json-server
$ npx json-server empdata.json
```

2. 브라우저에서 확인

```
/api/emp
/api/emp/1
```

## REST API 서버

```
URI                   REST
empDelete?id=1        emp/1   delete
empUpdate             dept/30 update
empInsert             dept    post
empList.do            dept    get
empInfo.do?id=1       emp/1   get
```

## 얕은복사, 깊은복사

## EmpView.vue

리스트에서 항목 클릭 → 폼에 데이터 표시  
폼에서 저장 → 리스트 갱신 + 폼 초기화

| 기능                           | 설명                                            |
| :----------------------------- | :---------------------------------------------- |
| @select                        | 리스트에서 선택한 직원 정보를 폼에 전달         |
| :emp="selectedEmp"             | 폼에 props로 전달. 폼에서 해당 직원 정보 바인딩 |
| $emit('select', emp)           | 리스트에서 선택 이벤트 발생                     |
| $emit('saved')                 | 저장 후 부모에 알림                             |
| @saved                         | 저장 후 리스트 갱신 및 폼 초기화                |
| ref="listRef"                  | 부모에서 자식 메서드 호출                       |
| this.$refs.listRef.fetchList() |                                                 |
| watch                          | emp 변경되면 폼 입력값 동기화                   |

## 과제

```
1번과제
  vue 튜토리얼 7~13까지 따라하기

2번과제
TodoVoiw             : ParentComponent
   <-  TodoItem      : ChildComponent
```
