import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Briefcase, BarChart, Users, TrendingUp, Search, Handshake } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Briefcase size={40} className="text-primary mb-4" />,
      title: "Commercial Representation",
      desc: "Full-scale agency services for machinery manufacturers. We act as your local commercial office, managing the entire sales pipeline from lead to closing."
    },
    {
      icon: <TrendingUp size={40} className="text-primary mb-4" />,
      title: "Market Development",
      desc: "Strategic planning to enter new geographical or industrial sectors. We identify high-potential targets and build the necessary relationships."
    },
    {
      icon: <Handshake size={40} className="text-primary mb-4" />,
      title: "Sales Negotiation",
      desc: "Expert support in high-value B2B negotiations. We manage technical and commercial discussions for machinery projects ranging from €500k to €5M+."
    },
    {
      icon: <Users size={40} className="text-primary mb-4" />,
      title: "Network Building",
      desc: "Leveraging our 25+ years of industry contacts to connect your brand with the right decision-makers in the packaging world."
    },
    {
      icon: <Search size={40} className="text-primary mb-4" />,
      title: "Lead Generation",
      desc: "Active prospecting and qualification of industrial leads. We ensure your sales funnel is always populated with high-intent buyers."
    },
    {
      icon: <BarChart size={40} className="text-primary mb-4" />,
      title: "Market Intelligence",
      desc: "Regular reporting on market trends, competitor activity, and technological shifts within the packaging machinery sector."
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
              <h2 className="display-5 fw-bold mb-4">The PackMachina Approach</h2>
              <p className="text-muted mb-4">
                Our methodology is built on technical credibility and commercial persistence. 
                We don't just send brochures; we understand the production needs of our 
                clients and the engineering capabilities of our partners.
              </p>
              <ul className="list-unstyled">
                {['Technical Qualification', 'Relationship Management', 'Project Lifecycle Support', 'Post-Sales Facilitation'].map((item, i) => (
                  <li key={i} className="mb-3 d-flex align-items-center fw-bold">
                    <span className="bg-primary text-white rounded-circle me-3 d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px', fontSize: '12px' }}>{i+1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Col>
            <Col lg={6} data-aos="fade-left">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1000" 
                alt="Business Meeting" 
                className="w-100 shadow-lg"
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
