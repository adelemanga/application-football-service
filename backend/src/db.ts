import { DataSource } from "typeorm";
import { Article } from "./entities/Article";
import { Food } from "./entities/Food";
import { Contact } from "./entities/Contact";

export const db = new DataSource({
  type: "sqlite",
  database: "./countries.sqlite",
  synchronize: true,
  entities: [Article, Food, Contact],
});
