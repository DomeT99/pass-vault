<script setup lang="ts">
import { reactive } from "vue";

//Components
import Form from "../components/common/Form.vue";
import Input from "../components/common/Input.vue";
import Label from "../components/common/Label.vue";
import Button from "../components/common/Button.vue";

//Modules
import { LoginModel } from "../modules/models";

//Store
import { useLoginStore } from "../store/authStore";

const loginStore = useLoginStore();

const loginData: LoginModel = reactive({
  email: "",
  password: "",
});
</script>
<template>
  <section class="bg-primary min-vh-100 v-align-center">
    <article class="row-cols-sm-1">
      <div class="col-sm-12 justify-content-center d-flex">
        <Form>
          <div class="mb-3">
            <Label :for="'email-input'" class="form-label text-white">
              Email
            </Label>
            <Input
              :value="loginData.email"
              class="form-control"
              :id="'email-input'"
              :type="'email'"
              v-model="loginData.email"
            />
          </div>
          <div class="mb-4">
            <Label :for="'password-input'" class="form-label text-white">
              Password
            </Label>
            <Input
              :value="loginData.password"
              class="form-control"
              :id="'password-input'"
              :type="'password'"
              v-model="loginData.password"
            />
          </div>
          <div class="justify-content-center d-flex">
            <Button
              :fn-button="() => loginStore.getLogin(loginData)"
              class="btn-fifth w-100"
              :type="'submit'"
              >Login</Button
            >
          </div>
        </Form>
      </div>
    </article>
  </section>
</template>

<style scoped>
/**Custom style for this page */
.v-align-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.w-100 {
  width: 100% !important;
}
</style>
