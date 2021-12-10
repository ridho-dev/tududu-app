import React from 'react'

import Aside from './Aside'
import Todos from './Todos'

const Contents = () => {
  return (
    <div className="content">
      <Aside />
      <Todos />
    </div>
  )
}

export default Contents
