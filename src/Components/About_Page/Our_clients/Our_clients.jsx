import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "./Our_clients.css";

const clients = [
    {
        rating: 5,
        text: `Was processing a thought today about what it might cost me to go off-grid, with this tarrif increase wahala...`,
        name: "Mr Kolo",
        title: "Ecity Client",
    },
    {
        rating: 4,
        text: `EcityEnergy really helped me during blackout months. Their solution was reliable.`,
        name: "Ms Jane",
        title: "Ecity Client",
    },
    {
        rating: 5,
        text: `I'm surprised by the consistency of their power backup. Excellent service!`,
        name: "Mr Ade",
        title: "Ecity Client",
    },
];

function OurClients() {
    return (
        <Container className="clients-wrapper">
            <h1 className="clients-heading">
                <span className="highlight-underline">What</span> Our Clients Say
            </h1>

            <Carousel indicators={true} controls={true} interval={null}>
                {clients.map((item, index) => (
                    <Carousel.Item key={index}>
                        <div className="clients-card">
                            <div className="stars">
                                {Array.from({ length: item.rating }).map((_, i) => (
                                    <span key={i}>⭐</span>
                                ))}
                            </div>
                            <p className="clients-text">“{item.text}”</p>
                            <hr />
                            <p className="client-name">{item.name}</p>
                            <p className="client-title">{item.title}</p>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    );
}

export default OurClients;