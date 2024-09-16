// src/components/SalesPipeline.js
import React from 'react';
import { Card } from 'react-bootstrap';

const SalesPipeline = () => {
  // Example data
  const pipelineData = {
    prospect: 10,
    negotiation: 5,
    closed: 3,
  };

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>Sales Pipeline</Card.Title>
        <Card.Text>Prospect: <strong>{pipelineData.prospect}</strong></Card.Text>
        <Card.Text>Negotiation: <strong>{pipelineData.negotiation}</strong></Card.Text>
        <Card.Text>Closed: <strong>{pipelineData.closed}</strong></Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SalesPipeline;
