import Banner from "./Banner/Banner";
import Our_services from "./Our_services/Our_services";
import Our_esteemed from "./Our_esteemed/Our_esteemed";
import Our_clients from "./Our_clients/Our_clients";
import End_energy from "./End_Energy/End_Energy";
import Recent_Articles from "./Recent_Articles/Recent_Articles";
import FooterComp from "../FooterComp/FooterComp";

function About() {
    return (
        <>
            <Banner />
            <Our_services />
            <Our_esteemed />
            <Our_clients />
            <End_energy />
            <Recent_Articles />
            {/* <FooterComp /> */}
        </>
    )
}

export default About;