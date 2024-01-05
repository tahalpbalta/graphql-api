const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Book = mongoose.model('Book', { title: String, authorId: String });
const Author = mongoose.model('Author', { name: String });

const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: Author!
  }

  type Author {
    id: ID!
    name: String!
    books: [Book!]!
  }

  type Query {
    books: [Book!]!
    authors: [Author!]!
  }

  type Mutation {
    addBook(title: String!, authorId: ID!): Book!
    addAuthor(name: String!): Author!
  }
`;

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