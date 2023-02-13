import { defineStore } from "pinia";
//Vue modules
import { reactive } from "vue";

//Third Part library Lodash
import _ from "lodash";

//Modules
import { PswDBModel, FilterModel } from "../modules/models";

//Firebase modules
import { db } from "../firebase/firebase";
import {
  collection,
  getDocs,
  setDoc,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

//Utils
import { Utils } from "../utils/utils";
import router from "../router";

//Store
import { useComponentStore } from "./componentStore";

export const usePasswordStore = defineStore("passwordStore", () => {
  let componentStore = useComponentStore();

  /**STATE */
  let dbData: PswDBModel[] = reactive([]);

  /**ACTIONS */
  async function populateTable(dbData: PswDBModel[]): Promise<PswDBModel[]> {
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
      return dbData;
    } catch (e) {
      throw e;
    }
  }

  async function addNewPassword(newPassword: PswDBModel): Promise<void> {
    try {
      if (Utils.checkForm(newPassword)) {
        await setDoc(doc(db, "Container-Pass", newPassword.id), newPassword);
        router.push("/home");
      }
    } catch (e) {
      throw e;
    }
  }

  async function getDocument(id: string): Promise<PswDBModel> {
    const docRef = doc(db, "Container-Pass", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data() as PswDBModel;
    } else {
      throw new Error("The document doesn't exist.");
    }
  }

  async function updatePassword(changePassword: PswDBModel): Promise<void> {
    try {
      const docRef = doc(db, "Container-Pass", changePassword.id);

      // Set the "capital" field of the city 'DC'
      await updateDoc(docRef, {
        id: changePassword.id,
        username: changePassword.username,
        site: changePassword.site,
        description: changePassword.description,
        password: changePassword.password,
      });
      router.push("/home");
    } catch (e) {
      throw e;
    }
  }

  async function deletePassword(): Promise<boolean> {
    try {
      await deleteDoc(doc(db, "Container-Pass", componentStore.idPassword));
    } catch (e) {
      throw e;
    }

    componentStore.showDeletePopup = !componentStore.showDeletePopup;
    return true;
  }

  async function filterData(filterValue: FilterModel) {
    try {
      const passwordCollection = collection(db, "Container-Pass");

      const queryToSearch = Utils.composeQuery(
        filterValue,
        passwordCollection
      ); 
      
      if (queryToSearch != null) {
        const querySnapshot = await getDocs(queryToSearch!);

        _.remove(dbData, () => []);

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
      } else {
        _.remove(dbData, () => []);
        await populateTable(dbData);
      }
    } catch (e) {
      throw e;
    }
  }
  return {
    populateTable,
    addNewPassword,
    getDocument,
    updatePassword,
    deletePassword,
    filterData,
    dbData,
  };
});
