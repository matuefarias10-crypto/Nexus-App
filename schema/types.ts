import { objectType, queryType, stringArg } from '@nexus/schema';

export const Query = queryType({
  definition(t) {
    t.string('hello', {
      args: {
        name: stringArg({ default: 'World' }),
      },
      resolve: (_, { name }) => `Hello ${name}!`,
    });

    t.field('info', {
      type: 'String',
      resolve: () => 'Welcome to Nexus GraphQL App on Vercel! 🚀',
    });
  },
});

export const User = objectType({
  name: 'User',
  definition(t) {
    t.string('id');
    t.string('name');
    t.string('email');
  },
});
