import React from "react";
import './OurServices.css'
import { Col, Container, Row } from "react-bootstrap";

const OurService = () => {
  return(
    <>
              <Container className="my-5 bg-tras" >
                <div className="our_services">
                    <div className="mb-5">
                        <div className="d-flex align-items-center gap-3 mb-3">
                            {/* <img src={sunimg} alt="Sun icon" /> */}
                            <p className="mb-0 text-uppercase ourservice-title">Our services</p>
                        </div>
                        <h2 className='mb-3 mt-5' style={{color : '#17223a'}}>
                            The <span>Scope</span> We Provide At <br/> Ecity
                        </h2>
                        <p className="fs-5">
                            We offer a range of services to help you take advantage of renewable energy<br />
                            and reduce your carbon footprint.
                        </p>
                    </div>

                    <Row className="g-4">
                        <Col md={4} sm={12}>
                            <div className="service-card">
                                {/* <img src={Cardimg1} alt="Residential" className="img-fluid rounded shadow" /> */}
                                <h5 className="service-title">Residential</h5>
                            </div>
                        </Col>
                        <Col md={4} sm={12}>
                            <div className="service-card">
                                {/* <img src={Cardimg2} alt="Commercial" className="img-fluid rounded shadow" /> */}
                                <h5 className="service-title">Commercial</h5>
                            </div>
                        </Col>
                        <Col md={4} sm={12}>
                            <div className="service-card">
                                {/* <img src={Cardimg3} alt="Mini Grids" className="img-fluid rounded shadow" /> */}
                                <h5 className="service-title">Mini Grids</h5>
                            </div>
                        </Col>
                        <Col md={6} sm={12}>
                            <div className="service-card mt-5">
                                {/* <img src={Cardimg4} alt="Governments" className="img-fluid rounded shadow" /> */}
                                <h5 className="service-title">Governments</h5>
                            </div>
                        </Col>
                        <Col md={6} sm={12}>
                            <div className="service-card mt-5">
                                {/* <img src={Cardimg5} alt="Industrial" className="img-fluid rounded shadow" /> */}
                                <h5 className="service-title">Industrial</h5>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
    </>
  )
}

export default OurService;