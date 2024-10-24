import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import PortfolioSection from './components/PortfolioSection'
const Dashboard= () => {
  return (
    <DashboardLayout title="Dashboard">
      <div className='h-[792px] flex justify-center bg-gray-400'>
        <PortfolioSection />
      </div>
    </DashboardLayout>
    
  )
}

export default Dashboard
