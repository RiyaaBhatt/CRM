// src/components/TaskList.js
import React from 'react';
import { Card } from 'react-bootstrap';

const TaskList = () => {
  // Example tasks
  const tasks = [
    'Follow up with lead A',
    'Prepare sales report',
    'Schedule demo with client B',
  ];

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>Task List</Card.Title>
        <ul className="list-unstyled">
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

export default TaskList;
