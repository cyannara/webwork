<template>
  <div>
    <h1>여기는 Header Component입니다.!</h1>
    <h3>여기에 클릭 가능한 링크를 설정</h3>
    <ul> <!-- 라우팅 링크를 걸어야 한다.-->
      <li><router-link to="/">홈</router-link></li>
      <li><router-link to="/about">소개</router-link></li>
      <li><router-link to="/members">멤버들</router-link></li>
      <li><router-link to="/videos">비디오들</router-link></li>
    </ul>

    
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>