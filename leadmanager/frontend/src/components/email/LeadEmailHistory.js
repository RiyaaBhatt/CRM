import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const LeadEmailHistory = () => {
  const { recipient_email } = useParams();
  const navigate = useNavigate();  // Updated to useNavigate
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    axios.get(`/emails/${recipient_email}/`)
      .then(response => {
        setEmails(response.data);
      })
      .catch(error => {
        console.error('Failed to fetch emails:', error);
      });
  }, [recipient_email]);
  const handleBack = () => {
    navigate(-1);  // Replaces history.goBack()
  };


  return (
    <div className="container mt-5">
        <button onClick={handleBack}>Back</button>
      <h3 className="text-center my-4">Email History for {recipient_email}</h3>
      <div className="list-group">
        {emails.map((email, index) => (
          <div key={index} className="list-group-item">
            <h5>{email.subject}</h5>
            <p>{email.body}</p>
            <small>Sent at: {new Date(email.sent_at).toLocaleString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadEmailHistory;
