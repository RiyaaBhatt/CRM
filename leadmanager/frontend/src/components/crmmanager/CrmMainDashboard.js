import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
// Importing React Icons
import { MdAnalytics } from 'react-icons/md';
import { FaBuilding } from 'react-icons/fa';
import { FiAlertCircle } from 'react-icons/fi';

// Import custom styles if needed

const CrmMainDashboard = () => {
  const [hover, setHover] = useState(false);

  return (
    <div 
      className={`sidebar ${hover ? 'hover' : ''}`} 
      onMouseEnter={() => setHover(true)} 
      onMouseLeave={() => setHover(false)}
    >
      <Nav className="flex-column">
        {/* CRM Usage Analysis
        <LinkContainer to="/crm-usage-analysis" className="linkcont">
          <Nav.Link>
            <MdAnalytics className="sidebar-icon" /> 
            <span className="sidebar-text">CRM Usage Analysis</span>
          </Nav.Link>
        </LinkContainer> */}

        {/* Company Data Tracking */}
        <LinkContainer to="/company-data-tracking" className="linkcont">
          <Nav.Link>
            <FaBuilding className="sidebar-icon" /> 
            <span className="sidebar-text">Company Data Tracking</span>
          </Nav.Link>
        </LinkContainer>

        {/* Issue Resolution */}
        <LinkContainer to="/issue-resolvation" className="linkcont">
          <Nav.Link>
            <FiAlertCircle className="sidebar-icon" /> 
            <span className="sidebar-text">Issue Resolution</span>
          </Nav.Link>
        </LinkContainer>
      </Nav>
    </div>
  );
};

export default CrmMainDashboard;
