import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        savedBooks
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        savedBooks
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($userId: ID!, $book: myBook!) {
    saveBook(userId: $userId, book: $book) {
      user {
        _id
        savedBooks
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation deleteBook($userId: ID!, $bookId: String!) {
    deleteBook(userId: $userId, bookId: $bookId) {
      user {
        _id
        savedBooks
      }
    }
  }
`;
