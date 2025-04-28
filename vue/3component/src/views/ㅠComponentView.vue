<template>
  <div>
    <ul>
      <li><router-link :to="{name:'product', params:{id:1}}">상품상세페이지로 이동</router-link></li>
      <li><router-link to="/productinfo">상품페이지로 이동</router-link></li>
      <li><router-link :to="{name:'productinfo', query:{id:10}}">상품페이지로 이동(name)</router-link></li>
      <li><a href="#"  @click="goproduct">상품페이지로 이동(push)</a></li>
    </ul>  
      parent : {{counter}}
      <button-counter :count="counter" @incrementevent="incrementCounter">
         증가{{counter}}
      </button-counter> <br/><br/>
      <fancy-button/> <br/><br/>
      <fancy-button>등록</fancy-button> <br/><br/>
      <fancy-button>
        <span style="color:red">클릭 미!!</span>
      </fancy-button>
      <base-layout>
        <template v-slot:header>
          회원등록
        </template>
        <template v-slot:default>
          <input><button>저장</button>
        </template>
        <template v-slot:footer>
          <button type="reset">취소</button>
        </template>
      </base-layout>
      <!-- <button-sync :counter.sync="counter"/> -->
  </div>
</template>

<script>
import ButtonCounter from '../components/ButtonCounter.vue'
import ButtonSync from '../components/ButtonSync.vue'
import FancyButton from '../components/FancyButton.vue'
import BaseLayout from '../components/BaseLayout.vue'
export default {
  components: { ButtonCounter, ButtonSync, FancyButton, BaseLayout },
  data () { return { counter:0 } },
  methods :{
    incrementCounter(cnt){
      this.counter = cnt
    },
    goproduct() {
      //this.$router.push('/product')
      this.$router.push({name:'productinfo'})
    }
  }
}
</script>
