import "./ServicesCard.css"


const ServiceCard = ( props ) => {
  return(
    <>
          <div className="container">
              <div className="row justify-content-center align-items-center">
                      <div className="serviceCard">
                           <i className="card-icon">{props.icon}</i>
                          <div className="card-heading">{props.heading}</div>
                          <div className="card-desc">{props.desc}</div>
                      </div>
              </div>
          </div>
    </>
  )
}

export default ServiceCard;