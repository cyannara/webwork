// 이 파일이 routing정보를 가지고 있는 router객체를 생성해서 export해준다.

import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '@/components/HomeComponent.vue' // @ : src 폴더를 의미
import AbountComponent from '@/components/AboutComponent.vue'
import MembersComponent from '@/components/MembersComponent.vue'
import VideosComonent from '@/components/VideosComonent.vue'

// 라우터 객체 생성
const router = createRouter({
  history: createWebHistory(),    // history기능은 import한 createWebHistory를 이용
  routes: [{
    path: "/",
    component:HomeComponent
  }, {
    path: "/about",
    component:AbountComponent
    }, {
    path: "/members",
    component:MembersComponent
    }, {
    path: "/videos",
    component:VideosComonent
  }]        // 각각의 경로정보를 객체화 시켜서 routes 속성으로 정의
})

export default router;    // 내보냄