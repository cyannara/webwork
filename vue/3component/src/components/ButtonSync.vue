<template>
  <button @click="updateCounter">싱크 {{counter}}</button>
</template>

<script>
export default {
  props : [ 'counter' ],
  methods :{
    incrementCounter(){
      this.$emit('update:counter', this.counter+1)
    }
  }
 
}
</script>
