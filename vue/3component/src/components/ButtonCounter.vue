<template>
  <div>
    <button @click="incrementChild">
      <slot></slot>
    </button> 
    <!-- <button @click="incrementChild">증가 {{count}}</button>  -->
   <!-- <button @click="$emit('incrementme', this.count+1)">증가 {{count}}</button>  -->
   <!-- <button @click="$emit('incrementme')">증가 {{count}}</button>  -->
   <!-- <button @click="this.count++">증가 {{count}}</button>  직접변경안됨 -->
  </div>
</template>
<script>
export default {
  props : [ 'count' ],
  methods :{
    incrementChild(){
      this.$emit('incrementevent', this.count+1)
    }
  }
}
</script>


