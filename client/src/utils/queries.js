import { gql } from "@apollo/client";

export const GET_ME = gql`
  query getMe($profileId: ID!) {
    me(profileId: $profileId) {
      _id
      username
      email
      password
      savedBooks
    }
  }
`;
