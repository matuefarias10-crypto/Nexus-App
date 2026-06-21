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
export default async (req: any, res: any) => {
  if (!server.startedInBackground) {
    await server.start();
  }

  const handler = server.createHandler();
  return handler(req, res);
};

// For local development
if (process.env.NODE_ENV !== 'production') {
  server.listen({ port: 4000 }, () => {
    console.log(`🚀 Server ready at http://localhost:4000/`);
  });
}
