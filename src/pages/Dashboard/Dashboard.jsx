import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'

const Dashboard= ({}) => {
  return (
    <DashboardLayout title="Dashboard">
      <div className='flex justify-center items-center'>
        <p className='text-2xl font-medium text-gray-500'>THIS IS THE DASHBOARD PAGE.</p>
      </div>
    </DashboardLayout>
    
  )
}

export default Dashboard
