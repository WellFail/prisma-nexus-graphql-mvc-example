import path from 'path';
import { makeSchema } from '@nexus/schema';

import * as types from './types';

export const rawSchema = makeSchema({
  types,
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '@prisma/client',
        alias: 'prismaClient',
      },
      {
        source: require.resolve('../context'),
        alias: 'Context',
      },
    ],
  },
  outputs: {
    typegen: path.join(__dirname, '../../generated/typings.ts'),
    schema: path.join(__dirname, '../../generated/schema.graphql'),
  },
  nonNullDefaults: {
    input: false,
    output: false,
  },
});

export default rawSchema;
