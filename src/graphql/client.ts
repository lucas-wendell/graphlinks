import { GraphQLClient } from 'graphql-request';

/**
 * Variable to initialize graphql client with graphql-request library
 * @summary Variable to initialize graphql client with graphql-request library
 *  */
export const client = new GraphQLClient(
	`${process.env.NEXT_PUBLIC_API_URL}/graphql`,
);
