import Author from "../../models/author.js"
import {connectToDatabase} from "../../database/db.js"

connectToDatabase();

const authorQueryResolvers = {
  Query: {
    getAuthors: async () => {
      try{
        return await Author.find();
      } catch (error) {
        throw new Error('Failed to find authors.');
      }
    },
    getAuthorsById: async (_, { id }) => {
      try{
        const author = await Author.findById(id);
        if(!author) {
          throw new Error('Author not found');
        }
        return author;
      } catch (error) {
        throw new Error('Failed to find author');
      }
    },
  },
};

export default authorQueryResolvers
