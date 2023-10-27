type Params = {
	type: 'fill' | 'outline' | 'softShadow' | 'hardShadow';
	bgColor: string;
	textColor: string;
};

export const useHover = ({ type, bgColor, textColor }: Params) => ({
	onMouseOver: (e: any) => {
		const target = e.target as HTMLLinkElement;
		target.style.backgroundColor = type === 'outline' ? bgColor : 'transparent';

		target.style.color = type !== 'outline' ? bgColor : textColor;
	},
	onMouseOut: (e: any) => {
		const target = e.target as HTMLLinkElement;
		target.style.backgroundColor = type === 'outline' ? 'transparent' : bgColor;
		target.style.color = textColor;
	},
});
