import React from 'react';
import Image from 'next/image';

import LoginForm from '../components/LoginForm/Form';
import Link from 'next/link';

import { ModalCompositon } from '../components/Modal';
import { getServerSession } from 'next-auth';

import { authOptions } from '../../../utils/authOptions';
import PageFormTemplate from '../components/PageFormTemplate/PageFormTemplate';

export type LoginProps = {
	searchParams: Record<string, string | null | undefined>;
};

const Login: React.FC<LoginProps> = async ({ searchParams }) => {
	const modalIsVisible = searchParams?.modal;

	if (modalIsVisible) {
		const session = await getServerSession(authOptions);
		console.log(session);
	}

	return (
		<>
			<PageFormTemplate>
				<div className="mt-20">
					<div className="text-center text-gunmetal">
						<h1 className="text-5xl [word-spacing:-20px] font-semibold uppercase max-md-phone:text-4xl max-md-phone:[word-spacing:-5px]">
							Welcome back
						</h1>
						<p className="max-md-phone:text-sm">Log in to your Graphlinks</p>
					</div>
				</div>
				<LoginForm />
			</PageFormTemplate>

			{modalIsVisible && (
				<ModalCompositon.Root>
					<ModalCompositon.Modal>
						<ModalCompositon.Content
							title={
								searchParams?.title
									? searchParams?.title
									: 'Uncaught Error, try again!'
							}
							content={
								searchParams?.title
									? ''
									: 'Try again or contact teste@gmail.com'
							}
						>
							<Image
								src="/assets/warning-illustration.svg"
								alt="asdasd"
								width={200}
								height={200}
							/>
						</ModalCompositon.Content>
						<ModalCompositon.Actions>
							<Link href="/login">
								<ModalCompositon.Action
									styleType="primary"
									type="button"
									title="Go Back"
									aria-label="Go Back"
								>
									Go Back
								</ModalCompositon.Action>
							</Link>
						</ModalCompositon.Actions>
					</ModalCompositon.Modal>
				</ModalCompositon.Root>
			)}
		</>
	);
};

export default Login;
