import { env } from '@/env';
import { GraphQLClient } from 'graphql-request';

export const client = new GraphQLClient(`${env.NEXT_PUBLIC_API_URL}/graphql`);
