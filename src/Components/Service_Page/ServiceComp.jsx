import ServiceBanner from "./ServiceBanner/ServiceBanner";
import OurService from "./OurService/OurService";
import './ServiceComp.css'
import OurProcess from "./ourProcess/ourProcess";
import DiscoverComp from "./discoverPower/discoverComp";

const ServiceComp = () => {
    return (
        <>
                <ServiceBanner />
                <OurService />  
                <OurProcess />
                <DiscoverComp />
        </>
    )
}

export default ServiceComp;