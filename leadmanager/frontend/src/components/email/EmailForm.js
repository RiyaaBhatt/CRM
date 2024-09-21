// import React, { useState, useEffect } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { getLeads, deleteLead } from '../../actions/leads';
// import axios from 'axios';
// import { Modal, Button, Form } from 'react-bootstrap';

// const EmailForm = ({ leads, getLeads, deleteLead }) => {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedLead, setSelectedLead] = useState(null);
//   const [emailSubject, setEmailSubject] = useState('');
//   const [emailBody, setEmailBody] = useState('');
//   const [selectedTemplate, setSelectedTemplate] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const emailTemplates = [
//     { id: 1, subject: 'Welcome Email', body: 'Hello, Welcome to our platform!' },
//     { id: 2, subject: 'Follow-up Email', body: 'Hi, just checking in with you!' },
//     { id: 3, subject: 'Reminder Email', body: 'Don\'t forget about our upcoming meeting.' }
//   ];

//   useEffect(() => {
//     getLeads();
//   }, [getLeads]);

//   const handleComposeEmail = (lead) => {
//     setSelectedLead(lead);
//     setShowModal(true);
//   };

//   const handleTemplateChange = (e) => {
//     const selected = emailTemplates.find(template => template.id === parseInt(e.target.value));
//     if (selected) {
//       setEmailSubject(selected.subject);
//       setEmailBody(selected.body);
//       setSelectedTemplate(selected.id);
//     }
//   };

//   const handleSendEmail = () => {
//     setLoading(true);
//     setError('');
//     const emailData = {
//       recipient: selectedLead.email,
//       subject: emailSubject,
//       body: emailBody
//     };

//     axios.post('/send-email/', emailData)
//       .then(response => {
//         alert('Email sent successfully!');
//         setShowModal(false);
//       })
//       .catch(error => {
//         setError('Failed to send email. Please try again.');
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   return (
//     <div className="container mt-5">
//       <h3 className="text-center mb-4">Contact Table</h3>
//       <div className="table-responsive">
//         <table className="table table-striped table-bordered">
//           <thead className="thead-dark">
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Email</th>
            
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {leads.map((lead) => (
//               <tr key={lead.id}>
//                 <td>{lead.id}</td>
//                 <td>{lead.name}</td>
//                 <td>{lead.email}</td>
            
//                 <td>
//                   <button 
//                     onClick={() => handleComposeEmail(lead)}
//                     className='btn btn-primary btn-sm'
//                   >
//                     Compose Email
//                   </button>
                 
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Modal for composing email */}
//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Compose Email to {selectedLead?.name}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {error && <div className="alert alert-danger">{error}</div>}
//           <Form>
//             <Form.Group className="mb-3">
//               <Form.Label>Choose Template</Form.Label>
//               <Form.Select value={selectedTemplate} onChange={handleTemplateChange}>
//                 <option value="">Select a template</option>
//                 {emailTemplates.map(template => (
//                   <option key={template.id} value={template.id}>
//                     {template.subject}
//                   </option>
//                 ))}
//               </Form.Select>
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Subject</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={emailSubject}
//                 onChange={(e) => setEmailSubject(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Body</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={5}
//                 value={emailBody}
//                 onChange={(e) => setEmailBody(e.target.value)}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowModal(false)}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleSendEmail} disabled={loading}>
//             {loading ? 'Sending...' : 'Send Email'}
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// EmailForm.propTypes = {
//   leads: PropTypes.array.isRequired,
//   getLeads: PropTypes.func.isRequired,
//   deleteLead: PropTypes.func.isRequired,
// };

// const mapStateToProps = (state) => ({
//   leads: state.leads.leads,
// });

// export default connect(mapStateToProps, { getLeads, deleteLead })(EmailForm);
// import React, { useState, useEffect } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { getLeads, deleteLead } from '../../actions/leads';
// import axios from 'axios';
// import { Modal, Button, Form } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

// const EmailForm = ({ leads, getLeads }) => {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedLead, setSelectedLead] = useState(null);
//   const [emailSubject, setEmailSubject] = useState('');
//   const [emailBody, setEmailBody] = useState('');
//   const [selectedTemplate, setSelectedTemplate] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const navigate = useNavigate(); // Use useNavigate for navigation

//   const emailTemplates = [
//     { id: 1, subject: 'Welcome Email', body: 'Hello, Welcome to our platform!' },
//     { id: 2, subject: 'Follow-up Email', body: 'Hi, just checking in with you!' },
//     { id: 3, subject: 'Reminder Email', body: 'Don\'t forget about our upcoming meeting.' }
//   ];

//   useEffect(() => {
//     getLeads();
//   }, [getLeads]);

//   const handleComposeEmail = (lead) => {
//     setSelectedLead(lead);
//     setShowModal(true);
//   };

//   const handleTemplateChange = (e) => {
//     const selected = emailTemplates.find(template => template.id === parseInt(e.target.value));
//     if (selected) {
//       setEmailSubject(selected.subject);
//       setEmailBody(selected.body);
//       setSelectedTemplate(selected.id);
//     }
//   };

//   const handleSendEmail = () => {
//     setLoading(true);
//     setError('');
//     const emailData = {
//       recipient: selectedLead.email,
//       subject: emailSubject,
//       body: emailBody
//     };

//     axios.post('/send-email/', emailData)
//       .then(response => {
//         alert('Email sent successfully!');
//         setShowModal(false);
//       })
//       .catch(error => {
//         setError('Failed to send email. Please try again.');
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   const handleViewEmailHistory = (lead) => {
//     navigate(`/emails/${lead.email}`); // Use navigate for routing
//   };

//   return (
//     <div className="container mt-5">
//       <h3 className="text-center mb-4">Email Tracking</h3>
//       <div className="table-responsive">
//         <table className="table table-striped table-bordered">
//           <thead className="thead-dark">
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {leads.map((lead) => (
//               <tr key={lead.id}>
//                 <td>{lead.id}</td>
//                 <td>{lead.name}</td>
//                 <td>{lead.email}</td>
//                 <td>
//                   <button 
//                     onClick={() => handleComposeEmail(lead)}
//                     className='btn btn-primary btn-sm'
//                   >
//                     Compose Email
//                   </button>
//                   <button 
//                     onClick={() => handleViewEmailHistory(lead)}
//                     className='btn btn-info btn-sm ml-2'
//                   >
//                     View Email History
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Modal for composing email */}
//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Compose Email to {selectedLead?.name}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {error && <div className="alert alert-danger">{error}</div>}
//           <Form>
//             <Form.Group className="mb-3">
//               <Form.Label>Choose Template</Form.Label>
//               <Form.Select value={selectedTemplate} onChange={handleTemplateChange}>
//                 <option value="">Select a template</option>
//                 {emailTemplates.map(template => (
//                   <option key={template.id} value={template.id}>
//                     {template.subject}
//                   </option>
//                 ))}
//               </Form.Select>
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Subject</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={emailSubject}
//                 onChange={(e) => setEmailSubject(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Body</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={5}
//                 value={emailBody}
//                 onChange={(e) => setEmailBody(e.target.value)}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowModal(false)}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleSendEmail} disabled={loading}>
//             {loading ? 'Sending...' : 'Send Email'}
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// EmailForm.propTypes = {
//   leads: PropTypes.array.isRequired,
//   getLeads: PropTypes.func.isRequired,
//   deleteLead: PropTypes.func.isRequired,
// };

// const mapStateToProps = (state) => ({
//   leads: state.leads.leads,
// });

// export default connect(mapStateToProps, { getLeads, deleteLead })(EmailForm);
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeads, deleteLead } from '../../actions/leads';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../Leads/Leads.css'; // Apply Leads.css for consistent styling

const EmailForm = ({ leads, getLeads }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const emailTemplates = [
    { id: 1, subject: 'Welcome Email', body: 'Hello, Welcome to our platform!' },
    { id: 2, subject: 'Follow-up Email', body: 'Hi, just checking in with you!' },
    { id: 3, subject: 'Reminder Email', body: 'Don\'t forget about our upcoming meeting.' }
  ];

  useEffect(() => {
    getLeads();
  }, [getLeads]);

  const handleComposeEmail = (lead) => {
    setSelectedLead(lead);
    setShowModal(true);
  };

  const handleTemplateChange = (e) => {
    const selected = emailTemplates.find(template => template.id === parseInt(e.target.value));
    if (selected) {
      setEmailSubject(selected.subject);
      setEmailBody(selected.body);
      setSelectedTemplate(selected.id);
    }
  };

  const handleSendEmail = () => {
    setLoading(true);
    setError('');
    const emailData = {
      recipient: selectedLead.email,
      subject: emailSubject,
      body: emailBody
    };

    axios.post('/send-email/', emailData)
      .then(response => {
        alert('Email sent successfully!');
        setShowModal(false);
      })
      .catch(error => {
        setError('Failed to send email. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleViewEmailHistory = (lead) => {
    navigate(`/emails/${lead.email}`);
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4" style={{ color: '#6a1b9a' }}>Email Tracking</h3>
      <div className="table-responsive">
        <table className="table custom-table">
          <thead className="custom-thead">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id}>
                <td>{lead.id}</td>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>
                  <Button 
                    onClick={() => handleComposeEmail(lead)}
                    variant="primary"
                    size="sm"
                    style={{ backgroundColor: '#6a1b9a', borderColor: '#6a1b9a' }}
                  >
                    Compose Email
                  </Button>
                  <Button 
                    onClick={() => handleViewEmailHistory(lead)}
                    variant="info"
                    size="sm"
                    className="ml-2"
                  >
                    View Email History
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for composing email */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Compose Email to {selectedLead?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <div className="alert alert-danger">{error}</div>}
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Choose Template</Form.Label>
              <Form.Select value={selectedTemplate} onChange={handleTemplateChange}>
                <option value="">Select a template</option>
                {emailTemplates.map(template => (
                  <option key={template.id} value={template.id}>
                    {template.subject}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                value={emailSubject}
                onChange={(e) => setEmailSubject(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Body</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                value={emailBody}
                onChange={(e) => setEmailBody(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSendEmail} disabled={loading}>
            {loading ? 'Sending...' : 'Send Email'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

EmailForm.propTypes = {
  leads: PropTypes.array.isRequired,
  getLeads: PropTypes.func.isRequired,
  deleteLead: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  leads: state.leads.leads,
});

export default connect(mapStateToProps, { getLeads, deleteLead })(EmailForm);
