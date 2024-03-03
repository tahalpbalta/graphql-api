import { gql } from 'apollo-server'

const typeDefs = gql`
    type Book {
        id: ID!
        title: String!
        author: Author!
        createdAt: String!
    }
    type Author {
        id: ID!
        name: String!
        books: [Book!]
    }
    
    input BookInput {
        title: String!
        author: AuthorInput
    }

    input AuthorInput{
        name: String!
        books: [BookInput]
    }

    type Query {
        getBooks : [Book!]!
        getBookById : Book
        getAuthors : [Author!]!
        getAuthorsById : Author
    }
    type Mutation {
        addBook(book: BookInput): Book!
        addAuthor(author: AuthorInput): Author!
        deleteBook(id: ID!): Book
        deleteAuthor(id: ID!): Author
    }
`;

export default typeDefs