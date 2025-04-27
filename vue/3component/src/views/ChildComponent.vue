<template>
  <button type="button" @click="childFunc" ref="btn">child click</button>
  {{ msg }}
</template>
<script>
export default {
  data() {
    return { msg: "자식컴포넌트" };
  },
  methods: {
    childFunc() {
      console.log("부모 컴포넌트에서 직접 발생시킨 이벤트");
    },
  },
  mounted() {
    this.$emit("send-message", this.msg);
  },
};
</script>
