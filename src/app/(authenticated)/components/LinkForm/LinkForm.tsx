'use client';

import React, { useRef } from 'react';
import LinkInput from '../LinkInput/LinkInput';

import type { LinkFormData } from './schema';
import { useLinkForm } from './hooks/useLinkForm';

export type Props = { defaultTitle: string; defaultLink: string };

const LinkForm: React.FC<Props> = ({ defaultTitle, defaultLink }) => {
	const formRef = useRef<null | HTMLFormElement>(null);
	const { errors, onSubmit, register } = useLinkForm();

	return (
		<form
			ref={formRef}
			onSubmit={onSubmit}
			className="flex flex-col gap-2 max-[345px]:gap-1"
		>
			<LinkInput<LinkFormData>
				register={register}
				error={errors.name?.message}
				name="name"
				registerOptions={{ onBlur: onSubmit }}
				value={defaultTitle}
			/>
			<LinkInput<LinkFormData>
				register={register}
				error={errors.link?.message}
				name="link"
				registerOptions={{ onBlur: onSubmit }}
				value={defaultLink}
			/>
		</form>
	);
};

export default LinkForm;
