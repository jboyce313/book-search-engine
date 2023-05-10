const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]
  }

  type Book {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me(userId: ID!): User
  }

input myBook {
    authors: [String]
    description: String
    title: String
    bookId: String
    image: String
    link: String
}

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    saveBook(userId: ID!, book: myBook!) User
    deleteBook(userId: ID!, bookid: ID!) User
  }
`;

module.exports = typeDefs;
