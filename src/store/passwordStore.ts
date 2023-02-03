import { defineStore } from "pinia";

//Modules
import { PswDBModel } from "../modules/models";

//Firebase modules
import { db } from "../firebase/firebase";
import { collection, getDocs, setDoc, doc, getDoc } from "firebase/firestore";

//Utils
import { Utils } from "../utils/utils";
import router from "../router";

export const usePasswordStore = defineStore("passwordStore", () => {
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

	async function addNewPassword(newPassword: PswDBModel) {
		try {
			if (Utils.checkForm(newPassword)) {
				await setDoc(doc(db, "Container-Pass", newPassword.id), newPassword);
				router.push("/");
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

	return { populateTable, addNewPassword, getDocument };
});
