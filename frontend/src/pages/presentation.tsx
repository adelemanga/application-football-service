import { ApolloProvider } from "@apollo/client";
import client from "../graphql/client";
import Header from "@/components/Header";
import FoodList from "@/components/FootBallCoaching";
import AddFood from "@/components/Presentation";
import Footer from "@/components/Footer";
import Presentation from "@/components/Presentation";

export default function AddFoodPage() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        <Presentation />
        <Footer />
      </div>
    </ApolloProvider>
  );
}
