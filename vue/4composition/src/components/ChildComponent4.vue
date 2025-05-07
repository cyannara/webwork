<template>
  {{msg}}<br>
  <button type="button" @click="childFunc" ref="btn" class="btn btn-success">click</button>
</template>
<script>
export default {
  data(){   return {msg : '자식컴포넌트 메시지'}   },
  methods: {
    childFunc() {
      this.$emit("send-message", this.msg)
    },
  },
};
</script>