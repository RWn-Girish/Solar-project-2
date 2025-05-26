import React from "react";
import ServiceBanner from "./ServiceBanner/ServiceBanner";
import OurService from "./OurService/OurService";
import './ServiceComp.css'

const ServiceComp = () => {
    return(
        <>
           <div className="service-bg">
           <ServiceBanner/>
           <OurService/>
           </div>
        </>
    )
}

export default ServiceComp;