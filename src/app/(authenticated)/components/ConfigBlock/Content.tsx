import React from 'react';

type Props = { children: React.ReactNode };

const Content: React.FC<Props> = ({ children }) => {
	return <div className="flex flex-col gap-5">{children}</div>;
};

export default Content;
