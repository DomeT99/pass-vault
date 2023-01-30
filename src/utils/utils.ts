import { PswDBModel } from "../modules/models";

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
}
