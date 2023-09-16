import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { type LoginUserFormData } from '../schema';

export const useLogin = () => {
	const router = useRouter();

	const login = async ({ email, password }: LoginUserFormData) => {
		const result = await signIn('credentials', {
			email,
			password,
			redirect: false,
			callbackUrl: '/admin',
		});

		if (result?.error) {
			router.push(`login/?modal=true&title=${result.error}`);
			return;
		}
		router.replace('/admin');
	};

	return { login };
};
