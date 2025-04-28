<template>
  <div>
    <h1>여기는 Root에요</h1>
    <br /><br />
    <ul>
      <CheckboxItem
        v-for="idol in idols"
        :key="idol.id"
        :name="idol.name"
        :checked="idol.checked"
      >
      </CheckboxItem>
    </ul>
  </div>
</template>

<script>
import CheckboxItem from "./components/CheckboxItem.vue";

export default {
  name: "App",
  data() {
    return {
      idols: [
        {
          id: 1,
          name: "BTS",
          checked: true,
        },
        {
          id: 2,
          name: "BlackPink",
          checked: false,
        },
        {
          id: 3,
          name: "아이유",
          checked: true,
        },
        {
          id: 4,
          name: "김연아",
          checked: false,
        },
      ],
    };
  },
  components: {
    CheckboxItem, // 키와 밸류가 같으면 축약 가능
  },
};
</script>

<style></style>
<!-- 자동완성: vbase-css -->
