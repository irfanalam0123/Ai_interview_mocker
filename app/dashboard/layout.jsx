
import React from 'react'
import Headers from './_components/Headers';

const Dashboardlayout = ({children}) => {
  return (
    <div>
      <Headers></Headers>
      {children}
    </div>
  );
}

export default Dashboardlayout;
