'use client';

import type { ReactNode, FormHTMLAttributes } from 'react';

type FormProps = FormHTMLAttributes<HTMLFormElement> & { children: ReactNode };

const Form: React.FC<FormProps> = ({ children, ...rest }) => (
	<form className="w-full" {...rest}>
		{children}
	</form>
);

export default Form;
