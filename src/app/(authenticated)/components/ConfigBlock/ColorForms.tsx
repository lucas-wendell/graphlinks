import React from 'react';

type Props = { children: React.ReactNode };

const ColorForms: React.FC<Props> = ({ children }) => {
	return <div className="flex flex-col gap-4">{children}</div>;
};

export default ColorForms;
