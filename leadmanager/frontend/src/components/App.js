import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./layout/Header";
// import Dashboard from "./Leads/Dashboard";
import Dashboard from "./Dashboard/Dashboard";
import Sidebar2 from "./Dashboard/Sidebar2";
import Login from "./accounts/Login";
import Register from "./accounts/Register";
import Home from '../pages/Dashboard/home'
import Analytics from "../pages/Dashboard/analytics";
import Customer from "../pages/Dashboard/customer";
import Leads from "../pages/Dashboard/leads"
import Pipeline from "../pages/Dashboard/pipeline";
import PrivateRoute from "./common/PrivateRoute";
import { Provider } from "react-redux";
import { Provider as AlertProvider, positions } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { loadUser } from "../actions/auth";
// Alert options
const alertOptions = {
    timeout: 3000,
    position: positions.TOP_CENTER
}

import store from "../store";
import Alerts from "./layout/Alerts";
import './App.css';
import LeadEmailHistory from "./email/LeadEmailHistory";
import Contact from "./Leads/Contact";

class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser())
    }
    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Router>
                        <>

                            <Header />
                            <Alerts />
                            <div className='container'>
                                <Routes>
                                    <Route path="/emails/:recipient_email" element={<LeadEmailHistory />} />

                                    <Route path="/" element={<PrivateRoute element={Sidebar2} />} />
                                    <Route path="/register" element={<Register />} />
                                    <Route path="/login" element={<Login />} />
                                    <Route path='/home' element={<PrivateRoute element={Home} />} />
                                    <Route path='/customer' element={<PrivateRoute element={Customer} />} />
                                    <Route path='/leads' element={<PrivateRoute element={Leads} />} />
                                    <Route path='/analytics' element={<PrivateRoute element={Contact} />} />
                                    <Route path='/pipeline' element={<PrivateRoute element={Pipeline} />} />

                                </Routes>
                            </div>
                        </>
                    </Router>
                </AlertProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
