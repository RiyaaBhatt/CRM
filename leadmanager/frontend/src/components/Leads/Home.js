import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeads } from '../../actions/leads';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, BarElement, LineElement, PieController } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';

ChartJS.register(Title, Tooltip, Legend, ArcElement, BarElement, LineElement, PieController);

const HomePage = () => {
  const dispatch = useDispatch();
  const leads = useSelector(state => state.leads.leads || []);

  useEffect(() => {
    dispatch(getLeads());
  }, [dispatch]);

  const getLeadCounts = () => {
    const counts = {
      new: 0,
      contacted: 0,
      interested: 0,
      not_interested: 0,
      converted: 0,
    };

    leads.forEach(lead => {
      if (counts[lead.status] !== undefined) {
        counts[lead.status] += 1;
      }
      if (lead.is_contacted) {
        counts.contacted += 1;
      }
    });

    return counts;
  };

  const leadCounts = getLeadCounts();

  const pieData = {
    labels: ['New', 'Contacted', 'Interested', 'Not Interested', 'Converted'],
    datasets: [
      {
        data: [
          leadCounts.new,
          leadCounts.contacted,
          leadCounts.interested,
          leadCounts.not_interested,
          leadCounts.converted,
        ],
        backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#66c2a5'],
        hoverOffset: 4,
      },
    ],
  };

  const barData = {
    labels: ['New', 'Contacted', 'Interested', 'Not Interested', 'Converted'],
    datasets: [
      {
        label: 'Leads Count',
        data: [
          leadCounts.new,
          leadCounts.contacted,
          leadCounts.interested,
          leadCounts.not_interested,
          leadCounts.converted,
        ],
        backgroundColor: '#42A5F5',
        borderColor: '#1E88E5',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">CRM Dashboard</h3>
      <div className="row">
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card">
            <div className="card-header">
              Lead Status Distribution
            </div>
            <div className="card-body">
              <Pie data={pieData} />
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card">
            <div className="card-header">
              Leads Count by Status
            </div>
            <div className="card-body">
              <Bar data={barData} />
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card">
            <div className="card-header">
              Lead Statistics
            </div>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item">Total Leads: {leads.length}</li>
                <li className="list-group-item">Contacted Leads: {leadCounts.contacted}</li>
                <li className="list-group-item">Interested Leads: {leadCounts.interested}</li>
                <li className="list-group-item">Not Interested Leads: {leadCounts.not_interested}</li>
                <li className="list-group-item">Converted Leads: {leadCounts.converted}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// HomePage.propTypes = {
//   leads: PropTypes.array,
//   getLeads: PropTypes.func.isRequired,
// };

export default HomePage;
