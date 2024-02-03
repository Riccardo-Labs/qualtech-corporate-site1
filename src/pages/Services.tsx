import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Briefcase, BarChart, Users, TrendingUp, Search, Handshake } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Briefcase size={40} className="text-primary mb-4" />,
      title: "Commercial Representation",
      desc: "Full-scale agency services for machinery manufacturers. We act as your local commercial office, managing the entire sales pipeline from lead generation to contract closing."
    },
    {
      icon: <TrendingUp size={40} className="text-primary mb-4" />,
      title: "Market Development",
      desc: "Strategic planning to enter new geographical or industrial sectors. We identify high-potential targets and build the commercial relationships needed to succeed."
    },
    {
      icon: <Handshake size={40} className="text-primary mb-4" />,
      title: "Sales Negotiation",
      desc: "Expert support in high-value B2B negotiations. We manage technical presentations, factory demos and commercial discussions for projects ranging from €200k to €5M+."
    },
    {
      icon: <Users size={40} className="text-primary mb-4" />,
      title: "Qualified Network",
      desc: "Over 15 years of industry relationships with key decision-makers: procurement managers, production directors and business owners across the packaging sector."
    },
    {
      icon: <Search size={40} className="text-primary mb-4" />,
      title: "Machinery Selection",
      desc: "Before proposing any solution, we study the client's production capacity, existing lines, growth targets and budget — then match them with the right machine."
    },
    {
      icon: <BarChart size={40} className="text-primary mb-4" />,
      title: "After-Sales & Follow-up",
      desc: "We coordinate installation, commissioning and operator training, and remain the ongoing point of contact for upgrades, spare parts and future purchases."
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-industrial py-5">
        <Container className="py-5">
          <Row>
            <Col lg={8} data-aos="fade-right">
              <h1 className="display-4 fw-bold mb-4">Our Services</h1>
              <p className="lead text-white-50 fs-4">
                Comprehensive commercial solutions for the industrial machinery sector.
                We bridge the gap between engineering excellence and market success.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <Container>
          <Row className="gy-4">
            {services.map((service, index) => (
              <Col lg={4} md={6} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <Card className="card-industrial h-100 p-4 border-0 shadow-sm">
                  <Card.Body>
                    {service.icon}
                    <Card.Title className="fw-bold h4 mb-3">{service.title}</Card.Title>
                    <Card.Text className="text-muted">
                      {service.desc}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Methodology */}
      <section className="section-padding bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} data-aos="fade-right">
              <h6 className="text-primary fw-bold text-uppercase mb-3">How We Work</h6>
              <h2 className="display-5 fw-bold mb-4">The Qualtech Approach</h2>
              <p className="text-muted mb-4">
                Our methodology is built on technical credibility and commercial persistence.
                We don't just send brochures; we understand the production needs of our
                clients and the engineering capabilities of our manufacturer partners.
              </p>
              <ul className="list-unstyled">
                {[
                  'Client analysis and production context assessment',
                  'Selection of the most suitable machinery',
                  'End-to-end negotiation management',
                  'After-sales support and ongoing follow-up'
                ].map((item, i) => (
                  <li key={i} className="mb-3 d-flex align-items-center fw-bold">
                    <span className="bg-primary text-white me-3 d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '28px', height: '28px', borderRadius: '50%', fontSize: '13px' }}>{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Col>
            <Col lg={6} className="mt-5 mt-lg-0" data-aos="fade-left">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1000"
                alt="Business Meeting"
                className="w-100 shadow-lg"
                style={{ borderRadius: '8px' }}
                referrerPolicy="no-referrer"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Services;
