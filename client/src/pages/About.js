import React from 'react';
import '../Styles/About.css';

const AboutPage = () => {
    return (
        <div>
            <body className="d-flex flex-column justify-content-center align-items-center">
                <section className="container px-4 glass-container rounded-5 mt-5 p-3 mb-5">
                    <div className="row">
                        <div className="col">
                            <h5 id="title" className="text-white">STOCKOSAURUS</h5>
                        </div>
                        <div className="col">
                            <a href="#" className="btn rounded-5">Login</a>
                            <a href="#" className="btn rounded-5 ms-3">Sign Up</a>
                        </div>
                        <div className="col">
                            <img src="" alt="" />
                        </div>
                    </div>
                </section>

                <section id="aboutus" className="card mt-4 glass-container">
                    <div className="card-body">
                        <h5 className="card-text">About Us</h5>
                        <h1 className="card-title">#1 INVENTORY SOLUTION</h1>
                        <p className="card-text">"At Stockosaurus, our mission is to revolutionize the world of inventory
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
                            endeavors."</p>
                        <p>-Your Stockosaurus Team</p>
                        <img src="" alt="" />
                    </div>
                </section>
            </body>
        </div>
    );
}

export default AboutPage;
