import Image from 'next/image';
import logoSquare from '../../../../../public/assets/logo-square.svg';
export type Props = {};

const Navbar: React.FC<Props> = ({}) => {
	return (
		<div className="flex items-center justify-between w-full py-4 px-5 rounded-full bg-ghost-gray">
			<div className="">
				<Image src={logoSquare} width={40} height={40} alt="logo icon" />
				<nav></nav>
			</div>
		</div>
	);
};

export default Navbar;
