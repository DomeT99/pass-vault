import { defineStore } from "pinia";

//Firebase modules
import { getFirestore } from "firebase/firestore";
import { firebase } from "../firebase/firebase";

export const usePasswordStore = defineStore("passwordStore", () => {
  /**Common db object */
  const db = getFirestore(firebase);
});
