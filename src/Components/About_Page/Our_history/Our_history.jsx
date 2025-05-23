import { Container } from 'react-bootstrap';
import sunimg from "../../../assets/images/sun.svg";
import historyimage from "../../../assets/images/historyimage.png";


function Our_history() {
    return (
        <>
            <div className="Our_history py-5">
                <Container>
                    <div className="row align-items-center mt-5 mb-5">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <div className="d-flex align-items-center gap-3 mb-3">
                                <img src={sunimg} alt="Sun icon" />
                                <h5 className='mb-0 text-uppercase fw-bold'>Who We Are</h5>
                            </div>
                            <h2 className="fw-bold">The Why!</h2>
                            <p className='history_p_text'>
                                As one of Nigeria's leading companies in clean energy supply, we provide cutting-edge, renewable, smart energy technology and solutions to bridge Nigeria's current energy deficit regardless of size or location.
                                We recognise the growing demand for energy and have proffered quality and suitable solutions to meet them. We deploy standby, on and off-grid solutions using renewable energy sources focused on solar and energy efficiency management systems. Complete customer satisfaction is at the heart of what we do, relentlessly providing value through our state-of-the art renewable energy solutions.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <div className="text-end">
                                <img src={historyimage} alt="Why Us" className="img-fluid rounded" />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Our_history;