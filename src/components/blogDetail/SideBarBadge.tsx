import React from 'react'

function SideBarBadge({children}: {children: React.ReactNode}) {
  return (
    <div className='bg-primary font-opensans font-normal text-white text-sm rounded-md p-2 md:text-sm xl:text-md'>
        {children}
    </div>
  )
}

export default SideBarBadge