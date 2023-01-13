<script setup lang="ts">
//Vue native modules
import { defineAsyncComponent,computed } from "vue";

import Layout from "../layout/Default.vue";
import Input from "../components/common/Input.vue";
import Loading from "../components/common/Loading.vue";
import TextArea from "../components/common/Textarea.vue";
import Button from "../components/common/Button.vue";
import router from "../router";

const Form = defineAsyncComponent({
  loader: () => import("../components/common/Form.vue"),
  loadingComponent: Loading,
  delay: 700,
  timeout: 5000,
});

//Computed Props
const btnIcon = computed(() => {
  return new URL("../assets/images/arrow-left-solid.svg", import.meta.url).href;
});

function returnHomePage(){
  debugger
  router.push("/");
}
</script>

<template>
  <Layout>
    <Form class="pt-10 v-align-center min-vh-40 fade-in">
      <section class="container">
        <div class="row d-flex justify-content-center g-4">
          <div class="col-sm-6 col-lg-4">
            <Input
              :place-holder="'Username/Email'"
              class="form-control form-control-lg addpsw"
            />
          </div>
          <div class="col-sm-6 col-lg-4">
            <Input
              :place-holder="'Site/Application'"
              class="form-control form-control-lg addpsw"
            />
          </div>
        </div>
        <div class="row d-flex justify-content-center g-4 pt-5">
          <div class="col-sm-12 col-lg-8 col-md-12">
            <TextArea
              :rows="7"
              :resize="false"
              :place-holder="'Description'"
              class="form-control form-control-lg addpsw"
            />
          </div>
        </div>

        <div class="row d-flex justify-content-center g-4 pt-5">
          <div class="col-sm-12 col-lg-8 col-md-12">
            <Input
              :type="'password'"
              :place-holder="'Password'"
              class="form-control form-control-lg psw"
            />
          </div>
        </div>

        <div class="row d-flex justify-content-center g-4 pt-5">
          <div class="col-sm-12 col-lg-4 col-md-6">
            <Button class="btn-fifth w-100" :type="'submit'">Reset</Button>
          </div>
          <div class="col-sm-12 col-lg-4 col-md-6">
            <Button class="btn-primary w-100" :type="'submit'">Save</Button>
          </div>
        </div>
      </section>
    </Form>
    <section class="button-bar">
      <Button :fn-button="returnHomePage" class="btn-secondary btn-pad" :type="'button'"
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
  padding: 20px !important;
}
.min-vh-40 {
  min-height: 40vh;
}

.pt-10 {
  padding-top: 6rem !important;
}
</style>
