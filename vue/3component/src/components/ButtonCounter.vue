<template>
  <div class="border">
    <button @click="incrementChild">
      <slot></slot>
    </button>
    <button @click="$emit('incrementevent')">emit {{ count }}</button>
    <button @click="$emit('incrementevent', 0)">
      emit 인수{{ count }}
    </button>
    <button @click="incrementChild">핸들러 {{ count }}</button>
    <button @click="this.count++">직접증가 {{ count }}</button> 직접변경안됨
  </div>
</template>
<script>
export default {
  props: ["count"],
  methods: {
    incrementChild() {
      this.$emit("incrementevent", this.count + 1);
    },
  },
};
</script>
