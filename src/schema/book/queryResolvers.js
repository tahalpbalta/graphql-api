import Book from '../../models/book.js'
import {connectToDatabase} from "../../database/db.js"

connectToDatabase();

const bookQueryResolvers = {
  Query: {
    getBooks: async () => {
      try{
        return await Book.find();
      } catch (error){
        throw new Error('Failed to get books');
      }
      
    },
    getBookById : async (_, { id }) => {
        return await Book.findById(id);
    },
  },
};


export default bookQueryResolvers
