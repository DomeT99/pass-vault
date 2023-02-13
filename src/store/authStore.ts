import { defineStore } from "pinia";
//Modules
import { LoginModel } from "../modules/models";

//Firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

//Router
import router from "../router";

export const useLoginStore = defineStore("authStore", () => {
  function getLogin(loginParams: LoginModel) {
    if (loginParams.email != "" && loginParams.password != "") {
      signInWithEmailAndPassword(auth, loginParams.email, loginParams.password)
        .then(() => {
          router.push("home");
        })
        .catch((error) => {
          throw error;
        });
    } else {
      alert("NO");
    }
  }

  return { getLogin };
});
