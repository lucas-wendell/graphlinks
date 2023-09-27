'use client';

import React from 'react';
import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { FormComposition } from '../../../shared-components/Form';
import Input from '../../../shared-components/Input/Input';
import Button from '../../../shared-components/Button/Button';

export const addLinkFormSchema = z.object({
	name: z.string().nonempty('Name is a required field'),
	url: z.string().nonempty('Url is a required field'),
});

export type AddLinkFormData = z.infer<typeof addLinkFormSchema>;

export type Props = {};

const AddLinkForm: React.FC<Props> = ({}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AddLinkFormData>({
		resolver: zodResolver(addLinkFormSchema),
	});
	return (
		<FormComposition.Form>
			<FormComposition.Inputs>
				<Input<AddLinkFormData>
					name="name"
					type="text"
					placeholder="Name"
					register={register}
					error={errors.name?.message}
				/>
				<Input<AddLinkFormData>
					name="url"
					type="text"
					placeholder="Url"
					register={register}
					error={errors.url?.message}
				/>
			</FormComposition.Inputs>
			<FormComposition.Actions>
				<Button text="Add Link" />
			</FormComposition.Actions>
		</FormComposition.Form>
	);
};

export default AddLinkForm;
