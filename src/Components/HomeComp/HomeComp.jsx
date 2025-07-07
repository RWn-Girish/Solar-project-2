import React from "react";
import HomeBanner from "./HomeBanner/HomeBanner";
import HomeServices from "./HomeServices/HomeServices";
import HomePerf from "./HomePerformance/HomePerformance";

const HomeComp = () => {
    return(
        <>
           <HomeBanner/>
           <HomeServices/>
           <HomePerf />
        </>
    )
}


export default HomeComp;
