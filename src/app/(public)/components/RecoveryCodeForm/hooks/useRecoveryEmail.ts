import { type RecoveryCodeFormData } from '../schema';

import { getCookie, deleteCookie } from 'cookies-next';
import { resetPassword } from '../../../../../service/reset-password';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export const useRecoveryEmail = () => {
	const router = useRouter();

	const recoveryEmail = async ({
		code,
		password,
		passwordConfirmation,
	}: RecoveryCodeFormData) => {
		const email = getCookie('recoveryEmail');
		const response = await resetPassword({
			code,
			password,
			passwordConfirmation,
		});

		if ('error' in response) return null;

		const result = await signIn('credentials', {
			email: email,
			password: password,
			redirect: false,
			callbackUrl: '/admin',
		});

		if (result?.error) {
			router.push(
				`forgot-password/recovery-code/?modal=true&title=${result.error}`,
			);
			return;
		}

		deleteCookie('recoveryEmail');
		router.replace('/admin');
	};

	return { recoveryEmail };
};
