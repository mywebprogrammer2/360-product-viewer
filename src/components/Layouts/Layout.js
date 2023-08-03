import Head from 'next/head'
import Header from '../Shared/Header'
import Sidebar from '../Sidebar'
import Footer from '../Shared/Footer'
import { Col, Container, Row } from 'react-bootstrap';
import { Main } from '../templates/Main';
import { Meta } from '../Shared/Meta/Meta';
import { useSelector } from 'react-redux';

const Layout = ({ children }) => {

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    return (
        <Main
            meta={
                <Meta
                    title="Tech Finder"
                    description="Tech finder description goes here for mechanics"
                />
            }
        >
            {/* { (isLoggedIn) && <Header /> } */}
            
            <Container fluid className="box">
                <Row className="content">
                    {
                        (isLoggedIn) && 
                        <Col md={3} className="sidebar">
                            <Sidebar />
                        </Col>
                    }
                    {
                        (isLoggedIn) && 
                        <Col md={9} className="inner-content">
                            {children}
                        </Col>
                    }
                    
                    {
                        (!isLoggedIn) && 
                        <Col md={12} className="main-content">
                            {children}
                        </Col>
                    }

                </Row>
            </Container>
            {/* <Footer /> */}
        </Main>
    );
};

export default Layout;
