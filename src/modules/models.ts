import { DataJsonType } from "./types";

export interface PswDBModel extends DataJsonType {
  description: string;
}

export interface FilterModel {
  username: string;
  site: string;
}

export interface LoginModel {
  email: string;
  password: string;
}
