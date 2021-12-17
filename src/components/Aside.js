import React, { useState } from 'react'

const Aside = (props) => {
  const [value, setValue] = useState(0)
  const categoryOnClick = (category, index) => {
    if (window.innerWidth <= 768) {
      const asideElement = document.querySelector('aside')
      const asideContainer = document.getElementById('asideContainer');
      const overlay = document.getElementById("overlay");

      overlay.style.animation = "fadeOut 0.2s"
      setTimeout(() => { overlay.style.display = "none"; }, 190)
      asideContainer.classList.remove("show-aside")
      asideContainer.classList.add("no-show-aside")
      asideElement.style.transform = 'translate(-200px)'
    }
    setValue(index);
    return (
      props.setDefaultCategory(category)
    )
  }

  const openAddCategory = () => {
    const categoryModalContainer = document.getElementById("categoryModalContainer");
    categoryModalContainer.style.animation = "fadeIn 0.2s";
    setTimeout(() => { categoryModalContainer.style.display = "flex"; }, 190)
  }

  return (
    <aside>
      <div className="aside-container show-aside" id="asideContainer">
        <div className="categories">
          <div className="default-category">
            <button className={`category-btn ${0 === value ? "category-active" : ""}`} onClick={() => categoryOnClick("Today", 0)}>Today</button>
            <button className={`category-btn ${1 === value ? "category-active" : ""}`} onClick={() => categoryOnClick("Important", 1)}>Important</button>
            <button className={`category-btn ${2 === value ? "category-active" : ""}`} onClick={() => categoryOnClick("Planned", 2)}>Planned</button>
          </div>
          <hr />
          <div className="custom-category">
            {
              props.customCategories.map((category, index) => {
                index += 3;
                return <button className={`category-btn ${index === value ? "category-active" : ""}`} key={category.id} onClick={() => categoryOnClick(category.title, index)}>{category.title}</button>
              })
            }
          </div>
        </div>
        <button type="button" className="add-category-btn" id="addCategoryBtn" onClick={openAddCategory}>+ New category</button>
      </div>
    </aside>
  )
}

export default Aside
