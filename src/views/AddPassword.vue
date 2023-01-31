<script setup lang="ts">
//Vue native modules
import { defineAsyncComponent, computed, reactive } from "vue";

//Components
import Layout from "../layout/Default.vue";
import Input from "../components/common/Input.vue";
import Loading from "../components/common/Loading.vue";
import TextArea from "../components/common/Textarea.vue";
import Button from "../components/common/Button.vue";
import router from "../router";

//Modules
import { PswDBModel } from "../modules/models";

//Store
import { usePasswordStore } from "../store/passwordStore";
const pswStore = usePasswordStore();

const Form = defineAsyncComponent({
  loader: () => import("../components/common/Form.vue"),
  loadingComponent: Loading,
  delay: 700,
  timeout: 5000,
});

let newPassword: PswDBModel = reactive({
  id: "",
  username: "",
  site: "",
  description: "",
  password: "",
});

//Computed Props
const btnIcon = computed(() => {
  return new URL("../assets/images/arrow-left-solid.svg", import.meta.url).href;
});

function returnHomePage() {
  router.push("/");
}

function resetForm() {
  newPassword.id = "";
  newPassword.username = "";
  newPassword.site = "";
  newPassword.description = "";
  newPassword.password = "";
}
</script>

<template>
  <Layout>
    <Form class="pt-10 v-align-center min-vh-40 fade-in">
      <section class="container">
        <div class="row d-flex justify-content-center g-4">
          <div class="col-sm-3 col-lg-1">
            <Input
              :value="newPassword.id"
              :place-holder="'Id'"
              class="form-control form-control-lg addpsw"
              v-model="newPassword.id"
            />
          </div>
          <div class="col-sm-5 col-lg-3">
            <Input
              :value="newPassword.username"
              :place-holder="'Username/Email'"
              class="form-control form-control-lg addpsw"
              v-model="newPassword.username"
            />
          </div>
          <div class="col-sm-4 col-lg-4">
            <Input
              :value="newPassword.site"
              :place-holder="'Site/Application'"
              class="form-control form-control-lg addpsw"
              v-model="newPassword.site"
            />
          </div>
        </div>
        <div class="row d-flex justify-content-center g-4 pt-5">
          <div class="col-sm-12 col-lg-8 col-md-12">
            <TextArea
              :value="newPassword.description"
              :rows="7"
              :resize="false"
              :place-holder="'Description'"
              class="form-control form-control-lg addpsw"
              v-model="newPassword.description"
            />
          </div>
        </div>

        <div class="row d-flex justify-content-center g-4 pt-5">
          <div class="col-sm-12 col-lg-8 col-md-12">
            <Input
              :value="newPassword.password"
              :type="'password'"
              :place-holder="'Password'"
              class="form-control form-control-lg psw"
              v-model="newPassword.password"
            />
          </div>
        </div>

        <div class="row d-flex justify-content-center g-4 pt-5">
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
              :fn-button="() => pswStore.addNewPassword(newPassword)"
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
