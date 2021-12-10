import React from 'react'

const Aside = () => {
  return (
    <aside>
      <div className="aside-container" id="asideContainer">
        <div className="categories">
          <div className="default-category">
            <button className="category-btn">Today</button>
            <button className="category-btn">Important</button>
            <button className="category-btn">Planned</button>
          </div>
          <div className="custom-category">
            <button className="category-btn">Work</button>
            <button className="category-btn">Design</button>
            <button className="category-btn">Personal Project</button>
          </div>
        </div>
        <button type="button" className="add-category-btn" id="addCategoryBtn">+ New category</button>
      </div>
    </aside>
  )
}

export default Aside
