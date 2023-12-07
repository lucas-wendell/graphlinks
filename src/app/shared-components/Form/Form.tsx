'use client';

import type { FormHTMLProps } from '../../../utils/shared-types/HTMLTypes';
import type { ReactNode } from 'react';

type FormProps = FormHTMLProps & { children: ReactNode };

const Form: React.FC<FormProps> = ({ children, ...rest }) => (
	<form className="w-full" {...rest}>
		{children}
	</form>
);

export default Form;
