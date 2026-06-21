import { makeSchema } from '@nexus/schema';
import * as types from './types';

export const schema = makeSchema({
  types,
  outputs: {
    schema: __dirname + '/schema.graphql',
    typegen: __dirname + '/typegen.ts',
  },
});
