import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import CreateIssueModal from './CreateIssue';
import Sidebar2 from '../Dashboard/Sidebar2';
import IssueManager from './IssueManager';

const IssueManagement = () => {
  const [showModal, setShowModal] = useState(false);


  return (
    <div>
        <Sidebar2/>
      <div >
    <div className="container">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aut, hello hi <br/></div>
<br />

      <IssueManager/>

      {/* Issue Creation Modal */}

      {/* Display the issues in a table */}
    </div>
    </div>
  );
  const mystyle={
    "position": "absolute",
    "margin-top": "200px",
   " margin-left": "200px"
}
};

export default IssueManagement;
