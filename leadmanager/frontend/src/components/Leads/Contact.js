// // src/components/ContactPage.js

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
// import { getLeads } from '../../actions/leads';
// import Sidebar2 from '../Dashboard/Sidebar2';
// import './Leads.css'
// const ContactPage = () => {
//     const dispatch = useDispatch();
//     const leads = useSelector(state => state.leads.leads || []);

//     useEffect(() => {
//         dispatch(getLeads());
//     }, [dispatch]);

//     // Filter leads based on criteria
//     const filteredLeads = leads.filter(lead => lead.is_contacted || lead.status === 'converted');

//     return (
//         <div className="container mt-5">
//             <Sidebar2/>
//             <h3 className="text-center mb-4">Contacted and Converted Leads</h3>
//             <div className="table-responsive">
//                 <table className="table table-striped table-bordered">
//                     <thead className="thead-dark">
//                         <tr>
//                             <th>ID</th>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Message</th>
//                             <th>Status</th>
                           
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {filteredLeads.map(lead => (
//                             <tr key={lead.id} style={{ backgroundColor: lead.status === 'converted' ? '#d4edda' : (lead.is_contacted ? '#e2e3e5' : 'white') }}>
//                                 <td>{lead.id}</td>
//                                 <td>{lead.name}</td>
//                                 <td>{lead.email}</td>
//                                 <td>{lead.message}</td>
//                                 <td>{lead.status}</td>
                             
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// ContactPage.propTypes = {
//     leads: PropTypes.array.isRequired,
//     getLeads: PropTypes.func.isRequired
// };

// export default ContactPage;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeads } from '../../actions/leads';
import Sidebar2 from '../Dashboard/Sidebar2';
import './Leads.css'; // Use Leads.css for consistent styling

const ContactPage = () => {
    const dispatch = useDispatch();
    const leads = useSelector(state => state.leads.leads || []);

    useEffect(() => {
        dispatch(getLeads());
    }, [dispatch]);

    // Filter leads based on criteria
    const filteredLeads = leads.filter(lead => lead.is_contacted || lead.status === 'converted');

    return (
        <div className="container mt-5">
            <Sidebar2 />
            <h3 className="text-center mb-4" style={{ color: '#6a1b9a' }}>Contacted and Converted Leads</h3>
            <div className="table-responsive">
                <table className="table custom-table">
                    <thead className="custom-thead">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredLeads.map(lead => (
                            <tr key={lead.id} className={lead.status === 'converted' ? 'status-converted' : 'status-contacted'}>
                                <td>{lead.id}</td>
                                <td>{lead.name}</td>
                                <td>{lead.email}</td>
                                <td>{lead.message}</td>
                                <td>{lead.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

ContactPage.propTypes = {
    leads: PropTypes.array.isRequired,
    getLeads: PropTypes.func.isRequired
};

export default ContactPage;
