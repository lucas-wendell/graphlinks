import React, { type ReactNode } from 'react';

type InputsProps = {
	children: ReactNode;
};

const Inputs: React.FC<InputsProps> = ({ children }) => (
	<div className="flex flex-col gap-4">{children}</div>
);

export default Inputs;
