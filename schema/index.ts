import { objectType, queryType, makeSchema } from '@nexus/schema';

const Query = queryType({
  definition(t) {
    t.string('hello', {
      args: {
        name: {
          type: 'String',
          required: false,
        },
      },
      resolve: (_root, { name }) => {
        return `Hello ${name || 'World'}!`;
      },
    });
  },
});

export const schema = makeSchema({
  types: [Query],
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: __dirname + '/../schema.types.ts',
  },
});
