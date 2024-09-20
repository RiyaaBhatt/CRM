import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeads, deleteLead, updateLead } from '../../actions/leads';
import { Container, Table, Form, Button, Card } from 'react-bootstrap';
import './Leads.css'; // Import custom CSS file

const Leads = ({ leads, getLeads, deleteLead, updateLead }) => {
  const [searchTerm, setSearchTerm] = useState(''); // State for search input

  useEffect(() => {
    getLeads();
  }, [getLeads]);

  const handleStatusChange = (lead, e) => {
    const updatedLead = {
      ...lead,
      status: e.target.value,
    };
    updateLead(lead.id, updatedLead); // Pass ID and updatedLead
  };

  const handleContactClick = (lead) => {
    const updatedLead = {
      ...lead,
      is_contacted: true, // Set is_contacted to true
    };
    updateLead(lead.id, updatedLead); // Pass ID and updatedLead
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'new':
        return { backgroundColor: '#f5f5f5', color: 'black' }; // Light gray
      case 'contacted':
        return { backgroundColor: '#ffeb3b', color: 'black' }; // Yellow
      case 'interested':
        return { backgroundColor: '#4caf50', color: 'white' }; // Green
      case 'not_interested':
        return { backgroundColor: '#f44336', color: 'white' }; // Red
      case 'converted':
        return { backgroundColor: '#03a9f4', color: 'white' }; // Blue
      default:
        return {}; // Default style
    }
  };

  // Filter leads based on search term
  const filteredLeads = leads
    .filter(lead => !lead.is_contacted) // Exclude contacted leads
    .filter(lead => lead.name.toLowerCase().includes(searchTerm.toLowerCase())); // Filter by search term

  return (
    <Container className="mt-4">
      <strong><h3 className="text-center mb-4" style={{ color: '#6a1b9a' }}>Leads Table</h3></strong>

      {/* Search bar */}
      <Card className="p-3 mb-4" style={{ borderColor: '#6a1b9a' }}>
        <Form.Group controlId="searchLeads">
          <Form.Control
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control-lg"
            style={{ borderColor: '#6a1b9a' }}
          />
        </Form.Group>
      </Card>

      <div className="table-responsive">
        <Table bordered hover className="shadow-sm custom-table">
          <thead className="custom-thead">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Status</th>
              <th>Contact</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredLeads.map((lead) => (
              <tr key={lead.id}>
                <td>{lead.id}</td>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.message}</td>

                {/* Status Dropdown with dynamic inline style */}
                <td style={getStatusStyle(lead.status)}>
                  <Form.Control
                    as="select"
                    value={lead.status}
                    onChange={(e) => handleStatusChange(lead, e)}
                    className="form-select no-border-dropdown"
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="interested">Interested</option>
                    <option value="not_interested">Not Interested</option>
                    <option value="converted">Converted</option>
                  </Form.Control>
                </td>

                <td>
                  {!lead.is_contacted ? (
                    <Button
                      onClick={() => handleContactClick(lead)}
                      variant="success"
                      size="sm"
                      style={{ backgroundColor: '#6a1b9a', borderColor: '#6a1b9a' }}
                    >
                      Contact
                    </Button>
                  ) : (
                    <span>Contacted</span>
                  )}
                </td>

                <td>{lead.created_at}</td>
                <td>
                  <Button
                    onClick={() => deleteLead(lead.id)}
                    variant="danger"
                    size="sm"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

Leads.propTypes = {
  leads: PropTypes.array.isRequired,
  getLeads: PropTypes.func.isRequired,
  deleteLead: PropTypes.func.isRequired,
  updateLead: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  leads: state.leads.leads,
});

export default connect(mapStateToProps, { getLeads, deleteLead, updateLead })(Leads);
