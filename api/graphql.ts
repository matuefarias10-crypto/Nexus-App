import { ApolloServer } from 'apollo-server';
import { schema } from '../schema';

const server = new ApolloServer({
  schema,
  introspection: true,
  cache: 'bounded',
  plugins: {
    didResolveOperation(requestContext) {
      console.log('Operation:', requestContext.operationName);
    },
  },
});

// Export handler for Vercel serverless functions
export default server.createHandler();
