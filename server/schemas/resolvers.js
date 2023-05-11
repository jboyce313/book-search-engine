const { AuthenticationError } = require("apollo-server-express");
const { User, Book } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError(
          "No user with this username or email found!"
        );
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(profile);
      return { token, user };
    },

    saveBook: async (parent, { userId, book }) => {
      //   const { authors, description, title, bookId, image, link } = input;

      return User.findOneAndUpdate(
        { _id: userId },
        {
          $addToSet: { savedBooks: book },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },

    deleteBook: async (parent, { userId, bookId }) => {
      const book = Book.findOne({ bookId: bookId });

      return User.findOneAndUpdate(
        { _id: userId },
        { $pull: { saveBooks: book } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
