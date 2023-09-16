import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

type UseLoginDependencies = { email: string; password: string };

export const useLogin = () => {
	const router = useRouter();

	const login = async ({ email, password }: UseLoginDependencies) => {
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
