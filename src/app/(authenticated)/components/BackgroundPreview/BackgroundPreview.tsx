import React from 'react';
import { transformCamelCase } from '../../../../utils/transformCamelCase';
import type { Props as UserBackgroundProps } from '../../../user-components/UserBackground/UserBackground';
import BackgroundPrototype from '../BackgroundPrototype/BackgroundPrototype';
export type Props = {};

const BackgroundPreview: React.FC<Props> = ({}) => {
	const backgroundsType: Array<UserBackgroundProps['type']> = [
		'flat',
		'gradient',
	];

	return (
		<div>
			<div className="flex flex-wrap gap-3">
				{backgroundsType.map((backgroundsType, index) => (
					<BackgroundPrototype
						key={`${backgroundsType}-${index}`}
						isActive={backgroundsType === 'gradient'}
						styleType={backgroundsType}
					/>
				))}
			</div>
		</div>
	);
};

export default BackgroundPreview;
