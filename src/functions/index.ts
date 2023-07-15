import { APP_ROUTES } from '../constants/app-routes';

export const routeIsPublic = (asPath: string) => {
	const publicRoutes = Object.values(APP_ROUTES.public);

	return publicRoutes.includes(asPath);
};

export const checkUserAuthenticated = () => {
	let userToken;

	if (typeof window !== 'undefined') {
		userToken = localStorage.getItem('user') || '';
	}

	return !!userToken;
};
