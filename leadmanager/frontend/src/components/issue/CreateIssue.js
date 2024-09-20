import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { tokenConfig } from '../../actions/auth';

const CreateIssue = ({ show, handleClose, fetchIssues }) => {
  const [issueType, setIssueType] = useState('');
  const [description, setDescription] = useState('');
  const user = useSelector((state) => state.auth.user);  // Get user from Redux
  const state = useSelector((state) => state);  // Get full state for tokenConfig
  const dispatch = useDispatch();

  // Function to calculate priority based on issue type
  const calculatePriority = (issueType) => {
    if (issueType === 'Fetching Issue') return 'high';
    if (issueType === 'Frontend Issue') return 'medium';
    return 'low';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const priority = calculatePriority(issueType);

    const newIssue = {
      issue_type: issueType,  // Ensure this is valid
      description: description,
      status: 'Open',          // Default status
      priority: priority,      // Should be 'low', 'medium', or 'high'
      username: user.id,      // User ID from Redux state
    };

    try {
      console.log('New Issue Data:', newIssue); // Log the request data

      const response = await axios.post(
        'http://127.0.0.1:8000/api/issue/',
        newIssue,
        tokenConfig(() => state) // Pass a function that returns state
      );

      // Close modal and refresh issues list after successful creation
      handleClose();
      fetchIssues();
    } catch (error) {
      console.error('Error creating issue:', error);
      if (error.response) {
        console.error('Response status:', error.response.status);
        console.error('Response data:', error.response.data); // Log detailed error information
      }
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create New Issue</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="issueType">
            <Form.Label>Issue Type</Form.Label>
            <Form.Control as="select" value={issueType} onChange={(e) => setIssueType(e.target.value)} required>
              <option value="">Select Issue Type</option>
              <option value="Frontend Issue">Frontend Issue</option>
              <option value="Fetching Issue">Fetching Issue</option>
              <option value="Working Issue">Working Issue</option>
              <option value="Other Issue">Other Issue</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit Issue
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CreateIssue;
