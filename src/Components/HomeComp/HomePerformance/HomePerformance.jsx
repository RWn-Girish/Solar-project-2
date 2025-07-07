import HomeTitle from "../HomeTitle";
import "./HomePerformance.css"
import founder from "../../../assets/images/founder.jpg"
import rating from "../../../assets/images/rating-img.jpg"

const HomePerf = () => {
    return(
        <>
            <div className="home-performance  ">
                <div className=" container ">
                 <div className="performance-wrapper d-flex">
                 <div className="home-performance_content  col-8">
                        <div className="performance-title">
                            <span>Performance</span>
                            <p>Solar Powering Your Sustainable Scene</p>
                        </div>
                        <div className="d-flex">
                        <div className="col-4">
                               <div className="founderProfile">
                                  <img src={founder} alt="" />
                                  <p className="founderName">Roberto Lewis</p>
                               </div>
                        </div>
                        <div className="col-8">
                                <div className="rating-content">
                                    <p className="rating-desc">
                                        Solar Powering Your Sustainable Scene" is a vibrant and compelling phrase
                                        that conveys the idea of integrating solar energy into
                                    </p>

                                    <div className="rating-wrapper">
                                        <div className="rating-item">
                                            <div className="circle" style={{ "--value": 89 }}>
                                                <span>89%</span>
                                            </div>
                                            <div className="label">Successful</div>
                                        </div>

                                        <div className="rating-item">
                                            <div className="circle" style={{ "--value": 72 }}>
                                                <span>72%</span>
                                            </div>
                                            <div className="label">Branching</div>
                                        </div>
                                    </div>
                                </div>

                        </div>
                        </div>
                    </div>
                    <div className="home-performance_image col-4">
                        <img src={rating} alt="" />
                    </div>
                 </div>
                </div>
            </div>
        </>
    )
}


export default HomePerf;

