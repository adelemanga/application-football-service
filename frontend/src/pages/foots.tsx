import { ApolloProvider } from "@apollo/client";
import client from "../graphql/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FootballCoaching from "@/components/FootBallCoaching";

export default function Food() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        <FootballCoaching />
        <Footer />
      </div>
    </ApolloProvider>
  );
}
