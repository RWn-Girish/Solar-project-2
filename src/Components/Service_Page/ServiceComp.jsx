import React from "react";
import ServiceBanner from "./ServiceBanner/ServiceBanner";
import OurService from "./OurService/OurService";
import './ServiceComp.css'
import OurProcess from "./ourProcess/ourProcess";

const ServiceComp = () => {
    return(
        <>
           <div className="service-bg">
           <ServiceBanner/>
           <OurService/>
           <OurProcess/>
           </div>
        </>
    )
}

export default ServiceComp;