import React, { useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import "./Our_clients.css";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? clients.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex === clients.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <Container className="clients-wrapper">
            <h1 className="clients-heading">
                <span className="highlight-underline">What</span> Our Clients Say
            </h1>

            <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                controls={false}
                indicators={true}
                interval={null}
            >
                {clients.map((item, idx) => (
                    <Carousel.Item key={idx}>
                        <div className="clients-card">
                            <div className="stars">
                                {Array.from({ length: item.rating }).map((_, i) => (
                                    <span key={i}><FaStar /></span>
                                ))}
                            </div>
                            <p className="clients-text">“{item.text}”</p>
                            <hr />
                            <div className="client-data d-flax">
                                <div className="clients-detail">
                                    <p className="client-name">{item.name}</p>
                                    <p className="client-title">{item.title}</p>
                                </div>
                                <div className="custom-nav-buttons">
                                    <button onClick={prevSlide}><FaChevronLeft /></button>
                                    <button onClick={nextSlide}><FaChevronRight /></button>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>

            <div className="clients-controls">
                <div className="carousel-dots">
                    <div className="carousel-indicators-wrapper">
                        {clients.map((_, i) => (
                            <button
                                key={i}
                                type="button"
                                className={`dot ${i === index ? "active" : ""}`}
                                onClick={() => setIndex(i)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default OurClients;