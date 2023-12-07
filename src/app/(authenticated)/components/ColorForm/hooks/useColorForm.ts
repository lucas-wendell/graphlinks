import { zodResolver } from '@hookform/resolvers/zod';
import { type ColorFormData, colorFormSchema } from '../schema';

import { useForm } from 'react-hook-form';
import { useContext } from 'react';

import { ColorPicketWidgetContext } from '../../../../../app/(authenticated)/contexts/ColoPickerWidget';

export const useColorForm = () => {
	const { color, setColor } = useContext(ColorPicketWidgetContext);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ColorFormData>({
		mode: 'onBlur',
		reValidateMode: 'onChange',
		criteriaMode: 'firstError',
		values: { hexacode: color },
		resolver: zodResolver(colorFormSchema),
	});

	const onSubmit = ({ hexacode }: ColorFormData) => setColor(hexacode);

	return {
		onSubmit,
		handleSubmit,
		errors,
		register,
	};
};
