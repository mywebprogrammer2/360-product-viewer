import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Layout from '../../components/Layouts/Layout'
import { login } from '../../redux/slices/authSlice'
import { useDispatch, useSelector } from 'react-redux';
import { FormIkErrorHandler } from '../../utils/functions';
import withUnAuth from '../../hoc/withUnAuth';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import styles from '../../styles/LoginStyles.module.css';

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    password: Yup.string()
        .required('Password is required'),
});

const LoginForm = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    useEffect(() => {
        if (isLoggedIn === true)
        router.push('/dashboard')
    }, [isLoggedIn])
    const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
        console.log("values", values)
        try {
            console.log("values", values)
            dispatch(login(values))
        } catch (error) {
            console.log("Error here")
            const { data } = error.response;
            FormIkErrorHandler(data.error, setFieldError)
        } finally {
            setSubmitting(false);
        }
    };

    console.log( "LoginForm" );

    return (
        <Layout>
            <div className="auth-form login-form">
                <div className="header">
                    <div className="text-primary text-center p-2">
                        <h3 className="font-size-20">Admin Log in</h3>
                    </div>
                </div>
                <div className="body">
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting, touched, errors }) => (
                            <Form className="p-4">
                                <div className="mb-3">
                                    {/* <label htmlFor="email" className="form-label">Email</label> */}
                                    <Field type="email" name="email" id="email" className={`form-control ${touched.email && errors.email ? 'is-invalid' : ''}`} placeholder="Email address" />
                                    <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                </div>
                                <div className="mb-3">
                                    {/* <label htmlFor="password" className="form-label">Password</label> */}
                                    <Field type="password" name="password" id="password" className={`form-control ${touched.password && errors.password ? 'is-invalid' : ''}`} placeholder="Password" />
                                    <ErrorMessage name="password" component="div" className="invalid-feedback" isInvalid={touched.password && errors.password}/>
                                </div>
                                <button type="submit" className="btn btn-primary my-blue w-100" disabled={isSubmitting}>
                                    {isSubmitting ? 'Logging in...' : 'Log in'}
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </Layout>
    );
};


export default withUnAuth(LoginForm)