'use client';

import React, { useEffect } from 'react';
import { APP_ROUTES } from '../../../constants/app-routes';

import { checkUserAuthenticated } from '../../../functions/index';
import { useRouter } from 'next/navigation';

type PrivateRouteProps = {
	children: React.ReactNode;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
	const route = useRouter();
	const userIsAuthenticated = checkUserAuthenticated();

	useEffect(() => {
		if (!userIsAuthenticated) {
			route.push(APP_ROUTES.public.login);
		}
	}, [userIsAuthenticated, route]);

	return (
		<>
			{!userIsAuthenticated && null}
			{userIsAuthenticated && children}
		</>
	);
};

export default PrivateRoute;
