import React, { useState } from 'react';

import Aside from './Aside'
import Todos from './Todos'

const Contents = () => {
  const [defaultCategory, setDefaultCategory] = useState("Today")
  const [customCategories, setCustomCategories] = useState([
    { id: 1, title: "Work" },
    { id: 2, title: "Design" },
    { id: 3, title: "Personal Project" },
  ]);

  return (
    <div className="content">
      <Aside customCategories={customCategories} setDefaultCategory={setDefaultCategory} />
      <Todos defaultCategory={defaultCategory} />
    </div>
  )
}

export default Contents
