'use client';

import React from 'react';
import Input from '../../../../app/shared-components/Input/Input';

import ColorButton from '../ColorButton/ColorButton';

import { type ColorFormData } from './schema';
import { useColorForm } from './hooks/useColorForm';

export type Props = { name: string };

const ColorForm: React.FC<Props> = ({ name }) => {
	const { onSubmit, handleSubmit, errors, register } = useColorForm();
	return (
		<form
			className="flex flex-col w-full gap-1"
			onSubmit={handleSubmit(onSubmit)}
		>
			<p className="text-jet font-semibold uppercase">{name}</p>
			<div className="flex items-center gap-2">
				<ColorButton />
				<Input<ColorFormData>
					type="text"
					placeholder="Color Hexacode"
					register={register}
					name="hexacode"
					error={errors.hexacode?.message}
					registerOptions={{ onBlur: handleSubmit(onSubmit) }}
				/>
			</div>
		</form>
	);
};

export default ColorForm;
