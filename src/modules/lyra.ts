import { create, insert, search } from "@lyrasearch/lyra";
import { PswDBModel } from "./models";

export const pswDB = await create({
  schema: {
    id: "string",
    site: "string",
    description: "string",
    username: "string",
    password: "string",
  },
});

export class LyraSearch {

  public static async lyraInsert(params: PswDBModel) {
    await insert(pswDB, params);
  }

  public static async lyraSearch(term: string) {
    const searchResult = await search(pswDB, {
      term: term,
    });
    return searchResult;
  }
}


