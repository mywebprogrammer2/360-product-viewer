import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Container, Button, Form as BootstrapForm } from 'react-bootstrap';
import * as Yup from 'yup';
import Layout from '../../components/Layouts/Layout';
import axios from '../../lib/axios'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router';




const RegisterSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    password_confirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
});

const RegisterForm = () => {
    const router = useRouter();

    return (
        <Layout>
            <Container>
                <div className="auth-form register-form">
                    <div className="header">
                        <div className="text-primary text-center p-2">
                            <h3 className="text-primary font-size-20">Register</h3>
                        </div>
                    </div>

                    <div className="body">
                        <Formik
                            initialValues={{ name: '', email: '', password: '', password_confirmation: '' }}
                            validationSchema={RegisterSchema}
                            onSubmit={async (values, { setSubmitting }) => {
                                
                                axios.post(process.env.NEXT_PUBLIC_API_BASE_URL + '/auth/register', values)
                                    .then(response => {
                                        setSubmitting(false);
                                        // Handle successful response here
                                        // console.log('Registration successful:', response.data);
                                        
                                        Swal.fire({
                                            title: 'Success!',
                                            text: response.message,
                                            icon: 'success',
                                            showCancelButton: false,
                                            confirmButtonText: 'Okay',
                                          }).then(() => {
                                           router.push('/login');
                                          });
                                    })
                                    .catch(error => {
                                        // Handle error response here
                                        console.error('Registration failed:', error.response);
                                        // You can display an error message or perform other error handling actions
                                    });

                                }}
                        >
                            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                                <Form className="p-4" noValidate onSubmit={handleSubmit}>
                                    <BootstrapForm.Group controlId="name" className="mb-3">
                                        {/* <BootstrapForm.Label>Name</BootstrapForm.Label> */}
                                        <Field
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            value={values.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`form-control ${touched.name && errors.name ? 'is-invalid' : ''}`}
                                        />
                                        <ErrorMessage name="name" component="div" className="invalid-feedback" />
                                    </BootstrapForm.Group>

                                    <BootstrapForm.Group controlId="email" className="mb-3">
                                        {/* <BootstrapForm.Label>Email</BootstrapForm.Label> */}
                                        <Field
                                            type="email"
                                            name="email"
                                            placeholder="Email address"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`form-control ${touched.email && errors.email ? 'is-invalid' : ''}`}
                                        />
                                        <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                    </BootstrapForm.Group>

                                    <BootstrapForm.Group controlId="password" className="mb-3">
                                        {/* <BootstrapForm.Label>Password</BootstrapForm.Label> */}
                                        <Field
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`form-control ${touched.password && errors.password ? 'is-invalid' : ''}`}
                                        />
                                        <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                    </BootstrapForm.Group>

                                    <BootstrapForm.Group controlId="password_confirmation" className="mb-3">
                                        {/* <BootstrapForm.Label>Confirm Password</BootstrapForm.Label> */}
                                        <Field
                                            type="password"
                                            name="password_confirmation"
                                            
                                            placeholder="Confirm Password"
                                            value={values.password_confirmation}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`form-control ${touched.password_confirmation && errors.password_confirmation ? 'is-invalid' : ''}`}
                                        />
                                        <ErrorMessage name="password_confirmation" component="div" className="invalid-feedback" />
                                    </BootstrapForm.Group>

                                    <Button className="w-100 custom-btn " type="submit" disabled={isSubmitting}>
                                        Register
                                    </Button>
                                    <div className="text-primary text-center p-2">

                                        <a className='w-100 text-primary text-center'>Back to login</a>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </Container>
        </Layout>
    );
};

export default RegisterForm;
