import { defineStore } from "pinia";
import { reactive } from "vue";

//Modules
import { PswDBModel } from "../modules/models";

//Firebase modules
import { db } from "../firebase/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

//Utils
import { Utils } from "../utils/utils";

export const usePasswordStore = defineStore("passwordStore", () => {
  /**STATE */
  let dbData: PswDBModel[] = reactive([]);
  let newPassword: PswDBModel = reactive({
    id: "",
    username: "",
    site: "",
    description: "",
    password: "",
  });

  /**ACTIONS */
  async function populateTable(): Promise<void> {
    try {
      const querySnapshot = await getDocs(collection(db, "Container-Pass"));
      querySnapshot.forEach((doc) => {
        let dataFirebase = {
          id: doc.data().id,
          description: doc.data().description,
          site: doc.data().site,
          username: doc.data().username,
          password: doc.data().password,
        } satisfies PswDBModel;

        dbData.push(dataFirebase);
      });
    } catch (e) {
      throw e;
    }
  }

  async function addNewPassword() {
    try {
      if (Utils.checkForm(newPassword)) {
        await addDoc(collection(db, "Container-Pass"), newPassword);
      }
    } catch (e) {
      throw e;
    }
  }

  return { populateTable, addNewPassword, dbData, newPassword };
});
