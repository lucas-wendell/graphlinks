export type UserData = {
	id: string;
	email: string;
	response: {
		user: {
			id: string;
			username: string;
			email: string;
			confirmed: boolean;
			blocked: boolean;
		};
		jwt: string;
	};
};
