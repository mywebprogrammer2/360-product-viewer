import { Card, Container, Row } from "react-bootstrap";
import Layout from "../../components/Layouts/Layout"

const About = () => {

    return (
        <Layout>

            <Row>
                <Container>
                    Hello
                </Container>
            </Row>
            
            
            <Card>
                <Card.Header>
                    About Us
                </Card.Header>
            </Card>
        </Layout>
    )

}

export default About;