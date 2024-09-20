import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './CompanyDetail.css'
import { useSelector } from 'react-redux';
import { tokenConfig } from '../../actions/auth';
const CompanyDetail = () => {
  const state = useSelector(state => state)

  const [formData, setFormData] = useState({
    name: '',
    size: '',
    details: '',
    website: '',
    phone_number: '',
    address: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/company/', formData, tokenConfig(() => state));
      console.log('Company details submitted:', response.data);
      // Redirect to /home after successful submission
      navigate('/home');
    } catch (error) {
      console.log(formData)
      console.error('Error submitting company details:', error);
    }
  };

  return (
    <div className="company-detail-container">
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="name">
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter company name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="size">
            <Form.Label>Company Size</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g., 50-100 employees"
              name="size"
              value={formData.size}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="details">
          <Form.Label>Company type</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}

            name="details"
            value={formData.details}
            placeholder="e.g., Social Media Agency, Educational Institution, Tech Startup, E-commerce, Healthcare, Non-Profit, Freelance, Manufacturing"

            onChange={handleChange}
            required
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="website">
            <Form.Label>Website</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter company website"
              name="website"
              value={formData.website}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="phone_number">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter phone number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter company address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="submit-button">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CompanyDetail;
