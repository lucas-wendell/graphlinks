import Link from 'next/link';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { tv } from 'tailwind-variants';

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: ReactNode;
	styleType: 'primary' | 'secondary';
	goTo: string;
};

const button = tv({
	base: 'font-semibold duration-150 transition-colors ease-in hover:bg-french-gray/20 flex justify-center items-center rounded-md gap-1 py-2 px-3 max-[400px]:py-1 max-[400px]:px-2 text-sm max-[400px]:text-xs',
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
