// src/components/HomeScreen.js
import React from 'react';
import LeadSummary from './LeadSummary';
import SalesPipeline from './SalesPipeline';
import ActivityFeed from './ActivityFeed';
import TaskList from './TaskList';
import Notifications from './Notifications';
import QuickLinks from './QuickLinks';
import PerformanceMetrics from './PerformanceMetrics';

const HomeScreen = () => {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Welcome to Your CRM Dashboard</h1>
      
      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <LeadSummary />
        </div>
        <div className="col-md-6 mb-3">
          <SalesPipeline />
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <ActivityFeed />
        </div>
        <div className="col-md-6 mb-3">
          <TaskList />
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <Notifications />
        </div>
        <div className="col-md-6 mb-3">
          <PerformanceMetrics />
        </div>
      </div>

      <QuickLinks />
    </div>
  );
};

export default HomeScreen;
