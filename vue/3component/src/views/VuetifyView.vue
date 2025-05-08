<template>
  <v-pagination
    :total-visible="5"
    :length="100"
    v-model="page"
    @update:modelValue="goPage"
    next-icon="mdi-menu-right"
    prev-icon="mdi-menu-left"
    :border="true"
  ></v-pagination>
  <v-btn @click="dialog = true"> Open Dialog </v-btn>
  <v-data-table-server
    :headers="headers"
    :items="plants"
    items-per-page="5"
    density="compact"
    item-key="name"
    :items-length="totalItems"
    hover
  ></v-data-table-server>
  <v-dialog v-model="dialog" width="auto">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        class="text-none font-weight-regular"
        prepend-icon="mdi-account"
        text="Edit Profile"
        variant="tonal"
        v-bind="activatorProps"
      ></v-btn>
    </template>
    <v-card max-width="400" prepend-icon="mdi-account" title="user profile">
      <v-card-text>
        <input class="form-control" /><br />
        <input class="form-control" /><br />
        <input /><br />
        <input /><br />
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text="Close" variant="plain" @click="dialog = false"></v-btn>
        <v-btn
          color="primary"
          text="Save"
          variant="tonal"
          @click="dialog = false"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script setup>
import { ref } from "vue";
const totalItems = ref(12);
const dialog = ref(false);
const page = ref(24);
const goPage = (p) => {
  console.log(p);
};

const headers = [
  { title: "Plant", align: "start", sortable: false, key: "name" },
  { title: "Light", align: "end", key: "light" },
  { title: "Height", align: "end", key: "height" },
  { title: "Pet Friendly", align: "end", key: "petFriendly" },
  { title: "Price ($)", align: "end", key: "price" },
];

const plants = [
  {
    name: "Fern",
    light: "Low",
    height: "20cm",
    petFriendly: "Yes",
    price: 20,
  },
  {
    name: "Snake Plant",
    light: "Low",
    height: "50cm",
    petFriendly: "No",
    price: 35,
  },
  {
    name: "Monstera",
    light: "Medium",
    height: "60cm",
    petFriendly: "No",
    price: 50,
  },
  {
    name: "Pothos",
    light: "Low to medium",
    height: "40cm",
    petFriendly: "Yes",
    price: 25,
  },
  {
    name: "ZZ Plant",
    light: "Low to medium",
    height: "90cm",
    petFriendly: "Yes",
    price: 30,
  },
  {
    name: "Spider Plant",
    light: "Bright, indirect",
    height: "30cm",
    petFriendly: "Yes",
    price: 15,
  },
  {
    name: "Air Plant",
    light: "Bright, indirect",
    height: "15cm",
    petFriendly: "Yes",
    price: 10,
  },
  {
    name: "Peperomia",
    light: "Bright, indirect",
    height: "25cm",
    petFriendly: "Yes",
    price: 20,
  },
  {
    name: "Aloe Vera",
    light: "Bright, direct",
    height: "30cm",
    petFriendly: "Yes",
    price: 15,
  },
  {
    name: "Jade Plant",
    light: "Bright, direct",
    height: "40cm",
    petFriendly: "Yes",
    price: 25,
  },
];
</script>
