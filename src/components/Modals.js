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
      <div class="modal-container" id="modalContainer">
        <div class="settings-modal">
          <div class="close-modal-container">
            <button class="close-modal" id="closeModal" onClick={closeSettingModal}>X</button>
          </div>
          <div class="setting">
            <div class="settings-category">Settings</div>
            <div class="themes">
              <div class="settings-title">Theme</div>
              <button class="theme-btn bg-blue"></button>
              <button class="theme-btn bg-red"></button>
              <button class="theme-btn bg-green"></button>
              <button class="theme-btn bg-orange"></button>
            </div>
          </div>
          <div class="setting">
            <div class="settings-category">About</div>
            <div class="settings-title">About App</div>
            <div class="settings-title-detail">Tududu App</div>
            <div class="settings-title">Version</div>
            <div class="settings-title-detail">1.0.0</div>
          </div>
        </div>
      </div>

      <div class="modal-container" id="todoModalContainer">
        <div class="add-todo-modal">
          <div class="close-modal-container">
            <button class="close-modal" id="closeAddTodoModal" onClick={closeAddTodoModal}>X</button>
          </div>
          <div class="modal-content">
            <form>
              <label>Add new task:</label>
              <input type="text" placeholder="Task name" class="task-input" />
              <div class="close-modal-container">
                <button type="button" class="submit-todo-btn" id="submitTodoBtn">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="modal-container" id="categoryModalContainer">
        <div class="add-todo-modal">
          <div class="close-modal-container">
            <button class="close-modal" id="closeAddCategoryModal" onClick={closeAddCategoryModal}>X</button>
          </div>
          <div class="modal-content">
            <form>
              <label>Add new category:</label>
              <input type="text" placeholder="Category name" class="task-input" />
              <div class="close-modal-container">
                <button type="button" class="submit-category-btn" id="submitCategoryBtn">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modals
