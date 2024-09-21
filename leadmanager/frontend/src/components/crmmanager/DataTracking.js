// // import React, { useEffect, useState } from 'react';
// // import { Table } from 'react-bootstrap';
// // import { PieChart, BarChart, Pie, Bar, XAxis, YAxis, Tooltip, Legend, Cell } from 'recharts';
// // import CrmMainDashboard from './CrmMainDashboard';

// // const CompanyDataTracking = () => {
// //     const [companies, setCompanies] = useState([]);

// //     useEffect(() => {
// //         const fetchData = async () => {
// //             const response = await fetch('http://127.0.0.1:8000/api/company/get');
// //             const data = await response.json();
// //             setCompanies(data);
// //         };

// //         fetchData();
// //     }, []);

// //   // Grouping company sizes for bar chart
// // const sizeDistribution = companies.reduce((acc, company) => {
// //     const size = company.size; // Assume size is a number
// //     if (size < 50) acc['<50'] = (acc['<50'] || 0) + 1;
// //     else if (size < 100) acc['50-100'] = (acc['50-100'] || 0) + 1;
// //     else if (size < 500) acc['100-500'] = (acc['100-500'] || 0) + 1;
// //     else if (size < 1000) acc['500-1000'] = (acc['500-1000'] || 0) + 1;
// //     else acc['>1000'] = (acc['>1000'] || 0) + 1;
// //     return acc;
// // }, {});

// // // Create an array for BarChart
// // const sizeData = Object.keys(sizeDistribution).map(key => ({
// //     name: key,
// //     value: sizeDistribution[key],
// // }));


// //     // Create distribution for details
// //     const detailsDistribution = companies.reduce((acc, company) => {
// //         const detail = company.details; // Assuming detail is a string
// //         acc[detail] = (acc[detail] || 0) + 1; // Count occurrences
// //         return acc;
// //     }, {});

// //     // Convert to array format for PieChart
// //     const pieChartData = Object.keys(detailsDistribution).map(key => ({
// //         name: key,
// //         value: detailsDistribution[key],
// //     }));
// //     const colorMapping = {
// //         '<50': '#FF5733',
// //         '50-100': '#33FF57',
// //         '100-500': '#3357FF',
// //         '500-1000': '#F1C40F',
// //         '>1000': '#8E44AD',
// //     };
    
// //     return (
// //         <div>
// //             <CrmMainDashboard />
// //             <div className='custom'>
// //                 <h2>Company Data Tracking</h2>
// //                 <Table striped bordered hover>
// //                     <thead style={{ backgroundColor: '#6A1B9A', color: 'white' }}>
// //                         <tr>
// //                             <th>Name</th>
// //                             <th>Size</th>
// //                             <th>Details</th>
// //                             <th>Website</th>
// //                             <th>Phone Number</th>
// //                             <th>Address</th>
// //                         </tr>
// //                     </thead>
// //                     <tbody>
// //                         {companies.map((company, index) => (
// //                             <tr key={index}>
// //                                 <td>{company.name}</td>
// //                                 <td>{company.size}</td>
// //                                 <td>{company.details}</td>
// //                                 <td>{company.website}</td>
// //                                 <td>{company.phone_number}</td>
// //                                 <td>{company.address}</td>
// //                             </tr>
// //                         ))}
// //                     </tbody>
// //                 </Table>

// //                 <div style={{ display: 'flex', justifyContent: 'space-around' }}>
// //     <div>
// //     <PieChart width={400} height={400}>
// //     <Pie 
// //         data={pieChartData} 
// //         dataKey="value" 
// //         nameKey="name" 
// //         cx="50%" 
// //         cy="50%" 
// //         outerRadius={150}
// //     >
// //         {pieChartData.map((entry, index) => (
// //             <Cell key={`cell-${index}`} fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
// //         ))}
// //     </Pie>
// //     <Tooltip 
// //         formatter={(value, name) => [`${value}`, `${name}`]} // Display value and name
// //     />
// // </PieChart>


// //     </div>
// //     <div>
// //         <h3>Company Size Distribution</h3>
// //         <BarChart width={400} height={400} data={sizeData}  barSize={40}>
// //     <XAxis dataKey="name" />
// //     <YAxis />
// //     <Tooltip />
// //     <Legend />
// //     <Bar dataKey="value" fill="#6A1B9A"  />
// // </BarChart>

// //     </div>
// // </div>


// //         </div></div>
// //     );
// // };

// // export default CompanyDataTracking;
// import React, { useEffect, useState } from 'react';
// import { Table } from 'react-bootstrap';
// import { PieChart, BarChart, Pie, Bar, XAxis, YAxis, Tooltip, Legend, Cell } from 'recharts';
// import CrmMainDashboard from './CrmMainDashboard';

// const CompanyDataTracking = () => {
//     const [companies, setCompanies] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await fetch('http://127.0.0.1:8000/api/company/get');
//             const data = await response.json();
//             setCompanies(data);
//         };

//         fetchData();
//     }, []);

//     // Grouping company sizes for bar chart
//     const sizeDistribution = companies.reduce((acc, company) => {
//         const size = company.size; // Assume size is a number
//         if (size < 50) acc['<50'] = (acc['<50'] || 0) + 1;
//         else if (size < 100) acc['50-100'] = (acc['50-100'] || 0) + 1;
//         else if (size < 500) acc['100-500'] = (acc['100-500'] || 0) + 1;
//         else if (size < 1000) acc['500-1000'] = (acc['500-1000'] || 0) + 1;
//         else acc['>1000'] = (acc['>1000'] || 0) + 1;
//         return acc;
//     }, {});

//     // Create an array for BarChart
//     const sizeData = Object.keys(sizeDistribution).map(key => ({
//         name: key,
//         value: sizeDistribution[key],
//     }));

//     // Create distribution for details
//     const detailsDistribution = companies.reduce((acc, company) => {
//         const detail = company.details; // Assuming detail is a string
//         acc[detail] = (acc[detail] || 0) + 1; // Count occurrences
//         return acc;
//     }, {});

//     // Convert to array format for PieChart
//     const pieChartData = Object.keys(detailsDistribution).map(key => ({
//         name: key,
//         value: detailsDistribution[key],
//     }));

//     return (
//         <div>
//             <CrmMainDashboard />
//             <div className='custom'>
//                 <h2>Company Data Tracking</h2>
//                 <Table bordered hover responsive style={{ backgroundColor: 'white' }}>
//                     <thead style={{ backgroundColor: '#6A1B9A', color: 'white' }}>
//                         <tr>
//                             <th>Name</th>
//                             <th>Size</th>
//                             <th>Details</th>
//                             <th>Website</th>
//                             <th>Phone Number</th>
//                             <th>Address</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {companies.map((company, index) => (
//                             <tr key={index}>
//                                 <td>{company.name}</td>
//                                 <td>{company.size}</td>
//                                 <td>{company.details}</td>
//                                 <td>{company.website}</td>
//                                 <td>{company.phone_number}</td>
//                                 <td>{company.address}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </Table>

//                 <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
//                     <div>
//                         <h3>Details Distribution</h3>
//                         <PieChart width={400} height={400}>
//                             <Pie 
//                                 data={pieChartData} 
//                                 dataKey="value" 
//                                 nameKey="name" 
//                                 cx="50%" 
//                                 cy="50%" 
//                                 outerRadius={150}
//                                 fill="#8884d8"
//                             >
//                                 {pieChartData.map((entry, index) => (
//                                     <Cell key={`cell-${index}`} fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
//                                 ))}
//                             </Pie>
//                             <Tooltip formatter={(value, name) => [`${value}`, `${name}`]} />
//                         </PieChart>
//                     </div>

//                     <div>
//                         <h3>Company Size Distribution</h3>
//                         <BarChart width={400} height={400} data={sizeData} barSize={40}>
//                             <XAxis dataKey="name" />
//                             <YAxis />
//                             <Tooltip />
//                             <Legend />
//                             <Bar dataKey="value" fill="#6A1B9A" />
//                         </BarChart>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CompanyDataTracking;
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { PieChart, BarChart, Pie, Bar, XAxis, YAxis, Tooltip, Legend, Cell } from 'recharts';
import CrmMainDashboard from './CrmMainDashboard';
import '../Leads/Leads.css'; // Use the existing CSS for consistent styling

const CompanyDataTracking = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://127.0.0.1:8000/api/company/get');
            const data = await response.json();
            setCompanies(data);
        };

        fetchData();
    }, []);

    // Grouping company sizes for bar chart
    const sizeDistribution = companies.reduce((acc, company) => {
        const size = company.size; // Assume size is a number
        if (size < 50) acc['<50'] = (acc['<50'] || 0) + 1;
        else if (size < 100) acc['50-100'] = (acc['50-100'] || 0) + 1;
        else if (size < 500) acc['100-500'] = (acc['100-500'] || 0) + 1;
        else if (size < 1000) acc['500-1000'] = (acc['500-1000'] || 0) + 1;
        else acc['>1000'] = (acc['>1000'] || 0) + 1;
        return acc;
    }, {});

    // Create an array for BarChart
    const sizeData = Object.keys(sizeDistribution).map(key => ({
        name: key,
        value: sizeDistribution[key],
    }));

    // Create distribution for details
    const detailsDistribution = companies.reduce((acc, company) => {
        const detail = company.details; // Assuming detail is a string
        acc[detail] = (acc[detail] || 0) + 1; // Count occurrences
        return acc;
    }, {});

    // Convert to array format for PieChart
    const pieChartData = Object.keys(detailsDistribution).map(key => ({
        name: key,
        value: detailsDistribution[key],
    }));

    return (
        <div>
            <CrmMainDashboard />
            <div className="container mt-5">
                <h2 className="text-center" style={{ color: '#6a1b9a' }}>Company Data Tracking</h2>

                <Table bordered hover responsive className="custom-table">
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
                        {companies.map((company, index) => (
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
                </Table>

                <div className="d-flex justify-content-around mt-4">
                    <div>
                        <h3 style={{ color: '#6a1b9a' }}>Details Distribution</h3>
                        <PieChart width={400} height={400}>
                            <Pie 
                                data={pieChartData} 
                                dataKey="value" 
                                nameKey="name" 
                                cx="50%" 
                                cy="50%" 
                                outerRadius={150}
                                fill="#8884d8"
                            >
                                {pieChartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
                                ))}
                            </Pie>
                            <Tooltip formatter={(value, name) => [`${value}`, `${name}`]} />
                        </PieChart>
                    </div>

                    <div>
                        <h3 style={{ color: '#6a1b9a' }}>Company Size Distribution</h3>
                        <BarChart width={400} height={400} data={sizeData} barSize={40}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="value" fill="#6A1B9A" />
                        </BarChart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyDataTracking;
