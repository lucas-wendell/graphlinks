import type { ButtonHTMLAttributes } from 'react';

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {};

const NavbarButton: React.FC<Props> = ({ ...rest }) => {
	return <button {...rest}></button>;
};

export default NavbarButton;
