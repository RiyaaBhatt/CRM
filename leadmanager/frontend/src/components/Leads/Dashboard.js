import React, { Fragment, useState } from 'react'
import Form from './Form'
import Leads from './Leads'

function Dashboard() {
  const [showForm, setShowForm] = useState(false);
  function display_form() {
    setShowForm(!showForm);
  }
  return (
    <Fragment>
      <button type="submit" className="btn btn-primary" onClick={display_form()}>
        {showForm ? 'Add lead' : 'Hide Form'}
      </button>

      {showForm ? <Form /> : ''}
      <Leads />

    </Fragment>
  )
}

export default Dashboard