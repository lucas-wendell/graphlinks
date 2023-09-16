import { ReactNode } from 'react';

type TextContentProps = {
	children: ReactNode;
};

const TextContent: React.FC<TextContentProps> = ({ children }) => {
	return <p className="capitalize">{children}</p>;
};

export default TextContent;
