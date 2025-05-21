import { Container } from 'react-bootstrap';
import "../Banner/Banner.css"
import sunimg from "../../../assets/images/sun.svg"
import whyimg from "../../../assets/images/whyImage.png"


function Banner() {
    return (
        <>
            <div className="banner">
                <div className="about-us-box">
                    <Container>
                        <div className="banner_content">
                            <h1>ABOUT<br />US</h1>
                        </div>
                    </Container >
                </div>
            </div>
            <div className="about-us">
                <Container>
                    <div className="about-us-content mt-5">
                        <div className="about-us-text d-flax align-items-center gap-5">
                            <div className="row">
                                <div className="col-6">
                                    <div className="img_text d-flex align-items-center gap-3">
                                        <img src={sunimg} alt="" srcset="" />
                                        <h4 className='mb-0'>Who We Are</h4>
                                    </div>
                                    <h1>The Why!</h1>
                                    <p className='m-0'>As one of Nigeria's leading companies in clean energy supply, we provide cutting-edge, renewable, smart energy technology and solutions to bridge Nigeria's current energy deficit regardless of size or location. We recognise the growing demand for energy and have proffered quality and suitable solutions to meet them. We deploy standby, on and off-grid solutions using renewable energy sources focused on solar and energy efficiency management systems. Complete customer satisfaction is at the heart of what we do, relentlessly providing value through our state-of-the art renewable energy solutions.</p>
                                </div>
                                <div className="col-6">
                                    <div className="img_contact">
                                        <img src={whyimg} alt="" srcset="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Banner;