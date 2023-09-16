import React from 'react';
import ForgotPasswordForm from '../components/ForgotPasswordForm/Form';
import { PageFormTemplate } from '../components/PageFormTemplate/PageFormTemplate';

export type ForgotPasswordProps = {
	searchParams: Record<string, string | null | undefined>;
};

const ForgotPassword: React.FC<ForgotPasswordProps> = async ({
	searchParams,
}) => {
	return (
		<PageFormTemplate>
			<div className="max-sm:text-center w-full text-jet">
				<h1 className="font-bold text-xl ">Forget something?</h1>
				<p className="text-sm">
					Enter your email to receive password reset instructions.
				</p>
			</div>
			<ForgotPasswordForm />
		</PageFormTemplate>
	);
};

export default ForgotPassword;
