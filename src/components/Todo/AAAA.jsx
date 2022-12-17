import React from 'react'

import useStore from '../../store/store'

function AAAA() {
    const count = useStore((state) => state.count)
    
  return (
    <div className='bg-gray-400'>AAAA {count}</div>
  )
}

export default AAAA