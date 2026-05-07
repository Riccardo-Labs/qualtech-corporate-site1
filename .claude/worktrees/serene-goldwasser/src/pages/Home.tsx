import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Globe, Zap } from 'lucide-react';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-industrial py-5 position-relative overflow-hidden" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="position-absolute top-0 end-0 w-50 h-100 opacity-10 d-none d-lg-block">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
            alt="Industrial Machinery" 
            className="w-100 h-100 object-fit-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <Container className="position-relative z-1">
          <Row>
            <Col lg={7} data-aos="fade-up">
              <h1 className="hero-title">
                Industrial Machinery <br />
                <span className="text-primary">Sales Network</span> for the <br />
                Packaging Industry
              </h1>
              <p className="lead text-white-50 mb-5 fs-4">
                We represent global manufacturing leaders, connecting high-value industrial 
                technology with the world's most demanding packaging producers.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3">
                <Button as={Link as any} to="/contact" className="btn-industrial py-3 px-5">
                  Find Your Machinery <ArrowRight className="ms-2" size={20} />
                </Button>
                <Button as={Link as any} to="/services" className="btn-outline-light rounded-0 py-3 px-5">
                  Our Representation Services
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-light border-bottom">
        <Container>
          <Row className="text-center gy-4">
            <Col md={3} data-aos="zoom-in" data-aos-delay="100">
              <h2 className="fw-bold text-industrial mb-0">25+</h2>
              <p className="text-muted text-uppercase small fw-bold">Years Experience</p>
            </Col>
            <Col md={3} data-aos="zoom-in" data-aos-delay="200">
              <h2 className="fw-bold text-industrial mb-0">€500M+</h2>
              <p className="text-muted text-uppercase small fw-bold">Sales Managed</p>
            </Col>
            <Col md={3} data-aos="zoom-in" data-aos-delay="300">
              <h2 className="fw-bold text-industrial mb-0">12</h2>
              <p className="text-muted text-uppercase small fw-bold">Global Partners</p>
            </Col>
            <Col md={3} data-aos="zoom-in" data-aos-delay="400">
              <h2 className="fw-bold text-industrial mb-0">150+</h2>
              <p className="text-muted text-uppercase small fw-bold">Active Clients</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Value Proposition */}
      <section className="section-padding">
        <Container>
          <Row className="align-items-center mb-5">
            <Col lg={6} data-aos="fade-right">
              <h6 className="text-primary fw-bold text-uppercase mb-3">Why Partner With Us</h6>
              <h2 className="display-5 fw-bold mb-4">Strategic Commercial Representation</h2>
              <p className="text-muted fs-5">
                We don't just sell machines; we build market leadership. Our agency provides 
                manufacturers with immediate access to a high-level network of packaging 
                decision-makers.
              </p>
            </Col>
          </Row>
          <Row className="gy-4">
            <Col md={4} data-aos="fade-up" data-aos-delay="100">
              <div className="p-4 bg-white border h-100">
                <Globe className="text-primary mb-4" size={40} />
                <h4 className="fw-bold mb-3">International Network</h4>
                <p className="text-muted">
                  Instant access to the European and Global packaging markets through our 
                  established commercial relationships.
                </p>
              </div>
            </Col>
            <Col md={4} data-aos="fade-up" data-aos-delay="200">
              <div className="p-4 bg-white border h-100">
                <ShieldCheck className="text-primary mb-4" size={40} />
                <h4 className="fw-bold mb-3">Technical Credibility</h4>
                <p className="text-muted">
                  Our team understands the engineering behind the machines, ensuring 
                  accurate technical sales and client trust.
                </p>
              </div>
            </Col>
            <Col md={4} data-aos="fade-up" data-aos-delay="300">
              <div className="p-4 bg-white border h-100">
                <Zap className="text-primary mb-4" size={40} />
                <h4 className="fw-bold mb-3">Lead Acceleration</h4>
                <p className="text-muted">
                  Shorten the sales cycle for high-value machinery through targeted 
                  prospecting and expert negotiation.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Industries Served */}
      <section className="section-padding bg-industrial">
        <Container>
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-3">Industries We Serve</h2>
            <p className="text-white-50 max-w-2xl mx-auto">
              Specialized expertise in the most advanced sectors of industrial packaging production.
            </p>
          </div>
          <Row className="gy-4">
            {[
              { title: 'Flexographic Printing', desc: 'High-speed printing solutions for flexible packaging and labels.', img: 'https://images.unsplash.com/photo-1565608087341-404b25458fed?auto=format&fit=crop&q=80&w=800' },
              { title: 'Converting Lines', desc: 'Advanced machinery for slitting, rewinding, and material transformation.', img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800' },
              { title: 'Packaging Production', desc: 'Complete end-of-line systems and primary packaging manufacturing.', img: 'https://images.unsplash.com/photo-1530124560676-587cad321376?auto=format&fit=crop&q=80&w=800' }
            ].map((industry, index) => (
              <Col lg={4} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="position-relative overflow-hidden group" style={{ height: '400px' }}>
                  <img src={industry.img} alt={industry.title} className="w-100 h-100 object-fit-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="position-absolute bottom-0 start-0 w-100 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h4 className="fw-bold text-white mb-2">{industry.title}</h4>
                    <p className="text-white-50 small mb-0">{industry.desc}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white text-center">
        <Container data-aos="zoom-in">
          <h2 className="display-4 fw-bold mb-4">Ready to Expand Your Market?</h2>
          <p className="lead mb-5 opacity-90">
            Whether you are a manufacturer seeking representation or a producer looking for the next generation of machinery.
          </p>
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
            <Button as={Link as any} to="/contact" variant="light" className="rounded-0 py-3 px-5 fw-bold text-primary">
              Contact Our Network
            </Button>
            <Button as={Link as any} to="/partners" variant="outline-light" className="rounded-0 py-3 px-5 fw-bold">
              View Machinery Portfolio
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
