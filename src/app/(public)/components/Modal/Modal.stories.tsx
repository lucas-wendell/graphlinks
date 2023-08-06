import { Meta, StoryObj } from '@storybook/react';
import { ModalCompositon } from './index';
import { ModalRootProps } from './ModalRoot';
import Image from 'next/image';
import warningIllustration from '../../../../../public/assets/warning-illustration.svg'; // To work on storybook

export default {
	component: ModalCompositon.Root,
	title: 'Utils/Modal',
	tags: ['autodocs'],
} as Meta<ModalRootProps>;

export const SimpleModal = () => (
	<ModalCompositon.Root>
		<ModalCompositon.Modal>
			<ModalCompositon.Header />
			<ModalCompositon.Content
				title="Lorem ipsum dolor sit."
				content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
			ipsum! Debitis nostrum suscipit sunt praesentium."
			/>
		</ModalCompositon.Modal>
	</ModalCompositon.Root>
);

export const ModalWithActions = () => (
	<ModalCompositon.Root>
		<ModalCompositon.Modal>
			<ModalCompositon.Header />
			<ModalCompositon.Content
				title="Lorem ipsum dolor sit."
				content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
			ipsum! Debitis nostrum suscipit sunt praesentium."
			>
				<Image
					src={warningIllustration}
					alt="asdasd"
					width={200}
					height={200}
				/>
			</ModalCompositon.Content>
			<ModalCompositon.Actions>
				<ModalCompositon.Action
					title="Variant 2"
					aria-label="Variant 2"
					styleType="secondary"
				>
					Variant 2
				</ModalCompositon.Action>
				<ModalCompositon.Action
					title="Variant 1"
					aria-label="Variant 1"
					styleType="primary"
				>
					Variant 1
				</ModalCompositon.Action>
			</ModalCompositon.Actions>{' '}
		</ModalCompositon.Modal>
	</ModalCompositon.Root>
);

export const ModalWithAction = () => (
	<ModalCompositon.Root>
		<ModalCompositon.Modal>
			<ModalCompositon.Header />
			<ModalCompositon.Content
				title="Lorem ipsum dolor sit."
				content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
			ipsum! Debitis nostrum suscipit sunt praesentium."
			>
				<Image
					src={warningIllustration}
					alt="asdasd"
					width={200}
					height={200}
				/>
			</ModalCompositon.Content>
			<ModalCompositon.Actions>
				<ModalCompositon.Action
					title="Variant 1"
					aria-label="Variant 1"
					styleType="primary"
				>
					Variant 1
				</ModalCompositon.Action>
			</ModalCompositon.Actions>{' '}
		</ModalCompositon.Modal>
	</ModalCompositon.Root>
);

export const ModalWithoutHeader = () => (
	<ModalCompositon.Root>
		<ModalCompositon.Modal>
			<ModalCompositon.Content
				title="Lorem ipsum dolor sit."
				content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
			ipsum! Debitis nostrum suscipit sunt praesentium."
			>
				<Image
					src={warningIllustration}
					alt="asdasd"
					width={200}
					height={200}
				/>
			</ModalCompositon.Content>
			<ModalCompositon.Actions>
				<ModalCompositon.Action
					styleType="secondary"
					title="Variant 2"
					aria-label="Variant 2"
				>
					Variant 2
				</ModalCompositon.Action>
				<ModalCompositon.Action
					title="Variant 1"
					aria-label="Variant 1"
					styleType="primary"
				>
					Variant 1
				</ModalCompositon.Action>
			</ModalCompositon.Actions>
		</ModalCompositon.Modal>
	</ModalCompositon.Root>
);
