import { gql } from "@apollo/client";

export const ADD_CONTACT = gql`
  mutation AddContact(
    $name: String!
    $lastname: String!
    $email: String!
    $message: String!
  ) {
    addContact(
      name: $name
      lastname: $lastname
      email: $email
      message: $message
    ) {
      id
      name
      lastname
      email
      message
    }
  }
`;
