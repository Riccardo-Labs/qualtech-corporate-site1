import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaAward, FaGlobe, FaShieldAlt, FaBolt, FaHandshake, FaChartLine } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-white">
      <section className="bg-industrial py-5">
        <Container className="py-5">
          <Row>
            <Col lg={8} data-aos="fade-right">
              <h1 className="display-4 fw-bold mb-4">About PackMachina</h1>
              <p className="lead text-white-50 fs-4">
                A legacy of commercial excellence in the industrial packaging sector. 
                We are the bridge between engineering innovation and industrial growth.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <Row className="align-items-center mb-5">
            <Col lg={6} data-aos="fade-right">
              <h2 className="display-5 fw-bold mb-4">Our Mission</h2>
              <p className="text-muted fs-5 mb-4">
                Founded in 2001, PackMachina was established to provide high-end machinery 
                manufacturers with a professional, technically-competent commercial presence 
                in the European market.
              </p>
              <p className="text-muted mb-5">
                We believe that industrial sales require more than just a network; they require 
                a deep understanding of the manufacturing process. Our team consists of 
                former production managers and industrial engineers who have transitioned 
                into commercial leadership.
              </p>
              <Row className="gy-4">
                <Col sm={6}>
                  <div className="d-flex align-items-center">
                    <FaAward className="text-primary me-3" size={32} />
                    <div>
                      <h5 className="fw-bold mb-0">25 Years</h5>
                      <p className="small text-muted mb-0">Market Presence</p>
                    </div>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="d-flex align-items-center">
                    <FaGlobe className="text-primary me-3" size={32} />
                    <div>
                      <h5 className="fw-bold mb-0">Global</h5>
                      <p className="small text-muted mb-0">Representation</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={6} className="mt-5 mt-lg-0" data-aos="fade-left">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
                alt="Corporate Building" 
                className="w-100 shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-padding bg-light">
        <Container>
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-3">Our Core Values</h2>
            <p className="text-muted max-w-2xl mx-auto">
              The principles that guide our commercial representation and client relationships.
            </p>
          </div>
          <Row className="gy-4">
            {[
              { icon: <FaShieldAlt className="text-primary" size={32} />, title: 'Integrity', desc: 'Transparent commercial dealings and honest technical assessment.' },
              { icon: <FaBolt className="text-primary" size={32} />, title: 'Expertise', desc: 'Continuous training on the latest industrial technologies.' },
              { icon: <FaHandshake className="text-primary" size={32} />, title: 'Partnership', desc: 'Long-term commitment to both manufacturers and clients.' },
              { icon: <FaChartLine className="text-primary" size={32} />, title: 'Results', desc: 'Focused on delivering measurable market growth for our partners.' }
            ].map((value, index) => (
              <Col md={3} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <Card className="border-0 shadow-sm h-100 p-4 text-center">
                  <div className="mb-3 d-flex justify-content-center">{value.icon}</div>
                  <h5 className="fw-bold mb-3">{value.title}</h5>
                  <p className="small text-muted mb-0">{value.desc}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;
