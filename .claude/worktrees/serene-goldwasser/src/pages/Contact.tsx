import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Mail, Phone, MapPin, Send, Linkedin, Globe } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Note: In a real app, you'd use your actual Service ID, Template ID, and Public Key
    // For this demo, we'll simulate the success
    
    setTimeout(() => {
      toast.success("Message sent successfully! Our team will contact you shortly.");
      setIsSubmitting(false);
      if (formRef.current) formRef.current.reset();
    }, 1500);

    /* Real implementation:
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current!, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          toast.success("Message sent successfully!");
          setIsSubmitting(false);
          formRef.current?.reset();
      }, (error) => {
          toast.error("Failed to send message. Please try again.");
          setIsSubmitting(false);
      });
    */
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
                Fill out the form and a specialized commercial agent will respond within 24 hours.
              </p>

              <div className="mb-4 d-flex align-items-start">
                <div className="bg-light p-3 rounded-circle me-3">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Office Location</h5>
                  <p className="text-muted">Industrial District, Suite 500, Milan, Italy</p>
                </div>
              </div>

              <div className="mb-4 d-flex align-items-start">
                <div className="bg-light p-3 rounded-circle me-3">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Phone Number</h5>
                  <p className="text-muted">+39 02 123 4567</p>
                </div>
              </div>

              <div className="mb-4 d-flex align-items-start">
                <div className="bg-light p-3 rounded-circle me-3">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Email Address</h5>
                  <p className="text-muted">info@packmachina.com</p>
                </div>
              </div>

              <hr className="my-5" />

              <h5 className="fw-bold mb-3">Follow Our Network</h5>
              <div className="d-flex gap-3">
                <Button variant="outline-primary" className="rounded-circle p-2" style={{ width: '45px', height: '45px' }}>
                  <Linkedin size={20} />
                </Button>
                <Button variant="outline-primary" className="rounded-circle p-2" style={{ width: '45px', height: '45px' }}>
                  <Globe size={20} />
                </Button>
              </div>
            </Col>

            <Col lg={7} data-aos="fade-left">
              <Card className="border-0 shadow-lg p-4 p-md-5">
                <Form ref={formRef} onSubmit={handleSubmit}>
                  <Row className="gy-4">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-bold small text-uppercase">Full Name</Form.Label>
                        <Form.Control type="text" name="user_name" placeholder="John Doe" required className="rounded-0 py-3" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-bold small text-uppercase">Company Name</Form.Label>
                        <Form.Control type="text" name="company_name" placeholder="Packaging Corp" required className="rounded-0 py-3" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-bold small text-uppercase">Email Address</Form.Label>
                        <Form.Control type="email" name="user_email" placeholder="john@company.com" required className="rounded-0 py-3" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-bold small text-uppercase">Phone Number</Form.Label>
                        <Form.Control type="tel" name="user_phone" placeholder="+39 ..." required className="rounded-0 py-3" />
                      </Form.Group>
                    </Col>
                    <Col md={12}>
                      <Form.Group>
                        <Form.Label className="fw-bold small text-uppercase">Role / Position</Form.Label>
                        <Form.Control type="text" name="user_role" placeholder="Production Manager / CEO" required className="rounded-0 py-3" />
                      </Form.Group>
                    </Col>
                    <Col md={12}>
                      <Form.Group>
                        <Form.Label className="fw-bold small text-uppercase">Your Message</Form.Label>
                        <Form.Control as="textarea" name="message" rows={5} placeholder="How can we help you?" required className="rounded-0 py-3" />
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
                            Send Inquiry <Send className="ms-2" size={18} />
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

      {/* Map Placeholder */}
      <section className="bg-light py-0 overflow-hidden">
        <div style={{ height: '400px', width: '100%', background: '#e5e5e5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p className="text-muted fw-bold text-uppercase letter-spacing-2">Interactive Map Integration</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
