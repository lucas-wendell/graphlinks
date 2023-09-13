import { client } from '@/graphql/client';
import { GQL_MUTATION_FORGOT_PASSWORD } from '@/graphql/mutations/forgot-password';

export const forgotPassword = async (email: string) => {
	const data = await client.request(GQL_MUTATION_FORGOT_PASSWORD, { email });

	return data;
};
