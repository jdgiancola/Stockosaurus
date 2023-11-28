import React from 'react';
import { Container, Card } from 'react-bootstrap';
import '../Styles/About.css';

const AboutPage = () => {
    return (
        <div>
            <Container className="d-flex flex-column justify-content-center align-items-center">

                <Card id="aboutus" className="card mt-4 glass-container">
                    <Card.Body className="">
                        <Card.Text className="">About Us</Card.Text>
                        <Card.Title className="">#1 INVENTORY SOLUTION</Card.Title>
                        <Card.Text className="">"At Stockosaurus, our mission is to revolutionize the world of inventory
                            management and bring it
                            out
                            of the Stone-Age. We strive to provide businesses of all sizes with a powerful, intuitive, and
                            cost-effective app that simplifies the complexities of inventory tracking and management. Our
                            commitment lies in offering innovative features that save time, reduce errors, and enhance
                            operational efficiency. By empowering businesses with real-time data analysis and seamless
                            integration capabilities, we aim to be the backbone of inventory control, helping our clients to
                            thrive in an ever-changing economic landscape. We believe in making inventory management not
                            just a
                            necessity but a strategic advantage for our clients, fostering growth and success in their
                            endeavors."
                        </Card.Text>
                        <p>-Your Stockosaurus Team</p>
                        <img src="" alt="" />
                    </Card.Body>
                </Card>
            </Container>
        </div >
    );
}

export default AboutPage;
