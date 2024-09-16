// src/components/QuickLinks.js
import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const QuickLinks = () => {
  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>Quick Links</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item><a href="/leads">View Leads</a></ListGroup.Item>
          <ListGroup.Item><a href="/reports">Generate Reports</a></ListGroup.Item>
          <ListGroup.Item><a href="/settings">Settings</a></ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default QuickLinks;
