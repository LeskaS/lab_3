import React from 'react';
import TableComponent from './TableComponent';

const App = () => {
  const list = [
    { id: 1, firstName: 'Amaya', lastName: 'Torphy', jobTitle: 'Legacy Group Facilitator', email: 'Rosie_Mann@gmail.com' },
    { id: 2, firstName: 'Weston', lastName: 'Huel', jobTitle: 'Regional Data Agent', email: 'Tristian_Vandervort68@yahoo.com' },
    { id: 3, firstName: 'Bridgette', lastName: 'Corwin', jobTitle: 'Internal Usability Officer', email: 'Sherman.Purdy@hotmail.com' },
    { id: 4, firstName: 'Liam', lastName: 'Smith', jobTitle: 'Software Engineer', email: 'liam.smith@example.com' },
    { id: 5, firstName: 'Olivia', lastName: 'Johnson', jobTitle: 'Marketing Specialist', email: 'olivia.johnson@example.com' },
    { id: 6, firstName: 'Noah', lastName: 'Brown', jobTitle: 'Product Manager', email: 'noah.brown@example.com' },
    { id: 7, firstName: 'Emma', lastName: 'Davis', jobTitle: 'HR Coordinator', email: 'emma.davis@example.com' },
    { id: 8, firstName: 'Mason', lastName: 'Wilson', jobTitle: 'Financial Analyst', email: 'mason.wilson@example.com' },
    { id: 9, firstName: 'Sophia', lastName: 'Martinez', jobTitle: 'UI/UX Designer', email: 'sophia.martinez@example.com' },
    { id: 10, firstName: 'James', lastName: 'Anderson', jobTitle: 'Cybersecurity Expert', email: 'james.anderson@example.com' },
    { id: 11, firstName: 'Isabella', lastName: 'Thomas', jobTitle: 'Business Consultant', email: 'isabella.thomas@example.com' },
    { id: 12, firstName: 'Ethan', lastName: 'White', jobTitle: 'Cloud Solutions Architect', email: 'ethan.white@example.com' }
];

  return (
    <div className="container mt-5">
      <h1>Employee Table</h1>
      <TableComponent data={list} />
    </div>
  );
};

export default App;
