import React from 'react';

export type Props = {
	type: 'flat' | 'gradient';
	primaryColor: string;
	secondColor?: string;
	gradientOrientation?: 'up' | 'down';
};

const UserBackground: React.FC<Props> = ({
	type,
	primaryColor,
	secondColor,
	gradientOrientation,
}) => {
	const gradient = `linear-gradient(180deg, ${
		gradientOrientation === 'up' ? secondColor : primaryColor
	} 0%, ${gradientOrientation === 'down' ? secondColor : primaryColor} 100%`;

	return (
		<div
			style={{
				background: type === 'flat' ? primaryColor : gradient,
			}}
			className="min-h-screen min-w-screen"
		/>
	);
};

export default UserBackground;
