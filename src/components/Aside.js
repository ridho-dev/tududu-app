import React from 'react'

const Aside = (props) => {
  return (
    <aside>
      <div className="aside-container" id="asideContainer">
        <div className="categories">
          <div className="default-category">
            <button className="category-btn" onClick={() => props.setDefaultCategory("Today")}>Today</button>
            <button className="category-btn" onClick={() => props.setDefaultCategory("Important")}>Important</button>
            <button className="category-btn" onClick={() => props.setDefaultCategory("Planned")}>Planned</button>
          </div>
          <div className="custom-category">
            {
              props.customCategories.map((category) => {
                return <button className="category-btn" key={category.id} onClick={() => props.setDefaultCategory(category.title)}>{category.title}</button>
              })
            }
          </div>
        </div>
        <button type="button" className="add-category-btn" id="addCategoryBtn">+ New category</button>
      </div>
    </aside>
  )
}

export default Aside
