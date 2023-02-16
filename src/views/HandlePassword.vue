<script setup lang="ts">
//Vue native modules
import { defineAsyncComponent, computed, reactive, onMounted, ref } from "vue";

//Components
import Layout from "../layout/Default.vue";
import Input from "../components/common/Input.vue";
import Loading from "../components/common/Loading.vue";
import TextArea from "../components/common/Textarea.vue";
import Button from "../components/common/Button.vue";

//Router
import router from "../router";
import { useRoute } from "vue-router";

//Modules
import { PswDBModel } from "../modules/models";

//Store
import { usePasswordStore } from "../store/passwordStore";
const pswStore = usePasswordStore();

//Async Form component
const Form = defineAsyncComponent({
  loader: () => import("../components/common/Form.vue"),
  loadingComponent: Loading,
  delay: 700,
  timeout: 5000,
});

//Istance of router
const route = useRoute();

//data
let password: PswDBModel = reactive({
  id: "",
  username: "",
  site: "",
  description: "",
  password: "",
});

let isDisabled = ref(false);
let isDisabledId = ref(false);

//Computed Props
const btnIcon = computed(() => {
  return new URL("../assets/images/arrow-left-solid.svg", import.meta.url).href;
});

//Functions
function returnHomePage() {
  router.push("/home");
}

function resetForm() {
  password.id = "";
  password.username = "";
  password.site = "";
  password.description = "";
  password.password = "";
}

async function populateForm() {
  if (
    route.params.id !== null &&
    typeof route.params.id === "string" &&
    route.name === "updatepassword"
  ) {
    let document = await pswStore.getDocument(route.params.id);

    if (document) {
      password.id = document.id;
      password.username = document.username;
      password.site = document.site;
      password.description = document.description;
      password.password = document.password;
    }
    isDisabledId.value = true;
  } else if (
    route.params.id !== null &&
    typeof route.params.id === "string" &&
    route.name === "details"
  ) {
    let document = await pswStore.getDocument(route.params.id);

    if (document) {
      password.id = document.id;
      password.username = document.username;
      password.site = document.site;
      password.description = document.description;
      password.password = document.password;
    }
    isDisabled.value = true;
    isDisabledId.value = true;
  }
}

//Hooks
onMounted(async () => {
  await populateForm();
});
</script>

<template>
  <Layout>
    <Form class="pt-10 v-align-center min-vh-40 fade-in">
      <section class="container">
        <div class="row d-flex justify-content-center g-4">
          <div class="col-sm-3 col-lg-1">
            <Input
              :disabled="isDisabledId"
              :value="password.id"
              :place-holder="'Id'"
              class="form-control form-control-lg addpsw"
              v-model="password.id"
            />
          </div>
          <div class="col-sm-5 col-lg-3">
            <Input
              :disabled="isDisabled"
              :value="password.username"
              :place-holder="'Username/Email'"
              class="form-control form-control-lg addpsw"
              v-model="password.username"
            />
          </div>
          <div class="col-sm-4 col-lg-4">
            <Input
              :disabled="isDisabled"
              :value="password.site"
              :place-holder="'Site/Application'"
              class="form-control form-control-lg addpsw"
              v-model="password.site"
            />
          </div>
        </div>
        <div class="row d-flex justify-content-center g-4 pt-5">
          <div class="col-sm-12 col-lg-8 col-md-12">
            <TextArea
              :disabled="isDisabled"
              :value="password.description"
              :rows="7"
              :resize="false"
              :place-holder="'Description'"
              class="form-control form-control-lg addpsw"
              v-model="password.description"
            />
          </div>
        </div>

        <div class="row d-flex justify-content-center g-4 pt-5">
          <div class="col-sm-12 col-lg-8 col-md-12">
            <Input
              :disabled="isDisabled"
              :value="password.password"
              :type="'password'"
              :place-holder="'Password'"
              class="form-control form-control-lg psw"
              v-model="password.password"
            />
          </div>
        </div>

        <div
          v-if="!isDisabled || !isDisabledId"
          class="row d-flex justify-content-center g-4 pt-5"
        >
          <div class="col-sm-12 col-lg-4 col-md-6">
            <Button
              :fn-button="resetForm"
              class="btn-fifth w-100"
              :type="'submit'"
              >Reset</Button
            >
          </div>
          <div class="col-sm-12 col-lg-4 col-md-6">
            <Button
              class="btn-primary w-100"
              :type="'submit'"
              :fn-button="
                !route.params.id
                  ? () => pswStore.addNewPassword(password)
                  : () => pswStore.updatePassword(password)
              "
              >Save</Button
            >
          </div>
        </div>
      </section>
    </Form>
    <section class="button-bar">
      <Button
        :fn-button="returnHomePage"
        class="btn-secondary btn-pad"
        :type="'button'"
        ><img :src="btnIcon" width="25" height="25"
      /></Button>
    </section>
  </Layout>
</template>
<style scoped>
/**Custom style for this page */
.v-align-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.button-bar {
  padding: 2rem;
  position: fixed;
  bottom: 0;
  left: 0;
}
.btn-pad {
  border-radius: 50%;
  padding: 10px !important;
}
.min-vh-40 {
  min-height: 40vh;
}

.pt-10 {
  padding-top: 6rem !important;
}
</style>
