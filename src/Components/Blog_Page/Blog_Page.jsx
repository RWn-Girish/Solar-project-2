import { Col, Container, Row } from "react-bootstrap";
import Blog_card from "./Blog_Card/Blog_card";
import blog1 from "../../assets/images/blog_card1.png";
import blog2 from "../../assets/images/blog_card2.jpg";
import blog3 from "../../assets/images/blog_card3.jpg";
import blog4 from "../../assets/images/blog_card4.png";
import "./Blog_Page.css";

function Blog_Page() {
    return (
        <>
            <div className="blog_page">
                <div className="blog">
                    <Container>
                        <div className="blog_content">
                            <h1>Blog</h1>
                        </div>
                    </Container>
                </div>
            </div>
            <Container className="py-5">
                <Row className="g-4">
                    <Col lg={4} md={6} sm={12}>
                        <Blog_card
                            img={blog1}
                            title={'Why Businesses Are Choosing Commercial Solar Power Solutions'}
                            desc={'Discover why businesses are turning to commercial solar power solutions for cost savings, sustainability, and long-term energy independence.'}
                            data={'May 19, 2025'}
                        />
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <Blog_card
                            img={blog2}
                            title={'Everything You Need To Know About Solar Panels in 2025'}
                            desc={'Renewable energy is the best solution a clean, safe, and dependable future. Discover everything you need to know about solar panels in 2025.'}
                            data={'May 15, 2025'}
                        />
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <Blog_card
                            img={blog3}
                            title={'Will Solar Panel Installation Damage My Roof?'}
                            desc={'Solar panels offer a simple and effective way to enhance your energy efficiency with a straightforward process that yields more benefits than challenges.'}
                            data={'May 19, 2025'}
                        />
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <Blog_card
                            img={blog4}
                            title={'The Solar Vigilante’s Commitment: Why Long-Term Solar Support'}
                            desc={'Most solar companies after installation. The Solar Vigilante monitoring, maintenance, and strong warranties matter when choosing a solar provider.'}
                            data={'May 13, 2025'}
                        />
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <Blog_card
                            img={blog1}
                            title={'The Solar Vigilante Exposes the Solar Scam: Truth About Consumption'}
                            desc={'Don’t fall for misleading solar savings! The Solar Vigilante about solar energy yield, real consumption, and hidden pricing tricks in the industry.'}
                            data={'May 12, 2025'}
                        />
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <Blog_card
                            img={blog1}
                            title={'Why Businesses Are Choosing Commercial Solar Power Solutions'}
                            desc={'Discover why businesses are turning to commercial solar power solutions for cost savings, sustainability, and long-term energy independence.'}
                            data={'May 7, 2025'}
                        />
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <Blog_card
                            img={blog1}
                            title={'The Solar Vigilante’s Warning: How to Spot a Trustworthy Solar'}
                            desc={'Not all solar companies play fair. The Solar Vigilante breaks down the red flags of shady solar sales tactics and how to find a trusted, transparent solar provider.'}
                            data={'May 5, 2025'}
                        />
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <Blog_card
                            img={blog1}
                            title={'The Solar Vigilante’s Guide: Going Solar the Right Way Without Scams'}
                            desc={'Going solar shouldn’t be confusing or filled with gimmicks. The Solar reveals how to go solar the right way—honestly, transparently, and with real savings.'}
                            data={'May 3, 2025'}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Blog_Page;