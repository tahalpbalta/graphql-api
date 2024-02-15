const { gql } = require('apollo-server');

const typeDefs = gql`
    type Book {
        id: ID!
        title: String!
        author: Author!
    }
    type Author {
        id: ID!
        title: String!
        books: [Book!]!
    }
    type Query {
        books : [Book!]!
        authors: [Author!]!
    }
    type Mutation {
        addBook(title: String!, authorId: ID!): Book!
        addAuthor(name: String!): Author!
        deleteBook(id: ID!): Book
    }
`;

module.exports = typeDefs;