import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Mail, Phone, MapPin, Send, Linkedin } from 'lucide-react';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsSubmitting(true);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(() => {
      toast.success("Message sent successfully!");
      formRef.current?.reset();
    }).catch(() => {
      toast.error("Something went wrong. Please try again.");
    }).finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className="bg-white">
      <section className="bg-industrial py-5">
        <Container className="py-5">
          <Row>
            <Col lg={8} data-aos="fade-right">
              <h1 className="display-4 fw-bold mb-4">Contact Our Network</h1>
              <p className="lead text-white-50 fs-4">
                Connect with our commercial experts to discuss your machinery needs
                or representation opportunities.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <Row className="gy-5">
            <Col lg={5} data-aos="fade-right">
              <h2 className="fw-bold mb-4">Get in Touch</h2>
              <p className="text-muted mb-5">
                Fill out the form and a specialised sales agent will get back to you promptly.
              </p>

              <div className="mb-4 d-flex align-items-start">
                <div className="bg-light p-3 me-3 flex-shrink-0" style={{ borderRadius: '50%' }}>
                  <MapPin className="text-primary" size={22} />
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Office Location</h5>
                  <p className="text-muted mb-0">Via Milano 25<br />Bollate (MI) — Italy</p>
                </div>
              </div>

              <div className="mb-4 d-flex align-items-start">
                <div className="bg-light p-3 me-3 flex-shrink-0" style={{ borderRadius: '50%' }}>
                  <Phone className="text-primary" size={22} />
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Phone</h5>
                  <p className="text-muted mb-0">+39 02 123 4567</p>
                </div>
              </div>

              <div className="mb-4 d-flex align-items-start">
                <div className="bg-light p-3 me-3 flex-shrink-0" style={{ borderRadius: '50%' }}>
                  <Mail className="text-primary" size={22} />
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Email</h5>
                  <p className="text-muted mb-0">info@qualtech.it</p>
                </div>
              </div>

              <hr className="my-5" />

              <h5 className="fw-bold mb-3">Follow Our Network</h5>
              <div className="d-flex gap-3">
                <Button variant="outline-primary" className="p-2" style={{ width: '45px', height: '45px', borderRadius: '50%' }}>
                  <Linkedin size={20} />
                </Button>
              </div>
            </Col>

            <Col lg={7} data-aos="fade-left">
              <Card className="border-0 shadow-lg p-4 p-md-5" style={{ borderRadius: '12px' }}>
                <Form ref={formRef} onSubmit={handleSubmit}>
                  <Row className="gy-4">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-bold small text-uppercase">Full Name *</Form.Label>
                        <Form.Control type="text" name="user_name" placeholder="John Smith" required className="py-3" style={{ borderRadius: '6px' }} />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-bold small text-uppercase">Company *</Form.Label>
                        <Form.Control type="text" name="company_name" placeholder="Packaging Corp Ltd" required className="py-3" style={{ borderRadius: '6px' }} />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-bold small text-uppercase">Email *</Form.Label>
                        <Form.Control type="email" name="user_email" placeholder="john@company.com" required className="py-3" style={{ borderRadius: '6px' }} />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-bold small text-uppercase">Phone</Form.Label>
                        <Form.Control type="tel" name="user_phone" placeholder="+39 ..." className="py-3" style={{ borderRadius: '6px' }} />
                      </Form.Group>
                    </Col>
                    <Col md={12}>
                      <Form.Group>
                        <Form.Label className="fw-bold small text-uppercase">Role / Position</Form.Label>
                        <Form.Control type="text" name="user_role" placeholder="Production Manager / CEO" className="py-3" style={{ borderRadius: '6px' }} />
                      </Form.Group>
                    </Col>
                    <Col md={12}>
                      <Form.Group>
                        <Form.Label className="fw-bold small text-uppercase">Message *</Form.Label>
                        <Form.Control as="textarea" name="message" rows={5} placeholder="Describe your machinery needs or enquiry..." required className="py-3" style={{ borderRadius: '6px' }} />
                      </Form.Group>
                    </Col>
                    <Col md={12}>
                      <Button
                        type="submit"
                        className="btn-industrial w-100 py-3 d-flex align-items-center justify-content-center"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : (
                          <>
                            Send Enquiry <Send className="ms-2" size={18} />
                          </>
                        )}
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Map */}
      <section className="pb-0 overflow-hidden">
        <iframe
          title="Qualtech — Bollate MI"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.3!2d9.1164!3d45.5396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c14a5b5b5b5b%3A0x0!2sBollate%2C%20MI!5e0!3m2!1sen!2sit!4v1"
          width="100%"
          height="400"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
};

export default Contact;
