import React from 'react'

const Modals = () => {
  const unShowAside = () => {
    const asideElement = document.querySelector('aside')
    const asideContainer = document.getElementById('asideContainer');
    const overlay = document.getElementById("overlay");

    overlay.style.animation = "fadeOut 0.2s"
    setTimeout(() => { overlay.style.display = "none"; }, 190)
    asideContainer.classList.remove("show-aside")
    asideContainer.classList.add("no-show-aside")
    asideElement.style.transform = 'translate(-200px)'
  }

  const closeSettingModal = () => {
    const settingsIcon = document.getElementById("settingsIcon");
    const modalContainer = document.getElementById("modalContainer");
    settingsIcon.style.transform = 'rotate(0deg)';
    setTimeout(() => { modalContainer.style.display = "none"; }, 190);
    modalContainer.style.animation = "fadeOut 0.2s"
  }

  const closeAddTodoModal = () => {
    const todoModalContainer = document.getElementById("todoModalContainer");
    todoModalContainer.style.animation = "fadeOut 0.2s";
    setTimeout(() => { todoModalContainer.style.display = "none"; }, 190)
  }

  const closeAddCategoryModal = () => {
    const categoryModalContainer = document.getElementById("categoryModalContainer");
    categoryModalContainer.style.animation = "fadeOut 0.2s";
    setTimeout(() => { categoryModalContainer.style.display = "none"; }, 190)
  }

  return (
    <div>
      <div className="overlay" id="overlay" onClick={unShowAside}></div>
      <div className="modal-container" id="modalContainer">
        <div className="settings-modal">
          <div className="close-modal-container">
            <button className="close-modal" id="closeModal" onClick={closeSettingModal}>X</button>
          </div>
          <div className="setting">
            <div className="settings-category">Settings</div>
            <div className="themes">
              <div className="settings-title">Theme</div>
              <button className="theme-btn bg-blue"></button>
              <button className="theme-btn bg-red"></button>
              <button className="theme-btn bg-green"></button>
              <button className="theme-btn bg-orange"></button>
            </div>
          </div>
          <div className="setting">
            <div className="settings-category">About</div>
            <div className="settings-title">About App</div>
            <div className="settings-title-detail">Tududu App</div>
            <div className="settings-title">Version</div>
            <div className="settings-title-detail">1.0.0</div>
          </div>
        </div>
      </div>

      <div className="modal-container" id="todoModalContainer">
        <div className="add-todo-modal">
          <div className="close-modal-container">
            <button className="close-modal" id="closeAddTodoModal" onClick={closeAddTodoModal}>X</button>
          </div>
          <div className="modal-content">
            <form>
              <label>Add new task:</label>
              <input type="text" placeholder="Task name" className="task-input" />
              <div className="close-modal-container">
                <button type="button" className="submit-todo-btn" id="submitTodoBtn">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="modal-container" id="categoryModalContainer">
        <div className="add-todo-modal">
          <div className="close-modal-container">
            <button className="close-modal" id="closeAddCategoryModal" onClick={closeAddCategoryModal}>X</button>
          </div>
          <div className="modal-content">
            <form>
              <label>Add new category:</label>
              <input type="text" placeholder="Category name" className="task-input" />
              <div className="close-modal-container">
                <button type="button" className="submit-category-btn" id="submitCategoryBtn">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modals
