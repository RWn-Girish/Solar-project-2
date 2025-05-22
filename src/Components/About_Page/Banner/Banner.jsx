import { Container } from 'react-bootstrap';
import "../Banner/Banner.css";
import bgImage from "../../../assets/images/Banner.svg";
import sunimg from "../../../assets/images/sun.svg";
import whyimg from "../../../assets/images/whyImage.png";
import Banner_card from './Banner_card';
import bgvision from "../../../assets/images/bgvision.png"
import { FaBinoculars } from "react-icons/fa";
import { useState } from 'react';


function Banner() {
    const [data, setData] = useState([
        {
            title: "Vision",
            image: <FaBinoculars />,
            description: "To develop innovations in the development of renewable energy across Africa and the Globe."
        },
        {
            title: "Mission",
            image: <FaBinoculars />,
            description: "To provide intelligent energy solutions with simplicity."
        },
        {
            title: "Core Values",
            image: <FaBinoculars />,
            description: "Driven by sustainability, integrity, and innovation."
        },

    ])
    return (
        <>
            <div className="banner" style={{ backgroundImage: `url(${bgImage})` }}>
                <div className="about-us-box">
                    <Container>
                        <div className="banner_content">
                            <h1>ABOUT<br />US</h1>
                        </div>
                    </Container>
                </div>
            </div>

            <div className="about-us py-5">
                <Container>
                    <div className="row align-items-center mt-5 mb-5">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <div className="d-flex align-items-center gap-3 mb-3">
                                <img src={sunimg} alt="Sun icon" />
                                <h5 className='mb-0 text-uppercase fw-bold'>Who We Are</h5>
                            </div>
                            <h2 className="fw-bold">The Why!</h2>
                            <p className='about_p_text'>
                                As one of Nigeria's leading companies in clean energy supply, we provide cutting-edge, renewable, smart energy technology and solutions to bridge Nigeria's current energy deficit regardless of size or location.
                                We recognise the growing demand for energy and have proffered quality and suitable solutions to meet them. We deploy standby, on and off-grid solutions using renewable energy sources focused on solar and energy efficiency management systems. Complete customer satisfaction is at the heart of what we do, relentlessly providing value through our state-of-the art renewable energy solutions.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <div className="text-center">
                                <img src={whyimg} alt="Why Us" className="img-fluid rounded" />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            <div className='card-section py-5' style={{ backgroundImage: `url(${bgvision})`, backgroundSize: 'cover' }}>
                <Container className='d-flex justify-content-space-between gap-4'>                    {
                    data.map((item, index) => {
                        return (
                            <div className="col-md-4 mb-4" key={index}>
                                <Banner_card
                                    title={item.title}
                                    image={item.image}
                                    description={item.description}
                                />
                            </div>
                        )
                    })
                }
                </Container>
            </div>
        </>
    );
}

export default Banner;
