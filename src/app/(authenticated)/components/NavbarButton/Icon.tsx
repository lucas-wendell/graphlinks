import dynamic from 'next/dynamic';
import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

interface IconProps extends LucideProps {
	name: keyof typeof dynamicIconImports;
}

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
	const LucideIcon = dynamic(dynamicIconImports[name]);

	return <LucideIcon className="max-[400px]:w-4 max-[400px]:h-4 " {...props} />;
};

export default Icon;
