import Author from '../../models/author.js'
import {connectToDatabase} from "../../database/db.js"

connectToDatabase();


const authorMutationResolvers = {
  Mutation: {
    addAuthor: async (_, { name }) => {
      try{ 
        const author = new Author({ name, books });
        await author.save();
        return author;
      } catch (error){
        throw new Error('Failed to add author');
      }
    },
    deleteAuthor: async (_, { id }) => {
      try{
        const deletedAuthor =   await Author.findByIdAndDelete(id);
        return deletedAuthor;
      } catch (error) {
        throw new Error('Failed to delete author');
      }
    },
  },
};

export default authorMutationResolvers
