import "../Our_esteemed/Our_esteemed.css"
import { Container } from "react-bootstrap";
import logo from "../../../assets/images/logo.png"

function Our_esteemed() {
    return (
        <>
            <Container>
                <div className="Our_esteemed d-flax gap-5">
                    <h1>Our <span>Esteemed Clients and Partners</span><br />through the Years.</h1>
                    <div className="row">
                        <div className="col-2"><img src={logo} alt="" /></div>
                        <div className="col-2"><img src={logo} alt="" /></div>
                        <div className="col-2"><img src={logo} alt="" /></div>
                        <div className="col-2"><img src={logo} alt="" /></div>
                        <div className="col-2"><img src={logo} alt="" /></div>
                        <div className="col-2"><img src={logo} alt="" /></div>
                        <div className="col-2"><img src={logo} alt="" /></div>
                        <div className="col-2"><img src={logo} alt="" /></div>
                        <div className="col-2"><img src={logo} alt="" /></div>
                        <div className="col-2"><img src={logo} alt="" /></div>
                        <div className="col-2"><img src={logo} alt="" /></div>
                        <div className="col-2"><img src={logo} alt="" /></div>
                        <div className="col-2"><img src={logo} alt="" /></div>
                        <div className="col-2"><img src={logo} alt="" /></div>
                        <div className="col-2"><img src={logo} alt="" /></div>
                        <div className="col-2"><img src={logo} alt="" /></div>
                        <div className="col-2"><img src={logo} alt="" /></div>
                        <div className="col-2"><img src={logo} alt="" /></div>
                        <div className="col-2"><img src={logo} alt="" /></div>
                        <div className="col-2"><img src={logo} alt="" /></div>
                    </div>
                </div >
            </Container>
        </>
    )
}

export default Our_esteemed;