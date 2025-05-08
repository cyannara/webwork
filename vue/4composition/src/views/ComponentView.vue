<template>
  useComponentrefs이용
  <input ref="my-input" value="hello" />
  <hr>
  <div> 
    현재페이지는 {{$route.fullPath}} <br> 
   <a href="#" @click="router.push('/')">home</a> 
   <a href="#" @click="goPage">about</a>   
  </div> 
  <hr/>
  {{ count.value }}
  <button @click="clickHandler">클릭</button>
  <ButtonCounter :counter="count.value" 
      @incrementevent="clickHandler">자식컴포넌트</ButtonCounter>
</template>
<script setup>
import ButtonCounter from '../components/ButtonCounter.vue'
import {reactive, onMounted, useTemplateRef } from 'vue';

const input = useTemplateRef('my-input')

//count 반응형 변수 선언
const count = reactive({value:0}) 
const clickHandler = (initValue)=>{
  //number 0 -> false
  if (initValue > 0) {
    count.value = initValue
  } else {
    //count 증가
    count.value++
  }
};
onMounted(()=>{
  console.log('count=',count.value);
  //input.value  ==> <input> 태그 DOM api 사용
  console.log('input=',input.value.value);
  input.value.select()  //focus()
});
</script>  
