//Firebase
import {
  CollectionReference,
  DocumentData,
  query,
  where,
} from "firebase/firestore";
//Modules
import { PswDBModel, FilterModel } from "../modules/models";

export class Utils {
  static checkForm(dataForm: PswDBModel): boolean {
    if (dataForm.id == null || dataForm.id == "") {
      return false;
    }

    if (dataForm.username === null || dataForm.username === "") {
      return false;
    }

    if (dataForm.site === null || dataForm.site === "") {
      return false;
    }

    if (dataForm.password === null || dataForm.password === "") {
      return false;
    }

    return true;
  }

  static composeQuery(
    filterValue: FilterModel,
    passwordCollection: CollectionReference<DocumentData>
  ) {
    if (filterValue.site === "" && filterValue.username === "") {
      return null;
    }

    if (filterValue.site === "") {
      return query(
        passwordCollection,
        where("username", "==", filterValue.username)
      );
    }

    if (filterValue.username === "") {
      return query(passwordCollection, where("site", "==", filterValue.site));
    }

    return query(
      passwordCollection,
      where("site", "==", filterValue.site),
      where("username", "==", filterValue.username)
    );
  }
}
