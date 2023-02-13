<script setup lang="ts">
//Vue native modules
import { computed, defineAsyncComponent, onMounted } from "vue";

//Components
import Layout from "../layout/Default.vue";
import Button from "../components/common/Button.vue";
import Loading from "../components/common/Loading.vue";
import Modal from "../components/common/Modal.vue";

//Router
import router from "../router";

//Store
import { useComponentStore } from "../store/componentStore";
import { usePasswordStore } from "../store/passwordStore";
import { useLoginStore } from "../store/authStore";

//Third Part library Lodash
import _ from "lodash";

//Instance of stores
const passwordStore = usePasswordStore();
const componentStore = useComponentStore();
const loginStore = useLoginStore();

//Async Components
const Table = defineAsyncComponent({
  loader: () => import("../components/Home/SectionTable.vue"),
  loadingComponent: Loading,
  delay: 700,
  timeout: 5000,
});

//Computed Props
const btnIcon = computed(() => {
  return new URL("../assets/images/plus-solid.svg", import.meta.url).href;
});
const logoutIcon = computed(() => {
  return new URL("../assets/images/door-open-solid.svg", import.meta.url).href;
});
//Hooks
onMounted(async () => {
  try {
    _.remove(passwordStore.dbData, () => []);
    passwordStore.dbData = await passwordStore.populateTable(
      passwordStore.dbData
    );
  } catch (e) {
    throw e;
  }
});

//Functions
function switchPassView() {
  router.push("addpassword");
}

function closeModal() {
  componentStore.idPassword = "";
  componentStore.showDeletePopup = !componentStore.showDeletePopup;
}

async function deletePassword() {
  try {
    let isDelete = await passwordStore.deletePassword();

    if (isDelete) {
      _.remove(passwordStore.dbData, () => []);

      passwordStore.dbData = await passwordStore.populateTable(
        passwordStore.dbData
      );
    }
  } catch (e) {
    throw e;
  }
}
</script>
<template>
  <Layout>
    <template v-if="componentStore.showDeletePopup">
      <Modal
        :error-function="closeModal"
        :succ-function="deletePassword"
        :title="'ATTENTION'"
      >
        Do you want delete this row?</Modal
      >
    </template>

    <Table :db-data="passwordStore.dbData" />
    <section class="button-bar">
      <Button
        :fn-button="loginStore.getLogout"
        class="btn-fifth btn-pad"
        :type="'button'"
        ><img :src="logoutIcon" width="25" height="25"
      /></Button>
      <hr class="opacity-0">
      <Button
        :fn-button="switchPassView"
        class="btn-secondary btn-pad"
        :type="'button'"
        ><img :src="btnIcon" width="25" height="25"
      /></Button>
    </section>
  </Layout>
</template>
<style scoped lang="scss">
.button-bar {
  padding: 2rem;
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
}
.opacity-0{
  opacity: 0;
}
</style>
