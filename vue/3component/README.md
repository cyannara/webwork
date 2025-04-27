# 3component

## 라우터

```js
 component: () =>import(/* webpackChunkName: "emp" */ "../views/EmpView.vue"),
```

리스트에서 항목 클릭 → 폼에 데이터 표시  
폼에서 저장 → 리스트 갱신 + 폼 초기화

| 기능                        | 설명                                    |
| :-------------------------- | :-------------------------------------- |
| @select                     | 리스트에서 선택한 직원 정보를 폼에 전달 |
| :emp="selectedEmp"          | 폼에서 해당 직원 정보 바인딩            |
| @saved                      | 저장 후 리스트 갱신 및 폼 초기화        |
| ref="listRef" + fetchList() | 부모에서 자식 메서드 호출               |

```sh
npm install
npm install axios
npm install bootstrap
```

main.js

```javascript
//import "./assets/main.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
```

### json-server

✔ JSON 파일을 기반으로 가상의 REST API를 생성해주는 툴  
✔ 백엔드 없이도 API 요청을 처리할 수 있도록 만들어줌  
✔ GET, POST, PUT, DELETE 등 HTTP 요청을 처리 가능  
✔ 실제 데이터베이스(DB)는 없지만, JSON 파일을 DB처럼 사용

referer : https://github.com/typicode/json-server

1. 새 터미널창 열기

```sh
$ npx json-server empdata.json
```

2. 브라우저에서 확인

```
http://localhost:3000/emp
http://localhost:3000/emp/1
```
