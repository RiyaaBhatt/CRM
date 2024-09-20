import React, { useState } from 'react'
import Sidebar2 from '../../components/Dashboard/Sidebar2'
import Form from '../../components/Leads/Form'
import Leads from '../../components/Leads/Leads'
const leads = () => {
  const [showForm, setShowForm] = useState(false);
  // display_form = () => {
  //   setShowForm(true);
  // }
  // console.log(showForm)
  return (
    <div className='main-content'>
      <Sidebar2 />
      <div className='container mt-5'>
        <button type="submit" className="btn btn-primary" onClick={() => (setShowForm(!showForm))}>
          {showForm ? 'Hide Form' : 'Add Lead'}
        </button>
      </div>
      {showForm ? <Form /> : ''}    <Leads />
    </div>
  )
}

export default leads
