import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-industrial py-5 mt-auto">
      <Container>
        <Row className="gy-4">
          <Col lg={4}>
            <div className="mb-3">
              <img src="/logo.png" alt="Qualtech" style={{ height: '32px', width: 'auto', filter: 'brightness(0) invert(1)' }} />
            </div>
            <p className="text-white-50 mb-4">
              Premier commercial network representing global leaders in industrial packaging machinery.
              Bridging the gap between high-end manufacturers and production excellence.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white-50 hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </Col>
          <Col lg={2} md={4}>
            <h5 className="fw-bold mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/services" className="text-white-50 text-decoration-none hover:text-white">Services</Link></li>
              <li className="mb-2"><Link to="/industries" className="text-white-50 text-decoration-none hover:text-white">Industries</Link></li>
              <li className="mb-2"><Link to="/partners" className="text-white-50 text-decoration-none hover:text-white">Partners</Link></li>
              <li className="mb-2"><Link to="/about" className="text-white-50 text-decoration-none hover:text-white">About Us</Link></li>
            </ul>
          </Col>
          <Col lg={2} md={4}>
            <h5 className="fw-bold mb-4">Industries</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/industries" className="text-white-50 text-decoration-none hover:text-white">Flexographic Printing</Link></li>
              <li className="mb-2"><Link to="/industries" className="text-white-50 text-decoration-none hover:text-white">Converting Lines</Link></li>
              <li className="mb-2"><Link to="/industries" className="text-white-50 text-decoration-none hover:text-white">Digital Print & Automation</Link></li>
            </ul>
          </Col>
          <Col lg={4} md={4}>
            <h5 className="fw-bold mb-4">Contact Info</h5>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex align-items-start">
                <MapPin className="me-3 text-white-50" size={20} />
                <span className="text-white-50">Via Milano 25<br />Bollate (MI), Italy</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <Phone className="me-3 text-white-50" size={20} />
                <span className="text-white-50">+39 02 123 4567</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <Mail className="me-3 text-white-50" size={20} />
                <span className="text-white-50">info@qualtech.it</span>
              </li>
            </ul>
          </Col>
        </Row>
        <hr className="my-5 border-white-10" />
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <p className="text-white-50 small mb-0">© 2026 Qualtech S.r.l. All rights reserved.</p>
          <div className="d-flex gap-4">
            <a href="#" className="text-white-50 small text-decoration-none">Privacy Policy</a>
            <a href="#" className="text-white-50 small text-decoration-none">Terms of Service</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
