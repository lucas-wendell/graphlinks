import Link from 'next/link';
import Image from 'next/image';

import { NavbarButtonCompositon } from '../NavbarButton';
import logoSquare from '../../../../../public/assets/logo-square.svg';

export type Props = {};

const Navbar: React.FC<Props> = ({}) => {
	return (
		<div className="flex items-center justify-between w-full py-4 px-5 rounded-full bg-ghost-gray">
			<div className="flex items-center justify-center gap-3">
				<Image src={logoSquare} width={30} height={30} alt="logo icon" />
				<nav className="flex items-center justify-center">
					<NavbarButtonCompositon.Root
						styleType="primary"
						goTo="https://github.com/lucas-wendell"
					>
						<NavbarButtonCompositon.Icon name="link" size={18} />
						<NavbarButtonCompositon.TextContent>
							links
						</NavbarButtonCompositon.TextContent>
					</NavbarButtonCompositon.Root>

					<NavbarButtonCompositon.Root
						styleType="secondary"
						goTo="https://github.com/lucas-wendell"
					>
						<NavbarButtonCompositon.Icon name="pencil-ruler" size={18} />
						<NavbarButtonCompositon.TextContent>
							appearance
						</NavbarButtonCompositon.TextContent>
					</NavbarButtonCompositon.Root>
				</nav>
			</div>
			<Link
				href="https://github.com/lucas-wendell"
				className="p-0.5 border-2 border-transparent duration-150 transition-colors ease-in hover:border-french-gray rounded-full"
			>
				<Image
					className="rounded-full"
					src={logoSquare}
					width={35}
					height={35}
					alt="user image"
				/>
			</Link>
		</div>
	);
};

export default Navbar;
