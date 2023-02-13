<script setup lang="ts">
//Vue Native Modules
import { onMounted } from "vue";

//Router
import { RouterView } from "vue-router";
import router from "./router";

//Store
import { useLoginStore } from "./store/authStore";

const loginStore = useLoginStore();

onMounted(() => {
  if (loginStore.verifyUserLog()) {
    router.push("/home");
  } else {
    router.push("/");
  }
});
</script>
<template>
  <RouterView></RouterView>
</template>
