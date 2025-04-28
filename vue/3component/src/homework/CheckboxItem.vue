<template>
  <li>
    <input type="checkbox" :checked="checked"> {{ name }}
  </li>
</template>

<script>
  export default {
    // 옵션 객체의 옵션 내용이 나오면 된다.
  name: "CheckboxItem",  // 이름은 컴포넌트 파일명과 똑같이 작성
    data() {
      return {
        checked: false
      }
    },
    props: {
      name: String,
      checked : Boolean
    }
  }
</script>

<style scoped>

</style>