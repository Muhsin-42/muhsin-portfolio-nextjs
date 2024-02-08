import { LINKS } from "./data";

export type TypeSectionsName = (typeof LINKS)[number]["name"];
export type Theme = "light" | "dark";
