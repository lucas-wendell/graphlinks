'use client';

import React, { useRef } from 'react';
import LinkInput from '../LinkInput/LinkInput';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export type Props = {};

export const linkFormSchema = z.object({
	link: z.string().nonempty('You must provide a link'),
	name: z.string().nonempty('You must indentifier your link'),
});

export type LinkFormData = z.infer<typeof linkFormSchema>;

const LinkForm: React.FC<Props> = ({}) => {
	const formRef = useRef<null | HTMLFormElement>(null);

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

	return (
		<form
			ref={formRef}
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col gap-2 max-[345px]:gap-1"
		>
			<LinkInput<LinkFormData>
				register={register}
				error={errors.name?.message}
				name="name"
				registerOptions={{ onBlur: handleSubmit(onSubmit) }}
			/>
			<LinkInput<LinkFormData>
				register={register}
				error={errors.link?.message}
				name="link"
				link="https://github.com"
				registerOptions={{ onBlur: handleSubmit(onSubmit) }}
			/>
		</form>
	);
};

export default LinkForm;
