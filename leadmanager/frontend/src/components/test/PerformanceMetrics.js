// src/components/PerformanceMetrics.js
import React from 'react';
import { Card } from 'react-bootstrap';

const PerformanceMetrics = () => {
  // Example performance metrics
  const metrics = {
    topSalesRep: 'Jane Doe',
    highestValueDeal: '$50,000',
  };

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>Performance Metrics</Card.Title>
        <Card.Text>Top Sales Rep: <strong>{metrics.topSalesRep}</strong></Card.Text>
        <Card.Text>Highest Value Deal: <strong>{metrics.highestValueDeal}</strong></Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PerformanceMetrics;
