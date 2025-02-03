import { ApolloProvider } from "@apollo/client";
import client from "../graphql/client";
import Header from "@/components/Header";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        <Blog />
        <Footer/>
      </div>
    </ApolloProvider>
  );
}
