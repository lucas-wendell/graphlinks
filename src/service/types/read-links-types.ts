export type Data = {
	userToken: string;
};

export type Response = {
	findUserLinks: Array<{
		id: string;
		attributes: {
			isActive: boolean;
			title: string;
			link: string;
			svgIcon: string;
			createdAt: string;
			updatedAt: string;
		};
	}>;
};
