import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useState } from 'react';
// Importing React Icons
import { AiOutlineHome } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { GiProgression } from 'react-icons/gi';
import { MdAnalytics } from 'react-icons/md';
import { BiGitBranch } from 'react-icons/bi';
// Import custom styles
// import './Sidebar.css';
import { MdReportProblem } from 'react-icons/md'; 

const Sidebar2 = () => {
  const [hover, setHover] = useState(false);

  return (
    <div 
      className={`sidebar ${hover ? 'hover' : ''}`} 
      onMouseEnter={() => setHover(true)} 
      onMouseLeave={() => setHover(false)}
    >
      <Nav className="flex-column">
        <LinkContainer to="/home" className="linkcont">
          <Nav.Link>
            <AiOutlineHome className="sidebar-icon" /> 
            <span className="sidebar-text">Home</span>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/customer" className="linkcont">
          <Nav.Link>
            <FaUserAlt className="sidebar-icon" /> 
            <span className="sidebar-text">Customer</span>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/leads" className="linkcont">
          <Nav.Link>
            <FiUsers className="sidebar-icon" /> 
            <span className="sidebar-text">Leads</span>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/pipeline" className="linkcont">
          <Nav.Link>
            <GiProgression className="sidebar-icon" /> 
            <span className="sidebar-text">Pipeline</span>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/analytics" className="linkcont">
          <Nav.Link>
          <BiGitBranch className="sidebar-icon" />
            <span className="sidebar-text">Contact</span>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/issues" className="linkcont">
  <Nav.Link>
    <MdReportProblem className="sidebar-icon" />
    <span className="sidebar-text">Issue</span>
  </Nav.Link>
</LinkContainer>

      </Nav>
    </div>
  );
};

export default Sidebar2;
