import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { ExternalLink, Settings, ShieldCheck } from 'lucide-react';

const Partners = () => {
  const partners = [
    {
      name: "FlexoMaster GmbH",
      origin: "Germany",
      category: "Flexographic Printing",
      machines: ["F-Series CI Press", "LabelPro Narrow Web"],
      desc: "Global leader in high-speed flexographic printing technology with over 50 years of innovation."
    },
    {
      name: "ConvertTech S.p.A.",
      origin: "Italy",
      category: "Converting",
      machines: ["S-Line Slitter Rewinders", "L-Series Laminators"],
      desc: "Specialists in high-precision converting solutions for flexible materials and paper."
    },
    {
      name: "PackLine Solutions",
      origin: "USA",
      category: "Packaging Lines",
      machines: ["AutoPack End-of-Line", "CaseMaster 500"],
      desc: "Advanced automation for primary and secondary packaging production lines."
    },
    {
      name: "EcoPrint Systems",
      origin: "Spain",
      category: "Sustainable Packaging",
      machines: ["Water-Based Printing Lines", "Recyclable Film Coating"],
      desc: "Pioneering sustainable technology for the next generation of eco-friendly packaging."
    }
  ];

  return (
    <div className="bg-white">
      <section className="bg-industrial py-5">
        <Container className="py-5">
          <Row>
            <Col lg={8} data-aos="fade-right">
              <h1 className="display-4 fw-bold mb-4">Our Partners & Machinery</h1>
              <p className="lead text-white-50 fs-4">
                We exclusively represent the most prestigious manufacturers in the industry. 
                Explore our curated portfolio of industrial excellence.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <div className="mb-5" data-aos="fade-up">
            <h2 className="fw-bold mb-3">Represented Manufacturers</h2>
            <p className="text-muted">Direct commercial access to world-class engineering.</p>
          </div>
          <Row className="gy-4">
            {partners.map((partner, index) => (
              <Col lg={6} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <Card className="border-0 shadow-sm h-100 overflow-hidden">
                  <Row className="g-0 h-100">
                    <Col md={4} className="bg-light d-flex align-items-center justify-content-center p-4 border-end">
                      <div className="text-center">
                        <div className="bg-white rounded-circle p-3 shadow-sm mb-3 mx-auto" style={{ width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyItems: 'center' }}>
                          <Settings className="text-primary" size={40} />
                        </div>
                        <h5 className="fw-bold mb-1">{partner.name}</h5>
                        <Badge bg="secondary" className="text-uppercase" style={{ fontSize: '10px' }}>{partner.origin}</Badge>
                      </div>
                    </Col>
                    <Col md={8}>
                      <Card.Body className="p-4">
                        <div className="d-flex justify-content-between align-items-start mb-3">
                          <Badge bg="primary" className="px-3 py-2">{partner.category}</Badge>
                          <ShieldCheck className="text-success" size={20} />
                        </div>
                        <p className="text-muted small mb-4">{partner.desc}</p>
                        <h6 className="fw-bold mb-2">Key Machinery:</h6>
                        <ul className="list-unstyled mb-0">
                          {partner.machines.map((machine, i) => (
                            <li key={i} className="small mb-1 d-flex align-items-center">
                              <ExternalLink size={14} className="me-2 text-primary" />
                              {machine}
                            </li>
                          ))}
                        </ul>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="section-padding bg-light">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8} data-aos="fade-up">
              <h2 className="fw-bold mb-4">Seeking Representation?</h2>
              <p className="text-muted mb-5">
                Are you a machinery manufacturer looking to expand your commercial footprint? 
                We are always looking for innovative partners to join our network.
              </p>
              <a href="/contact" className="btn btn-industrial">Apply for Representation</a>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Partners;
