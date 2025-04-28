<template>
  <page-title :title="title"/>
  <blog-post 
       :likes="50"
       :is-published="true" 
       :comment-ids="[100,103,200]"/>
  <blog-post v-bind="post"/>
  <hr>
  <blog-post v-for="post in posts" v-bind="post"/>
</template>
<script>
import PageTitle from "../components/PageTitle.vue"
import BlogPost from "../components/BlogPost.vue"
//1. 임포트
export default {
  //2. 컴포넌트 등록
  components : {PageTitle, BlogPost},   
  data(){
    return { title : '동적페이지이름',
            posts : [ { isPublished : false, title:"블로그1"},
                      { isPublished : true, title:"블로그2"},
                      { isPublished : false, title:"블로그3"}
              ],
             post :{
              isShow : false,
              likes :100,
              title: "vue 블로그",
              commentIds : [10,11,12]}
    }
  }
}
</script>