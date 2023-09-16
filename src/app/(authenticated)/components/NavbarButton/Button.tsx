import Link from 'next/link';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { tv } from 'tailwind-variants';

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: ReactNode;
	styleType: 'primary' | 'secondary';
	goTo: string;
};

const button = tv({
	base: 'font-semibold duration-150 transition-colors ease-in hover:bg-french-gray/20 flex justify-center items-center rounded-md gap-1 py-2 px-3 text-sm',
	variants: {
		color: {
			primary: 'text-jet',
			secondary: 'text-french-gray',
		},
	},
});

const NavbarButton: React.FC<Props> = ({
	children,
	styleType,
	goTo,
	...rest
}) => {
	return (
		<Link href={goTo}>
			<button className={button({ color: styleType })} {...rest}>
				{children}
			</button>
		</Link>
	);
};

export default NavbarButton;
