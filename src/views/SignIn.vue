<script setup lang="ts">
import { reactive, ref } from "vue";

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

//Data
const loginData: LoginModel = reactive({
  email: "",
  password: "",
});
const isValidMail = ref(false);
const isValidPassword = ref(false);

//Functions
async function getLogin() {
  let isValidLogin = await loginStore.getLogin(loginData);

  if (!isValidLogin || isValidLogin === undefined) {
    isValidMail.value = true;
    isValidPassword.value = true;
  }
}
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
            <Label
              v-if="isValidMail"
              :for="'email-input'"
              class="form-label text-danger"
            >
              Enter a valid email
            </Label>
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
            <Label
              v-if="isValidPassword"
              :for="'email-input'"
              class="form-label text-danger"
            >
              Enter your password
            </Label>
          </div>
          <div class="justify-content-center d-flex">
            <Button
              :fn-button="getLogin"
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
