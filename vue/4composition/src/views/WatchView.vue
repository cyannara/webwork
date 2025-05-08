<script setup>
//WatchView.vue
import { ref, reactive, computed, watch } from 'vue';

const books = reactive( [ 'Vue 2 - Advanced Guide',  
              'Vue 3 - Basic Guide',  
              'Vue 4 - The Mystery' ] )

 const question =ref(''); 
 const answer = ref('질문에는 일반적으로 물음표가 포함됩니다.'); 
 const src = ref('');

  // 계산된 속성
  // book 이 변경되면 publishedBooksMessage 바인딩한 모든 것을 업데이트
  const publishedBooksMessage = computed( () => {  
    return books.length > 0 ? 'Yes' : 'No'  
  });

  // 상태 변경에 반응하여 "부수 효과"를 수행
  // 반응형 상태가 변경될 때마다 콜백을 트리거
  watch(question,(newQuestion, oldQuestion)=> { 
      if (newQuestion.includes('?')) {   getAnswer()    } 
  }) ;

  async function getAnswer() { 
    answer.value = '생각 중...' 
    try { 
      const res = await fetch('https://yesno.wtf/api') 
      const data = await res.json()
      answer.value = data.answer === 'yes' ? '네' : '아니오' ;
      src.value = data.image;
    } catch (error) { 
      answer.value = '에러! API에 연결할 수 없습니다.' + error 
    } 
  } 
</script>
<template>
<input v-model="question">
<div> {{ answer }}</div>
<img :src/>
<hr>
books: {{ books.length > 0 ? 'yes' : 'no'  }}<br>
books: {{ publishedBooksMessage }}<br>
</template>