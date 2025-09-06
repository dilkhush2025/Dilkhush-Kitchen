import React, { useState } from 'react';
import './ContactForm.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ValidFeedback from './ValidFeedback';
import InvalidFeedback from './InvalidFeedback';
import { motion } from 'framer-motion';

function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [date, setDate] = useState('');
  const [comments, setComments] = useState('');
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

    // WhatsApp message
    const text = `
⭐ *New Feedback / Special Request*  
----------------------------------  
👤 Name: ${firstName} ${lastName}  
📞 Phone: ${phoneNumber}  
✉️ Email: ${emailAddress}  
📆 Date: ${date || "N/A"}  
💬 Message: ${comments || "N/A"}  
    `;
    const phone = "447877595717";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");

    // Optional modal
    const results = document.getElementById('results');
    results.innerHTML = `
      <div class="modal" id="modal">
        <div class="modal-dialog d-flex align-items-center">
          <div class="modal-content rounded-0">
            <div class="modal-header">
              <h5 class="modal-title">Thank You!</h5>
            </div>
            <div class="modal-body">
              <p>Dear ${firstName},</p>
              <p>Your feedback/special request has been received. We will get back to you shortly via WhatsApp or email.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-success btn-lg rounded-0" data-bs-dismiss="modal" onClick="window.location.reload()">Close</button>
            </div>
          </div>
        </div>
      </div>
    `;

    document.getElementById('contact-page').classList.add('scrolling-stop');
    document.getElementById('footer').style.display = 'none';

    setValidated(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 350 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Heading */}
      <h2 className="feedback-heading text-center mb-4">Feedback / Special Request Form</h2>

      <Form noValidate validated={validated} className="feedback-form p-5 rounded" id="form" onSubmit={handleSubmit}>
        <Form.Group className="row mb-3">
          <Col md={6}>
            <Form.Label htmlFor="first-name">First Name</Form.Label>
            <Form.Control type="text" id="first-name" value={firstName} onChange={e => setFirstName(e.target.value)} required />
            <ValidFeedback />
            <InvalidFeedback message="Please enter your first name." />
          </Col>
          <Col md={6}>
            <Form.Label htmlFor="last-name">Last Name</Form.Label>
            <Form.Control type="text" id="last-name" value={lastName} onChange={e => setLastName(e.target.value)} required />
            <ValidFeedback />
            <InvalidFeedback message="Please enter your last name." />
          </Col>
        </Form.Group>

        <Form.Group className="row mb-3">
          <Col md={6}>
            <Form.Label htmlFor="phone-number">Phone Number</Form.Label>
            <Form.Control type="tel" id="phone-number" pattern="[0-9]{5}[0-9]{6}" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} required />
            <ValidFeedback />
            <InvalidFeedback message="Please enter your mobile number." />
          </Col>
          <Col md={6}>
            <Form.Label htmlFor="email">Email Address</Form.Label>
            <Form.Control type="email" id="email" value={emailAddress} onChange={e => setEmailAddress(e.target.value)} required />
            <ValidFeedback />
            <InvalidFeedback message="Please enter your email address." />
          </Col>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="date">Date (optional)</Form.Label>
          <Form.Control type="date" id="date" value={date} onChange={e => setDate(e.target.value)} />
          <ValidFeedback />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="comments">Your Message</Form.Label>
          <Form.Control as="textarea" rows={4} id="comments" value={comments} onChange={e => setComments(e.target.value)} required />
          <InvalidFeedback message="Please enter your message." />
        </Form.Group>

        <Button type="submit" className="btn-submit btn-lg mt-4">Submit</Button>
      </Form>

      <div id="results"></div>
    </motion.div>
  );
}

export default ContactForm;
