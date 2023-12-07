import React from 'react';
import { ConfigBlockComposition } from '../../components/ConfigBlock';
import BackgroundPreview from '../../components/BackgroundPreview/BackgroundPreview';
import ColorForm from '../../components/ColorForm/ColorForm';
import LinksPreview, {
	Props,
} from '../../components/LinksPreview/LinksPreview';

const Appearance: React.FC = () => {
	const linksTypes: Array<Props['type']> = [
		'fill',
		'outline',
		'softShadow',
		'hardShadow',
	];

	return (
		<>
			<ConfigBlockComposition.Root name="backgrounds">
				<ConfigBlockComposition.Content>
					<BackgroundPreview />
				</ConfigBlockComposition.Content>

				<ConfigBlockComposition.ColorForms>
					<ColorForm name="background color" />
				</ConfigBlockComposition.ColorForms>
			</ConfigBlockComposition.Root>

			<ConfigBlockComposition.Root name="buttons">
				<ConfigBlockComposition.Content>
					{linksTypes.map((type, index) => (
						<LinksPreview key={`${type}-${index}`} type={type} />
					))}
				</ConfigBlockComposition.Content>

				<ConfigBlockComposition.ColorForms>
					<ColorForm name="button color" />
					<ColorForm name="button font color" />
				</ConfigBlockComposition.ColorForms>
			</ConfigBlockComposition.Root>
		</>
	);
};

export default Appearance;
