import React from "react";

const ServiveCard = (title , image) => {
    return (
        <>
            <div className="cardBody">
                <div className="card-image">
                    <img src={image} className="img-fluid"/>
                    <div className="card-title">
                        <h4>{title}</h4>
                    </div>
                </div>
            </div>
        </>
    )
}


