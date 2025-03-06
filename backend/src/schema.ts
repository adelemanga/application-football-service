import { buildSchema } from "type-graphql";
import FoodResolver from "./resolvers/FoodResolver";
import ArticleResolver from "./resolvers/ArticleResolver";
import ContactResolver from "./resolvers/ContactResolver";

export default buildSchema({
  resolvers: [FoodResolver, ArticleResolver, ContactResolver],
});
