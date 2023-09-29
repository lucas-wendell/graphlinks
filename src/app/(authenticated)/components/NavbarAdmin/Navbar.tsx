import Link from 'next/link';
import Image from 'next/image';

import { NavbarButtonCompositon } from '../NavbarButton';
import logoSquare from '../../../../../public/assets/logo-square.svg';
import { NavBarComposition } from '../Navbar';

export type Props = {};

const Navbar: React.FC<Props> = ({}) => {
	return (
		<div className="fixed top-3 left-3 right-3">
			<NavBarComposition.Root>
				<NavBarComposition.Nav logo={true}>
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
				</NavBarComposition.Nav>
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
			</NavBarComposition.Root>
		</div>
	);
};

export default Navbar;
