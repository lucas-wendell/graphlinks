import { useForm } from 'react-hook-form';
import { type LinkFormData, linkFormSchema } from '../schema';
import { zodResolver } from '@hookform/resolvers/zod';

export const useLinkForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LinkFormData>({
		mode: 'onBlur',
		reValidateMode: 'onChange',
		resolver: zodResolver(linkFormSchema),
	});

	const onSubmit = ({ name, link }: LinkFormData) => {
		console.log({ name, link });
	};

	return {
		register,
		onSubmit: handleSubmit(onSubmit),
		errors,
	};
};
