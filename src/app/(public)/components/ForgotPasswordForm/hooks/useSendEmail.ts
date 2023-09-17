import { type ForgotPasswordFormData } from '../schema';
import { forgotPassword } from '../../../../../service/forgot-password';

import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

export const useSendEmail = () => {
	const router = useRouter();

	const sendEmail = async ({ email }: ForgotPasswordFormData) => {
		const response = await forgotPassword(email);
		if (response.isOk) {
			setCookie('recoveryEmail', email, { secure: true });
			router.push('/forgot-password/recovery-code');
		}
	};

	return { sendEmail };
};
