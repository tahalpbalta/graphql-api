const { ApolloServer , gql } = require('apollo-server');
require('dotenv').config();
const mongoose = require('mongoose');
const Book = require('./src/models/book');
const Author = require('./src/models/author');
const typeDefs = require('./src/typeDefs');


mongoose.connect(process.env.MONGO_URI);

const resolvers = {
    Query: {
      books: async () => {
        return await Book.find();
      },
      authors: async () => {
        return await Author.find();
      },
    },
    Mutation: {
      addBook: async (_, { title, authorId }) => {
        const book = new Book({ title, authorId });
        await book.save();
        return book;
      },
      addAuthor: async (_, { name }) => {
        const author = new Author({ name });
        await author.save();
        return author;
      },
      deleteBook: async (_, { id }) => {
        const deletedBook = await Book.findByIdAndDelete(id);
        return deletedBook;
      },
    },
    
    Book: {
      author: async (parent) => {
        return await Author.findById(parent.authorId);
      },
    },
    Author: {
      books: async (parent) => {
        return await Book.find({ authorId: parent.id });
      },
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

  server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
  });