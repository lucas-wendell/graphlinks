'use client';

import React from 'react';
import Input from '../../../../app/shared-components/Input/Input';

import ColorButton from '../ColorButton/ColorButton';

import { type ColorFormData } from './schema';
import { useColorForm } from './hooks/useColorForm';

export type Props = {};

const ColorForm: React.FC<Props> = ({}) => {
	const { onSubmit, handleSubmit, errors, register } = useColorForm();
	return (
		<form
			className="flex items-center w-full gap-2"
			onSubmit={handleSubmit(onSubmit)}
		>
			<ColorButton />
			<Input<ColorFormData>
				type="text"
				placeholder="Color Hexacode"
				register={register}
				name="hexacode"
				error={errors.hexacode?.message}
				registerOptions={{ onBlur: handleSubmit(onSubmit) }}
			/>
		</form>
	);
};

export default ColorForm;
