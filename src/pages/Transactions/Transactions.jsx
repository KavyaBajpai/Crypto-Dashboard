import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'

const Transactions= () =>{
  return (
    <>
      <DashboardLayout title="Transactions">
        <div className='h-[792px] flex justify-center items-center bg-gray-400'>
         <p className='text-2xl font-medium text-gray-500'>THIS IS THE TRANSACTIONS PAGE.</p>
        </div>
       
      </DashboardLayout>

    </>
  )
}

export default Transactions
