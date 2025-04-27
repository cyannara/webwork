<template>
  <button type="button" @click="clickHandler">parent click</button>
  <button type="button" @click="changeChildData">자식컴포넌트데이터변경</button>
  <div class="border p-5">
    <child-component @send-message="sendMessage" ref="child_component" />
  </div>
</template>
<script>
import ChildComponent from "./ChildComponent.vue";
export default {
  components: { ChildComponent },
  methods: {
    clickHandler() {
      this.$refs.child_component.childFunc();
    },
    changeChildData() {
      this.$refs.child_component.msg = "부모가 변경함";
    },
    sendMessage(data) {
      console.log(data);
    },
  },
  mounted() {
    //this.$refs.child_component.$refs.btn.click();
    this.$refs.child_component.childFunc();
  },
};
</script>
