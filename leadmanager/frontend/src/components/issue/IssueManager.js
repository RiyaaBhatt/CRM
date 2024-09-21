// import React, { useState, useEffect } from 'react';
// import CreateIssue from './CreateIssue'; // Adjust the path accordingly
// import axios from 'axios';

// const IssueManager = () => {
//   const [show, setShow] = useState(false);
//   const [issues, setIssues] = useState([]); // State to hold fetched issues

//   const fetchIssues = async () => {
//     try {
//       const response = await axios.get('http://127.0.0.1:8000/api/issue/');
//       setIssues(response.data); // Set the fetched issues into state
//     } catch (error) {
//       console.error('Error fetching issues:', error);
//     }
//   };

//   useEffect(() => {
//     fetchIssues(); // Fetch issues when the component mounts
//   }, []);

//   const handleShow = () => setShow(true);
//   const handleClose = () => setShow(false);

//   return (
//     <div>
//       <button onClick={handleShow}>Create Issue</button>
//       <CreateIssue show={show} handleClose={handleClose} fetchIssues={fetchIssues} />
      
//       <h2>Issues</h2>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Issue Type</th>
//             <th>Description</th>
//             <th>Status</th>
//             <th>Priority</th>
//             <th>Created At</th>
//           </tr>
//         </thead>
//         <tbody>
//           {issues.map((issue) => (
//             <tr key={issue.id}>
//               <td>{issue.issue_type}</td>
//               <td>{issue.description}</td>
//               <td>{issue.status}</td>
//               <td>{issue.priority}</td>
//               <td>{new Date(issue.created_at).toLocaleString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default IssueManager;
// import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux'; // Assuming you're using Redux for auth
// import CreateIssue from './CreateIssue'; // Adjust the path accordingly
// import axios from 'axios';

// const IssueManager = () => {
//   const [show, setShow] = useState(false);
//   const [issues, setIssues] = useState([]); // State to hold fetched issues
//   const user = useSelector((state) => state.auth.user); // Get the logged-in user

//   const fetchIssues = async () => {
//     try {
//       const response = await axios.get(`http://127.0.0.1:8000/api/issue/?username=${user.username}`); 
//       setIssues(response.data); // Set the fetched issues into state
//     } catch (error) {
//       console.error('Error fetching issues:', error);
//     }
//   };

//   useEffect(() => {
//     fetchIssues(); // Fetch issues when the component mounts
//   }, [user]); // Re-fetch issues when user changes

//   const handleShow = () => setShow(true);
//   const handleClose = () => setShow(false);

//   return (
//     <div>
//       <button onClick={handleShow}>Create Issue</button>
//       <CreateIssue show={show} handleClose={handleClose} fetchIssues={fetchIssues} />
      
//       <h2>Your Issues</h2>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Issue Type</th>
//             <th>Description</th>
//             <th>Status</th>
//             <th>Priority</th>
//             <th>Created At</th>
//           </tr>
//         </thead>
//         <tbody>
//           {issues.map((issue) => (
//             <tr key={issue.id}>
//               <td>{issue.issue_type}</td>
//               <td>{issue.description}</td>
//               <td>{issue.status}</td>
//               <td>{issue.priority}</td>
//               <td>{new Date(issue.created_at).toLocaleString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default IssueManager;
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'; 
import CreateIssue from './CreateIssue'; // Import CreateIssue component
import axios from 'axios';
import { Button, Modal, Form } from 'react-bootstrap';
import '../Leads/Leads.css' 

const IssueManager = () => {
  const [show, setShow] = useState(false);
  const [issues, setIssues] = useState([]); 
  const user = useSelector((state) => state.auth.user);

  // Fetch issues related to the logged-in user
  const fetchIssues = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/issue/?username=${user.username}`);
      setIssues(response.data);
    } catch (error) {
      console.error('Error fetching issues:', error);
    }
  };

  useEffect(() => {
    fetchIssues(); 
  }, [user]);

  // Handle modal visibility
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="container mt-5">
      <Button 
        onClick={handleShow} 
        style={{ backgroundColor: '#6a1b9a', borderColor: '#6a1b9a' }}
      >
        Create Issue
      </Button>

      {/* Modal for creating a new issue */}
      <CreateIssue show={show} handleClose={handleClose} fetchIssues={fetchIssues} />

      <h2 className="text-center my-4" style={{ color: '#6a1b9a' }}>Your Issues</h2>

      <div className="table-responsive">
        <table className="table custom-table">
          <thead className="custom-thead">
            <tr>
              <th>Issue Type</th>
              <th>Description</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {issues.map((issue) => (
              <tr key={issue.id}>
                <td>{issue.issue_type}</td>
                <td>{issue.description}</td>
                <td>{issue.status}</td>
                <td>{issue.priority}</td>
                <td>{new Date(issue.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IssueManager;
