import { create } from "@lyrasearch/lyra";

export const pswDB = await create({
  schema: {
    id: "number",
    site: "string",
    description: "string",
    username: "string",
    password: "string",
  },
});

