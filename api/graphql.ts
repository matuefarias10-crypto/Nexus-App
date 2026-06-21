import { ApolloServer } from 'apollo-server';
import { schema } from '../schema';
import { VercelRequest, VercelResponse } from '@vercel/node';

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

const startServer = server.start();

export default async (req: VercelRequest, res: VercelResponse) => {
  await startServer;
  await server.createHandler()(req, res);
};

export const config = {
  runtime: 'nodejs18.x',
};
