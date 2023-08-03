import { Card, Form } from "react-bootstrap";
import Layout from "../../components/Layouts/Layout"


const About = () => {

    return (
        <Layout>

            <div className="contact-form h-100 m-auto d-flex align-items-center justify-content-center">
                <Card className="">
                    <Card.Header>
                        Contact Us
                    </Card.Header>
                    
                    <Card.Body>
                        <Form.Control placeholder="Name" className="mb-3" />
                        <Form.Control placeholder="Email" className="mb-3" />

                        <Form.Control as='textarea' cols={50} rows={8} placeholder="Enter Message" className="mb-3" />
                    </Card.Body>

                </Card>
            </div>

        </Layout>
    )

}

export default About;