import { defineStore } from "pinia";
import { reactive } from "vue";

//Modules
import { PswDBModel } from "../modules/models";

//Firebase modules
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

export const usePasswordStore = defineStore("passwordStore", () => {
  /**STATE */
  const dbData: PswDBModel[] = reactive([]);

  /**ACTIONS */
  async function populateData(): Promise<void> {
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
  }

  return { populateData, dbData };
});
