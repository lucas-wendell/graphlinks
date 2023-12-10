import { useForm } from 'react-hook-form';
import { type AddLinkFormData, addLinkFormSchema } from '../schema';

import { useSession } from 'next-auth/react';
import { createLinkAction } from '../action';
import { zodResolver } from '@hookform/resolvers/zod';

export const useAddLinkForm = () => {
	const { data: session } = useSession();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<AddLinkFormData>({
		resolver: zodResolver(addLinkFormSchema),
	});

	const onSubmit = (data: AddLinkFormData) => {
		const id = session?.user.id;
		const jwt = session?.jwt;

		if (!id || !jwt) return;

		createLinkAction({
			title: data.name,
			link: data.url,
			svgIcon: '',
			userID: id,
			userToken: jwt,
		});
		reset();
	};

	return {
		onSubmit: handleSubmit(onSubmit),
		register,
		errors,
	};
};
