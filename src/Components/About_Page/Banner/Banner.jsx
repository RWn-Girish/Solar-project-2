import { Container } from 'react-bootstrap';
import "../Banner/Banner.css"
import sunimg from "../../../assets/images/sun.svg"


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
                        <div className="about-us-text">
                            <div className="img_text d-flex align-items-center gap-3">
                                <img src={sunimg} alt="" srcset="" />
                                <h4 className='mb-0'>Who We Are</h4>
                            </div>
                            <h1>The Why!</h1>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Banner;