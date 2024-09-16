// src/components/LeadSummary.js
import React from 'react';
import { Card } from 'react-bootstrap';

const LeadSummary = () => {
  // Example data
  const leadData = {
    newLeads: 25,
    contacted: 15,
    qualified: 10,
    conversionRate: '40%',
  };

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>Lead Summary</Card.Title>
        <Card.Text>New Leads: <strong>{leadData.newLeads}</strong></Card.Text>
        <Card.Text>Contacted: <strong>{leadData.contacted}</strong></Card.Text>
        <Card.Text>Qualified: <strong>{leadData.qualified}</strong></Card.Text>
        <Card.Text>Conversion Rate: <strong>{leadData.conversionRate}</strong></Card.Text>
      </Card.Body>
    </Card>
  );
};

export default LeadSummary;
