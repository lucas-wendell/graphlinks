type ResponseError = {
	data: null;
	error: {
		status: number;
		name: string;
		message: string;
		details: {
			errors: [
				{
					path: Array<string>;
					message: string;
					name: string;
				},
			];
		};
	};
};

type ResponseSuccess = {
	jwt: string;
	user: {
		id: number;
		username: string;
		email: string;
		provider: string;
		confirmed: boolean;
		blocked: boolean;
		createdAt: string;
		updatedAt: string;
		name: string | null;
		bio: string | null;
	};
};

export type Credentials = {
	email: string;
	password: string;
};

export type Response = ResponseSuccess | ResponseError;
