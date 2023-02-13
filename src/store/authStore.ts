import { defineStore } from "pinia";
//Modules
import { LoginModel } from "../modules/models";

//Firebase
import { signInWithEmailAndPassword, signOut, User } from "firebase/auth";
import { auth } from "../firebase/firebase";

//Router
import router from "../router";

export const useLoginStore = defineStore("authStore", () => {
  function getLogin(loginParams: LoginModel): void {
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

  function getLogout(): void {
    signOut(auth)
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        throw error;
      });
  }

  function verifyUserLog(): User | null {
    return auth.currentUser;
  }
  return { getLogin, getLogout, verifyUserLog };
});
