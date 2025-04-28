<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import HeaderComponent from "@/components/HeaderComponent.vue"
  
  export default {
  name: "App",
  components: {
      HeaderComponent
    }
  }
</script>

<style scoped>
  .content {
    width: 500px;
    height:100px;
    background-color: yellow;
  }
</style>