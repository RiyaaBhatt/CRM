import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeads, deleteLead, updateLead } from '../../actions/leads';
import { Badge, Button, Card, Col, Container, Row } from 'react-bootstrap';

export class Pipeline extends Component {
  static propTypes = {
    leads: PropTypes.array.isRequired,
    getLeads: PropTypes.func.isRequired,
    deleteLead: PropTypes.func.isRequired,
    updateLead: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getLeads();
  }

  handleStatusChange = (lead, e) => {
    const updatedLead = {
      ...lead,
      status: e.target.value,
    };
    this.props.updateLead(updatedLead);
  };

  handleContactClick = (lead) => {
    const updatedLead = {
      ...lead,
      is_contacted: true,
    };
    this.props.updateLead(updatedLead);
  };

  getBadgeVariant(status) {
    switch (status) {
      case 'new':
        return 'primary';
      case 'contacted':
        return 'info';
      case 'interested':
        return 'success';
      case 'not_interested':
        return 'danger';
      case 'converted':
        return 'secondary';
      default:
        return 'light';
    }
  }

  renderPipelineColumn = (status) => {
    const filteredLeads = this.props.leads.filter(lead => lead.status === status);

    return (
      <Col key={status} md={2} className="mb-4">
        <Card>
          <Card.Header>
            <h5>{status.charAt(0).toUpperCase() + status.slice(1)}</h5>
          </Card.Header>
          <Card.Body>
            {filteredLeads.length > 0 ? (
              filteredLeads.map((lead) => (
                <Card key={lead.id} className="mb-2">
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h6>{lead.name}</h6>
                    
                      </div>
                      <div>
                       
                        <Button
                          onClick={() => this.props.deleteLead(lead.id)}
                          className="btn btn-danger btn-sm ml-2"
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              ))
            ) : (
              <p className="text-center">No leads</p>
            )}
          </Card.Body>
        </Card>
      </Col>
    );
  };

  render() {
    return (
      <Container className="mt-5">
        <h3 className="text-center mb-4">Pipeline</h3>
        <Row>
          {['new', 'contacted', 'interested', 'not_interested', 'converted'].map(status => (
            this.renderPipelineColumn(status)
          ))}
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  leads: state.leads.leads,
});

export default connect(mapStateToProps, { getLeads, deleteLead, updateLead })(Pipeline);
