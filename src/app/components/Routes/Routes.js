import React, { lazy, Suspense, useEffect } from 'react';
import {
	Route,
	Switch,
	Redirect,
	Router as BrowserRouter,
} from 'react-router-dom';

import { history } from 'system/history';
import { ProtectedRoute } from './components/ProtectedRoute';
import { AppLoader } from 'ui/AppLoader';
import { Modal } from 'components/Modal';
import { routes } from 'constants/routes';

const LoginPage = lazy(() =>
	import('pages/LoginPage').then(module => ({
		default: module.LoginPage,
	}))
);

const RedirectRoute = () => {
	const path = history.location.pathname.split('/')[1];
	const routesPaths = routes.map(
		route => route.basePath || route.path
	);

	useEffect(() => {
		if (
			path === '' ||
			!routesPaths.find(route => route.includes(path))
		)
			history.push('/customers');
	}, [path, routesPaths]);

	return null;
};

export const Routes = ({ loggedIn }) => {
	return (
		<BrowserRouter history={history}>
			<Modal />
			<Switch>
				<Suspense fallback={<AppLoader />}>
					{routes.map(route => (
						<ProtectedRoute
							key={route.id}
							path={route.path}
							component={route.component}
						/>
					))}
					{!loggedIn && (
						<Route path='/login' component={LoginPage} />
					)}
					{!loggedIn && <Redirect from='*' to='/login' />}
					{loggedIn && <Route component={RedirectRoute} />}
					{/* <Route render={() => <Redirect to='/students' />} /> */}
				</Suspense>
			</Switch>
		</BrowserRouter>
	);
};
