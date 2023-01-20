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

class LyraSearch {
  private static _instance: LyraSearch;

  constructor() {
    if (LyraSearch._instance) {
      throw new Error("Error: Instantiation failed.");
    }
    LyraSearch._instance = this;
  }
  test() {
    alert("A");
  }

  public async lyraInsert(params: PswDBModel) {
    await insert(pswDB, params);
  }

  public async lyraSearch(term: string) {
    const searchResult = await search(pswDB, {
      term: term,
    });
    return searchResult;
  }
}
export const t = new LyraSearch();
