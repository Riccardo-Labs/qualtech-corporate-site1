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
              <h1 className="display-4 fw-bold mb-4">About Qualtech</h1>
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
              <h6 className="text-primary fw-bold text-uppercase mb-3">Our Story</h6>
              <h2 className="display-5 fw-bold mb-4">Our Mission</h2>
              <p className="text-muted fs-5 mb-4">
                Founded in Bollate (MI), Qualtech was established to provide high-end machinery
                manufacturers with a professional, technically-competent commercial presence
                in the Italian and European market.
              </p>
              <p className="text-muted mb-5">
                We believe industrial sales require more than just a network — they require a
                deep understanding of the manufacturing process. Our team consists of former
                production managers and industrial engineers who have moved into commercial
                leadership and speak the language of the production floor.
              </p>
              <Row className="gy-4">
                <Col sm={6}>
                  <div className="d-flex align-items-center">
                    <FaAward className="text-primary me-3 flex-shrink-0" size={32} />
                    <div>
                      <h5 className="fw-bold mb-0">15+ Years</h5>
                      <p className="small text-muted mb-0">Market Presence</p>
                    </div>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="d-flex align-items-center">
                    <FaGlobe className="text-primary me-3 flex-shrink-0" size={32} />
                    <div>
                      <h5 className="fw-bold mb-0">40+ Brands</h5>
                      <p className="small text-muted mb-0">Global Representation</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={6} className="mt-5 mt-lg-0" data-aos="fade-left">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000"
                alt="Qualtech office"
                className="w-100 shadow-lg"
                style={{ borderRadius: '8px' }}
                referrerPolicy="no-referrer"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-padding bg-light">
        <Container>
          <div className="text-center mb-5" data-aos="fade-up">
            <h6 className="text-primary fw-bold text-uppercase mb-3">The Principles That Guide Us</h6>
            <h2 className="display-5 fw-bold mb-3">Our Core Values</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
              The principles that guide our commercial representation and client relationships.
            </p>
          </div>
          <Row className="gy-4">
            {[
              { icon: <FaShieldAlt className="text-primary" size={32} />, title: 'Integrity', desc: 'Transparent commercial dealings and honest technical assessment, with no conflicts of interest.' },
              { icon: <FaBolt className="text-primary" size={32} />, title: 'Expertise', desc: 'Continuous training on the latest industrial technologies to deliver genuine consultancy value.' },
              { icon: <FaHandshake className="text-primary" size={32} />, title: 'Partnership', desc: 'Long-term commitment to both manufacturers and client companies alike.' },
              { icon: <FaChartLine className="text-primary" size={32} />, title: 'Results', desc: 'Focused on delivering measurable market growth for every manufacturer we represent.' }
            ].map((value, index) => (
              <Col md={3} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <Card className="border-0 shadow-sm h-100 p-4 text-center" style={{ borderRadius: '8px' }}>
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
