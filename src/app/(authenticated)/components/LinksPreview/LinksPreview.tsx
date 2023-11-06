'use client';

import React from 'react';
import LinksPrototype, {
	type Props as LinksPrototypeProps,
} from '../LinksPrototype/LinksPrototype';
import { transformCamelCase } from './utils/transformCamelCase';

export type Props = {
	type: LinksPrototypeProps['styleType'];
};

const LinksPreview: React.FC<Props> = ({ type = 'fill' }) => {
	const borders: Array<LinksPrototypeProps['borderRadius']> = [
		'normal',
		'rounded',
		'fullRounded',
	];

	return (
		<div>
			<p className="text-jet capitalize mb-2">{transformCamelCase(type)}</p>
			<div className="flex flex-wrap gap-3">
				{borders.map((border, index) => (
					<LinksPrototype
						borderRadius={border}
						isActive={border === 'rounded'}
						styleType={type}
						key={`${border}-${index}`}
					/>
				))}
			</div>
		</div>
	);
};

export default LinksPreview;
