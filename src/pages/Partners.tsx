import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { ExternalLink, Settings, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Partners = () => {
  const partners = [
    {
      name: "Flexo Press Systems",
      origin: "Austria",
      category: "Flexographic Printing",
      machines: ["CI Press F-Series (up to 8 colours)", "Narrow-web LabelPro", "Hybrid Flexo + Digital systems"],
      desc: "Global leader in high-speed flexographic printing technology for flexible packaging, film and labels."
    },
    {
      name: "ConvertLine Europa",
      origin: "Germany",
      category: "Converting",
      machines: ["S-Line Slitter Rewinders", "L-Series Laminators", "High-speed rewinders"],
      desc: "Specialists in high-precision converting solutions for laminated materials, rolls and plastic films."
    },
    {
      name: "DigitalPack Pro",
      origin: "Netherlands",
      category: "Digital Printing",
      machines: ["Inkjet packaging systems", "Automated prepress workflow", "Short-run & variable data"],
      desc: "Inkjet printing systems for personalised packaging, variable data printing and premium short-run production."
    },
    {
      name: "DieCut Industrial",
      origin: "Italy",
      category: "Die-Cutting",
      machines: ["Automatic flatbed die-cutters", "Rotary die-cutting systems", "Inline inspection units"],
      desc: "Automatic die-cutting presses for corrugated board and composite materials, precision to one tenth of a millimetre."
    },
    {
      name: "PackBot Systems",
      origin: "Japan",
      category: "Automation",
      machines: ["Robotic cells with OPC-UA", "Automatic palletisers", "Machine vision systems"],
      desc: "Robotic cells for palletising, packaging and visual quality inspection with native ERP integration."
    },
    {
      name: "LaminaTech Group",
      origin: "Germany",
      category: "Lamination",
      machines: ["Multi-layer film laminators", "Solventless coating lines", "Food & pharma certified lines"],
      desc: "Laminating machines for multi-layer films certified to FDA, BRC and IFS standards for food, pharma and cosmetics."
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
                <Card className="border-0 shadow-sm h-100 overflow-hidden" style={{ borderRadius: '8px' }}>
                  <Row className="g-0 h-100">
                    <Col md={4} className="bg-light d-flex align-items-center justify-content-center p-4 border-end">
                      <div className="text-center">
                        <div className="bg-white p-3 shadow-sm mb-3 mx-auto d-flex align-items-center justify-content-center" style={{ width: '70px', height: '70px', borderRadius: '50%' }}>
                          <Settings className="text-primary" size={32} />
                        </div>
                        <h6 className="fw-bold mb-1" style={{ fontSize: '0.8rem' }}>{partner.name}</h6>
                        <Badge bg="secondary" className="text-uppercase" style={{ fontSize: '9px' }}>{partner.origin}</Badge>
                      </div>
                    </Col>
                    <Col md={8}>
                      <Card.Body className="p-4">
                        <div className="d-flex justify-content-between align-items-start mb-3">
                          <Badge bg="primary" className="px-3 py-2" style={{ borderRadius: '6px' }}>{partner.category}</Badge>
                          <ShieldCheck className="text-success" size={20} />
                        </div>
                        <p className="text-muted small mb-3">{partner.desc}</p>
                        <h6 className="fw-bold mb-2" style={{ fontSize: '0.8rem' }}>Key Machinery:</h6>
                        <ul className="list-unstyled mb-0">
                          {partner.machines.map((machine, i) => (
                            <li key={i} className="small mb-1 d-flex align-items-start">
                              <ExternalLink size={13} className="me-2 text-primary flex-shrink-0 mt-1" />
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
              <h2 className="fw-bold mb-4">Are You a Manufacturer?</h2>
              <p className="text-muted mb-5">
                Looking for a commercial partner to enter or grow in the Italian and European market?
                We are always open to new representation agreements with leading manufacturers.
              </p>
              <Link to="/contact" className="btn btn-industrial px-5 py-3">
                Apply for Representation
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Partners;
