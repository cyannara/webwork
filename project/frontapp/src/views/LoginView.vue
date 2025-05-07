<template>
  email <input v-model="email">
  pw <input v-model="pw">
  <button type="button" @click="loginHanlder">로그인</button>
</template>
<script>
import axios from 'axios';
export default {
  data(){
    return {      email :"",       pw:""    }
  },
  methods: {
    async loginHanlder(){
      const url = "/api/users/login";
      const data = { email : this.email, pw:this.pw  };                     
      const result = await axios.post(url,data)
      //if(result.data.code ==="success")
      alert(result.data.code)
      //이메일도 저장하도록 추가
      //this.$store.commit('changeEmail',{email:this.email});
      this.$store.dispatch('login',{email:this.email});
      this.$router.push({ path: "/" });
    }
  }
}
</script>
