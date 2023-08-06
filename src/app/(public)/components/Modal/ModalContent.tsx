import React, { ReactNode } from 'react';

type Props = { title: string; content?: string; children?: ReactNode };

const ModalContent: React.FC<Props> = ({ title, content, children }) => {
	return (
		<div className="flex items-center justify-center flex-col gap-3">
			{children}

			<div className="flex flex-col gap-2 text-center text-jet">
				<h2 className="font-bold text-crimson">{title}</h2>
				<p className="text-sm">{content}</p>
			</div>
		</div>
	);
};

export default ModalContent;
