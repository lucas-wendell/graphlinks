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

export type LinkFormSchema = z.infer<typeof linkFormSchema>;

const LinkForm: React.FC<Props> = ({}) => {
	const formRef = useRef<null | HTMLFormElement>(null);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LinkFormSchema>({
		resolver: zodResolver(linkFormSchema),
	});

	const onSubmit = ({ name, link }: LinkFormSchema) => {
		console.log({ name, link });
	};

	return (
		<form
			ref={formRef}
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col gap-2 max-[345px]:gap-1"
		>
			<LinkInput<LinkFormSchema>
				register={register}
				error={errors.name?.message}
				name="name"
				onBlur={() => formRef.current?.submit()}
			/>
			<LinkInput<LinkFormSchema>
				register={register}
				error={errors.link?.message}
				name="link"
				link="https://github.com"
				onBlur={() => formRef.current?.submit()}
			/>
		</form>
	);
};

export default LinkForm;
