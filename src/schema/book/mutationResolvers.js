import Book from '../../models/book.js'
import {connectToDatabase} from "../../database/db.js"

connectToDatabase();


const bookMutationResolvers = {
  Mutation: {
    addBook: async (_, { title, author }) => {
      try {
        const book = new Book({ title, author });
        await book.save();
        return book;
      } catch (error){
      throw new Error('Failed to add book');
      }
    },
    deleteBook: async (_, {id}) => {
      try{
        const deletedBook = await Book.findByIdAndDelete(id);
        return deletedBook;
      } catch (error){
        throw new Error('Failed to delete book');
      }
    },
  },
};

export default bookMutationResolvers
