import { defineStore } from "pinia";
import { ref, Ref } from "vue";

//Modules
import { DataJsonType } from "../modules/types";

//Firebase modules
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

export const usePasswordStore = defineStore("passwordStore", () => {
  /**STATE */
  const dbData = ref([]) satisfies Ref<DataJsonType[]>;

  async function populateData() {
    
    const querySnapshot = await getDocs(collection(db, "Container-Pass"));
    querySnapshot.forEach((doc) => {
      dbData.value.push(doc.data() as never);
    });
  }

  return { populateData, dbData };
});
