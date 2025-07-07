import HomeTitle from "../HomeTitle";
import "./HomeServices.css"
import ServiceCard from "./ServicesCard";
import { LuMonitorDot } from "react-icons/lu";
import { GiWindTurbine } from "react-icons/gi";
import { FaSolarPanel } from "react-icons/fa";
import { GrInstallOption } from "react-icons/gr";

const  HomeServices = () => {
    return(
        <>


        <div className="homeServices">
            <div className="container">
                <div className="services-content">
                    <HomeTitle  title={"Installation Services"} heading={"Custom Solar Solutions"}/>
                       <div className="d-flex flex-wrap">
                        <div className="col-12 col-md-6 mb-4 pe-2">
                            <ServiceCard icon={<LuMonitorDot/>} heading={"Energy Monitoring"} desc={"Intelligent Energy Monitoring to Control Costs Effectively"}/>
                        </div>
                        <div className="col-12 col-md-6 mb-4 ps-2">
                            <ServiceCard icon={<GiWindTurbine />} heading={"Wind Turbines"} desc={"Wind turbines Powering a greener tomorrow effortlessly."}/>
                        </div>
                        <div className="col-12 col-md-6 mb-4 pe-2">
                            <ServiceCard icon={<FaSolarPanel/>} heading={"Battery Solutions"} desc={"Store Sunlight Effectively with Innovative Battery Tech"}/>
                        </div>
                        <div className="col-12 col-md-6 mb-4 ps-2">
                            <ServiceCard icon={<GrInstallOption/>} heading={"Panel Installation"} desc={"Panel Installation involves the professional installation"}/>
                        </div>
                       </div>
                </div>
            </div>
        </div> 

        </>
    )
}


export default HomeServices;