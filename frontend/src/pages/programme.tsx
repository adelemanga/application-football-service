import { ApolloProvider } from "@apollo/client";
import client from "../graphql/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Programme from "@/components/Programme";

export default function FoodDetailsPage() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        <h1>Programme</h1>
        <Programme />
        <Footer />
      </div>
    </ApolloProvider>
  );
}
