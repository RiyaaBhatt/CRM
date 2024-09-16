import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeads, deleteLead, updateLead } from '../../actions/leads';

const Leads = ({ leads, getLeads, deleteLead, updateLead }) => {
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

  // Filter out leads that are already contacted
  const filteredLeads = leads.filter(lead => !lead.is_contacted);

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Leads Table</h3>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Status</th>
              <th>Contact</th>
              <th>Created At</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredLeads.map((lead) => (
              <tr key={lead.id}>
                <td>{lead.id}</td>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.message}</td>
                
                {/* Dropdown for status */}
                <td>
                  <select
                    value={lead.status}
                    onChange={(e) => handleStatusChange(lead, e)}
                    className="form-select"
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="interested">Interested</option>
                    <option value="not_interested">Not Interested</option>
                    <option value="converted">Converted</option>
                  </select>
                </td>

                {/* Button for Contact */}
                <td>
                  {!lead.is_contacted ? (
                    <button
                      onClick={() => handleContactClick(lead)}
                      className="btn btn-success btn-sm"
                    >
                      Contact
                    </button>
                  ) : (
                    <span>Contacted</span>
                  )}
                </td>

                <td>{lead.created_at}</td>
                <td>
                  <button
                    onClick={() => deleteLead(lead.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
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
