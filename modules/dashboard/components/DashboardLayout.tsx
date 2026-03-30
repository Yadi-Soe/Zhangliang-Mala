import React from 'react'
import DashboardHeader from './DashboardHeader'


function DashboardLayout( {children}: {children: React.ReactNode} ) {
  return (
     <div>
      <DashboardHeader />
      <div className=" px-3 md:px-0">{children}</div>
    </div>
  )
}

export default DashboardLayout
