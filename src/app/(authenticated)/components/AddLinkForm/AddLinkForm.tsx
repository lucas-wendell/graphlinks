'use client';

import React from 'react';
import type { AddLinkFormData } from './schema';

import Input from '../../../shared-components/Input/Input';
import Button from '../../../shared-components/Button/Button';

import { useAddLinkForm } from './hooks/useAddLinkForm';
import { FormComposition } from '../../../shared-components/Form';

export type Props = {};

const AddLinkForm: React.FC<Props> = ({}) => {
	const { errors, onSubmit, register } = useAddLinkForm();

	return (
		<FormComposition.Form onSubmit={onSubmit}>
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
