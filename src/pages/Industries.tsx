import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Printer, Layers, Zap, Settings, Cpu, Shield } from 'lucide-react';

const Industries = () => {
  const sectors = [
    {
      icon: <Printer size={48} className="text-primary" />,
      title: "Flexographic Printing",
      desc: "Representing the world's most advanced flexo press manufacturers. From narrow-web label presses to wide-web CI presses for high-speed flexible packaging production.",
      features: ["CI Flexo Presses (up to 8 colours)", "Narrow-web for labels", "Hybrid Flexo + Digital systems", "Film and flexible packaging"],
      img: "https://images.unsplash.com/photo-1565608087341-404b25458fed?auto=format&fit=crop&q=80&w=1000"
    },
    {
      icon: <Layers size={48} className="text-primary" />,
      title: "Converting & Lamination",
      desc: "Solutions for the transformation of paper, film and foil in roll form. High-precision slitter rewinders, solventless laminators and extrusion coating lines.",
      features: ["Slitter Rewinders", "Solventless Laminators", "Extrusion Coating", "Multi-layer film lines"],
      img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000"
    },
    {
      icon: <Zap size={48} className="text-primary" />,
      title: "Digital Print & Automation",
      desc: "Inkjet printing systems for personalised and short-run packaging, integrated with automated prepress workflows. Robotic cells for palletising and visual inspection.",
      features: ["Inkjet systems for packaging", "Short-run & variable data", "Robotic cells (OPC-UA)", "Visual inspection & quality control"],
      img: "https://images.unsplash.com/photo-1530124560676-587cad321376?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  return (
    <div className="bg-white">
      <section className="bg-industrial py-5">
        <Container className="py-5">
          <Row>
            <Col lg={8} data-aos="fade-right">
              <h1 className="display-4 fw-bold mb-4">Industries & Expertise</h1>
              <p className="lead text-white-50 fs-4">
                Deep technical knowledge in the most demanding sectors of industrial production.
                We speak the language of your production floor.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {sectors.map((sector, index) => (
        <section key={index} className={`section-padding ${index % 2 !== 0 ? 'bg-light' : ''}`}>
          <Container>
            <Row className={`align-items-center ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
              <Col lg={6} data-aos={index % 2 !== 0 ? 'fade-left' : 'fade-right'}>
                <div className="mb-4">{sector.icon}</div>
                <h2 className="display-5 fw-bold mb-4">{sector.title}</h2>
                <p className="text-muted fs-5 mb-5">{sector.desc}</p>
                <Row className="gy-3">
                  {sector.features.map((feature, i) => (
                    <Col sm={6} key={i}>
                      <div className="d-flex align-items-center">
                        <Settings size={16} className="text-primary me-2 flex-shrink-0" />
                        <span className="fw-bold small">{feature}</span>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Col>
              <Col lg={6} className="mt-5 mt-lg-0" data-aos={index % 2 !== 0 ? 'fade-right' : 'fade-left'}>
                <img
                  src={sector.img}
                  alt={sector.title}
                  className="w-100 shadow-lg"
                  style={{ borderRadius: '8px' }}
                  referrerPolicy="no-referrer"
                />
              </Col>
            </Row>
          </Container>
        </section>
      ))}

      <section className="section-padding bg-industrial text-white">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8} data-aos="zoom-in">
              <h2 className="display-5 fw-bold mb-4">Technical Credibility</h2>
              <p className="text-white-50 mb-5">
                Our agents are trained directly by the manufacturers. We don't just sell;
                we consult on production efficiency, material compatibility and ROI.
              </p>
              <Row className="gy-4">
                <Col md={4}>
                  <Cpu size={32} className="text-primary mb-3" />
                  <h5 className="fw-bold">Industry 4.0</h5>
                  <p className="small text-white-50">ERP integration, OPC-UA connectivity and IoT-ready smart factory solutions.</p>
                </Col>
                <Col md={4}>
                  <Shield size={32} className="text-primary mb-3" />
                  <h5 className="fw-bold">Compliance</h5>
                  <p className="small text-white-50">All machinery meets EU standards: CE, ATEX, FDA, BRC and IFS certifications.</p>
                </Col>
                <Col md={4}>
                  <Settings size={32} className="text-primary mb-3" />
                  <h5 className="fw-bold">Optimisation</h5>
                  <p className="small text-white-50">Maximising OEE and reducing unplanned downtime across your production lines.</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Industries;
