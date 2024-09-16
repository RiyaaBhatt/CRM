// src/components/ActivityFeed.js
import React from 'react';
import { Card } from 'react-bootstrap';

const ActivityFeed = () => {
  // Example activities
  const activities = [
    'Called John Doe',
    'Emailed Sarah Smith',
    'Meeting with client XYZ',
  ];

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>Activity Feed</Card.Title>
        <ul className="list-unstyled">
          {activities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

export default ActivityFeed;
