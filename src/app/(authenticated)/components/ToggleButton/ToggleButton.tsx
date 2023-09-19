'use client';

import React from 'react';

export type Props = {};

const ToggleButton: React.FC<Props> = ({}) => {
	return (
		<button className="absolute bg-dark-spring-green rounded-full py-0.5 w-14">
			<span></span>
		</button>
	);
};

export default ToggleButton;
