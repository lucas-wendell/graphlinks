import { useForm } from 'react-hook-form';
import { type LinkFormData, linkFormSchema } from '../schema';
import { zodResolver } from '@hookform/resolvers/zod';
// import { updateLink } from '@/service/crud-links/update-link';
import { useSession } from 'next-auth/react';
import { updateLinkAction } from '../action';

export const useLinkForm = (
	id: string,
	defaultTitle: string,
	defaultLink: string,
) => {
	const { data: session } = useSession();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LinkFormData>({
		mode: 'onBlur',
		reValidateMode: 'onChange',
		defaultValues: {
			name: defaultTitle,
			link: defaultLink,
		},
		resolver: zodResolver(linkFormSchema),
	});

	const onSubmit = ({ name, link }: LinkFormData) => {
		const jwt = session?.jwt;
		if (!jwt) return;

		// updateLink({ title: name, link, linkID: id, userToken: jwt });
		updateLinkAction({ title: name, link, linkID: id, userToken: jwt });
	};

	return {
		register,
		onSubmit: handleSubmit(onSubmit),
		errors,
	};
};
