import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import { useSelector } from 'react-redux';
import { Loader } from './loader';

const withUnAuth = (WrappedComponent) => {
	const HOC = (props) => {
		const [loading, setLoading] = useState(true);
		const { isLoggedIn } = useSelector(state => state.auth)

		useEffect(() => {
			if (isLoggedIn) {
				Router.push('/dashboard');
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

export default withUnAuth;
