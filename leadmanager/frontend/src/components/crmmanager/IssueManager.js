// import React, { useState, useEffect } from 'react';
// import CreateIssue from '../issue/CreateIssue';
// import axios from 'axios';
// import CrmMainDashboard from './CrmMainDashboard';

// const IssueManager = () => {
//   const [show, setShow] = useState(false);
//   const [issues, setIssues] = useState([]);

//   const fetchIssues = async () => {
//     try {
//       const response = await axios.get('http://127.0.0.1:8000/api/issue/');
//       setIssues(response.data);
//     } catch (error) {
//       console.error('Error fetching issues:', error);
//     }
//   };

//   useEffect(() => {
//     fetchIssues();
//   }, []);

//   const handleShow = () => setShow(true);
//   const handleClose = () => setShow(false);

//   const updateIssueStatus = async (id, newStatus) => {
//     try {
//       await axios.patch(`http://127.0.0.1:8000/api/issue/${id}/`, { status: newStatus });
//       fetchIssues(); // Refresh issues after update
//     } catch (error) {
//       console.error('Error updating issue status:', error);
//     }
//   };

//   return (
//     <div>
//         <CrmMainDashboard/>
//       <button onClick={handleShow}>Create Issue</button>
//       <CreateIssue show={show} handleClose={handleClose} fetchIssues={fetchIssues} />
      
//       <h2>Issues</h2>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>userid</th>
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
//                 <td>{issue.username}</td>
//               <td>{issue.issue_type}</td>
//               <td>{issue.description}</td>
//               <td>
//                 <select
//                   value={issue.status}
//                   onChange={(e) => updateIssueStatus(issue.id, e.target.value)}
//                 >
//                   <option value="Open">Open</option>
//                   <option value="Closed">Closed</option>
//                   <option value="Resolved">Resolved</option>
//                   <option value="In Progress">In Progress</option>
//                 </select>
//               </td>
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
// import CreateIssue from '../issue/CreateIssue';
// import axios from 'axios';
// import CrmMainDashboard from './CrmMainDashboard';

// const IssueManager = () => {
//   const [show, setShow] = useState(false);
//   const [issues, setIssues] = useState([]);
//   const [companyDetails, setCompanyDetails] = useState([]); // State to hold company details

//   const fetchIssues = async () => {
//     try {
//       const response = await axios.get('http://127.0.0.1:8000/api/issue/');
//       setIssues(response.data);
//     } catch (error) {
//       console.error('Error fetching issues:', error);
//     }
//   };

//   useEffect(() => {
//     fetchIssues();
//   }, []);

//   const handleShow = () => setShow(true);
//   const handleClose = () => setShow(false);

//   const updateIssueStatus = async (id, newStatus) => {
//     try {
//       await axios.patch(`http://127.0.0.1:8000/api/issue/${id}/`, { status: newStatus });
//       fetchIssues(); // Refresh issues after update
//     } catch (error) {
//       console.error('Error updating issue status:', error);
//     }
//   };

//   const fetchCompanyDetails = async (userId) => {
//     try {
//       const response = await axios.get(`http://127.0.0.1:8000/api/company/user/${userId}/`);
//       setCompanyDetails(response.data);
//     } catch (error) {
//       console.error('Error fetching company details:', error);
//     }
//   };

//   const handleUserIdClick = (userId) => {
//     fetchCompanyDetails(userId);
//   };

//   return (
//     <div>
//       <CrmMainDashboard />
//       <button onClick={handleShow}>Create Issue</button>
//       <CreateIssue show={show} handleClose={handleClose} fetchIssues={fetchIssues} />

//       <h2>Issues</h2>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>User ID</th>
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
//               <td onClick={() => handleUserIdClick(issue.username)} style={{ cursor: 'pointer', color: 'blue' }}>
//                 {issue.username}
//               </td>
//               <td>{issue.issue_type}</td>
//               <td>{issue.description}</td>
//               <td>
//                 <select
//                   value={issue.status}
//                   onChange={(e) => updateIssueStatus(issue.id, e.target.value)}
//                 >
//                   <option value="Open">Open</option>
//                   <option value="Closed">Closed</option>
//                   <option value="Resolved">Resolved</option>
//                   <option value="In Progress">In Progress</option>
//                 </select>
//               </td>
//               <td>{issue.priority}</td>
//               <td>{new Date(issue.created_at).toLocaleString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {companyDetails.length > 0 && (
//         <div>
//           <h2>Company Details</h2>
//           <table className="table">
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Size</th>
//                 <th>Details</th>
//                 <th>Website</th>
//                 <th>Phone Number</th>
//                 <th>Address</th>
//               </tr>
//             </thead>
//             <tbody>
//               {companyDetails.map((company, index) => (
//                 <tr key={index}>
//                   <td>{company.name}</td>
//                   <td>{company.size}</td>
//                   <td>{company.details}</td>
//                   <td>{company.website}</td>
//                   <td>{company.phone_number}</td>
//                   <td>{company.address}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default IssueManager;
import React, { useState, useEffect } from 'react';
import CreateIssue from '../issue/CreateIssue';
import axios from 'axios';
import CrmMainDashboard from './CrmMainDashboard';
import '../Leads/Leads.css'
import { Button } from 'react-bootstrap';

const IssueManager = () => {
  const [show, setShow] = useState(false);
  const [issues, setIssues] = useState([]);
  const [companyDetails, setCompanyDetails] = useState([]);

  const fetchIssues = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/issue/');
      setIssues(response.data);
    } catch (error) {
      console.error('Error fetching issues:', error);
    }
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const updateIssueStatus = async (id, newStatus) => {
    try {
      await axios.patch(`http://127.0.0.1:8000/api/issue/${id}/`, { status: newStatus });
      fetchIssues(); // Refresh issues after update
    } catch (error) {
      console.error('Error updating issue status:', error);
    }
  };

  const fetchCompanyDetails = async (userId) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/company/user/${userId}/`);
      setCompanyDetails(response.data);
    } catch (error) {
      console.error('Error fetching company details:', error);
    }
  };

  const handleUserIdClick = (userId) => {
    fetchCompanyDetails(userId);
  };

  return (
    <div>
      <CrmMainDashboard />
      {/* <Button
        onClick={handleShow}
        style={{ backgroundColor: '#6a1b9a', borderColor: '#6a1b9a', color: 'white', marginBottom: '20px' }}
      >
        Create Issue
      </Button> */}
      <CreateIssue show={show} handleClose={handleClose} fetchIssues={fetchIssues} />

      <h2 style={{ color: '#6a1b9a' }}>Issues</h2>
      <table className="table custom-table">
        <thead className="custom-thead">
          <tr>
            <th>User ID</th>
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
              <td
                onClick={() => handleUserIdClick(issue.username)}
                style={{ cursor: 'pointer', color: '#6a1b9a', textDecoration: 'underline' }}
              >
                {issue.username}
              </td>
              <td>{issue.issue_type}</td>
              <td>{issue.description}</td>
              <td>
                <select
                  value={issue.status}
                  onChange={(e) => updateIssueStatus(issue.id, e.target.value)}
                  style={{ borderColor: '#6a1b9a', color: '#6a1b9a' }}
                >
                  <option value="Open">Open</option>
                  <option value="Closed">Closed</option>
                  <option value="Resolved">Resolved</option>
                  <option value="In Progress">In Progress</option>
                </select>
              </td>
              <td>{issue.priority}</td>
              <td>{new Date(issue.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {companyDetails.length > 0 && (
        <div>
          <h2 style={{ color: '#6a1b9a', marginTop: '20px' }}>Company Details</h2>
          <table className="table custom-table">
            <thead className="custom-thead">
              <tr>
                <th>Name</th>
                <th>Size</th>
                <th>Details</th>
                <th>Website</th>
                <th>Phone Number</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {companyDetails.map((company, index) => (
                <tr key={index}>
                  <td>{company.name}</td>
                  <td>{company.size}</td>
                  <td>{company.details}</td>
                  <td>{company.website}</td>
                  <td>{company.phone_number}</td>
                  <td>{company.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default IssueManager;
