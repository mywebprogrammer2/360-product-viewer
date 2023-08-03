import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import { useSelector } from 'react-redux';
import { Loader } from './loader';

const withAuth = (WrappedComponent) => {
	const HOC = (props) => {
		const [loading, setLoading] = useState(true);
		const { isLoggedIn, accessToken, user } = useSelector(state => state.auth)

		useEffect(() => {
			console.log("isLoggedIn, accessToken, user",isLoggedIn, accessToken, user)
			if (!isLoggedIn) {
				Router.push('/login');
			} else {
				setLoading(false);

			}
		}, []);

		if (loading) {
			return <Loader />;
		}
		return <WrappedComponent {...props} />;
	};

	HOC.getInitialProps = async (ctx) => {
		const componentProps =
			WrappedComponent.getInitialProps &&
			(await WrappedComponent.getInitialProps(ctx));

		return { ...componentProps };
	};

	return HOC;
};

export default withAuth;
