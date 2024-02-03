import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Globe, Zap } from 'lucide-react';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-industrial py-5 position-relative overflow-hidden" style={{ minHeight: '77vh', display: 'flex', alignItems: 'center' }}>
        {/* Video Background */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 0 }}>
          <iframe
            src="https://www.youtube.com/embed/krDoV8ur4L4?autoplay=1&mute=1&loop=1&playlist=krDoV8ur4L4&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
            allow="autoplay; encrypted-media"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '177.78vh',
              height: '56.25vw',
              minWidth: '100%',
              minHeight: '100%',
              transform: 'translate(-50%, -50%)',
              border: 'none',
              pointerEvents: 'none',
            }}
          />
          {/* Dark overlay */}
          <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(10, 25, 47, 0.75)' }} />
        </div>
        <Container className="position-relative z-1">
          <Row>
            <Col lg={7} data-aos="fade-up">
              <h1 className="hero-title">
                Manufacturing Equipment <br />
                <span className="text-primary">Sales Network</span> 
              </h1>
              <p className="lead text-white-50 mb-5 fs-4">
                We represent global manufacturing leaders, connecting high-value industrial
                technology with the world's most demanding packaging producers.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3">
                <Button as={Link as any} to="/contact" className="btn-outline-light py-3 px-5 d-flex align-items-center justify-content-center" style={{ borderRadius: "34px" }}>
                  Need more information?<ArrowRight className="ms-2" size={20} />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Partners Section */}
      <section className="py-5 bg-white border-bottom overflow-hidden">
        <Container>
          <Row className="align-items-center justify-content-center gy-5">
            {[
              { src: '/partners/winkler.jpg', alt: 'Partner 1', delay: '100', maxHeight: '80px', maxWidth: '220px', href: 'https://www.w-u-d.com/' },
              { src: '/partners/partner2.png', alt: 'Partner 2', delay: '250', maxHeight: '55px', maxWidth: '160px', href: 'https://nlwww.com/' },
              { src: '/partners/gaps.png', alt: 'Partner 3', delay: '400', maxHeight: '55px', maxWidth: '160px', href: 'https://www.paperbagmachine-gaps.com/' },
            ].map((partner, i) => (
              <Col md={4} key={i} className="d-flex justify-content-center" data-aos="fade-up" data-aos-delay={partner.delay}>
                <a href={partner.href} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block' }}>
                  <img
                    src={partner.src}
                    alt={partner.alt}
                    style={{
                      maxHeight: partner.maxHeight,
                      maxWidth: partner.maxWidth,
                      objectFit: 'contain',
                      filter: 'grayscale(100%)',
                      opacity: 0.55,
                      transition: 'all 0.4s ease',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(0%)';
                      (e.currentTarget as HTMLImageElement).style.opacity = '1';
                      (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.08)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(100%)';
                      (e.currentTarget as HTMLImageElement).style.opacity = '0.55';
                      (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)';
                    }}
                  />
                </a>
              </Col>
            ))}
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
                We don't just sell, we help build market leadership. We provide manufacturers with direct access to a high-level network of packaging decision-makers.
              </p>
            </Col>
          </Row>
          <Row className="gy-4">
            <Col md={4} data-aos="fade-up" data-aos-delay="100">
              <div className="p-4 bg-white border h-100">
                <Globe className="text-primary mb-4" size={40} />
                <h4 className="fw-bold mb-3">International Network</h4>
                <p className="text-muted">
                  Instant access to the European and global packaging markets through our
                  established commercial relationships built over 25+ years.
                </p>
              </div>
            </Col>
            <Col md={4} data-aos="fade-up" data-aos-delay="200">
              <div className="p-4 bg-white border h-100">
                <ShieldCheck className="text-primary mb-4" size={40} />
                <h4 className="fw-bold mb-3">Technical Credibility</h4>
                <p className="text-muted">
                  Our team understands the engineering behind the machines, ensuring
                  accurate technical sales and long-term client trust.
                </p>
              </div>
            </Col>
            <Col md={4} data-aos="fade-up" data-aos-delay="300">
              <div className="p-4 bg-white border h-100">
                <Zap className="text-primary mb-4" size={40} />
                <h4 className="fw-bold mb-3">Lead Acceleration</h4>
                <p className="text-muted">
                  Shorten the sales cycle for high-value machinery through targeted
                  prospecting and expert negotiation support.
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
            <p className="text-white-50 mx-auto" style={{ maxWidth: '600px' }}>
              Specialized expertise in the most advanced sectors of industrial packaging production.
            </p>
          </div>
          <Row className="gy-4">
            {[
              { title: 'Flexographic Printing', desc: 'High-speed printing solutions for flexible packaging and labels.', img: 'https://images.unsplash.com/photo-1565608087341-404b25458fed?auto=format&fit=crop&q=80&w=800' },
              { title: 'Converting Lines', desc: 'Advanced machinery for slitting, rewinding, lamination and material transformation.', img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800' },
              { title: 'Digital Print & Automation', desc: 'Inkjet systems for short-run packaging and robotic cells for palletising and quality inspection.', img: 'https://images.unsplash.com/photo-1530124560676-587cad321376?auto=format&fit=crop&q=80&w=800' }
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
            <Button as={Link as any} to="/contact" variant="light" className="py-3 px-5 fw-bold text-primary" style={{ borderRadius: '34px' }}>
              Contact Our Network
            </Button>
            <Button as={Link as any} to="/partners" variant="outline-light" className="py-3 px-5 fw-bold" style={{ borderRadius: '34px' }}>
              View Machinery Portfolio
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
