// src/components/Notifications.js
import React from 'react';
import { Card } from 'react-bootstrap';

const Notifications = () => {
  // Example notifications
  const notifications = [
    'New lead assigned to you',
    'Upcoming meeting with client',
  ];

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>Notifications</Card.Title>
        <ul className="list-unstyled">
          {notifications.map((notification, index) => (
            <li key={index}>{notification}</li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

export default Notifications;
