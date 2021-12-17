import React from 'react'

const Todos = (props) => {
  const openAddTodo = () => {
    const todoModalContainer = document.getElementById("todoModalContainer");
    todoModalContainer.style.animation = "fadeIn 0.2s";
    setTimeout(() => { todoModalContainer.style.display = "flex"; }, 190)
  }
  return (
    <main>
      <div className="main-container">
        <div className="activity-title">
          {props.defaultCategory}
        </div>
        {/* <div className="activity-date">
          1 December 2021
        </div>
        <div className="todos">
          <div className="todo" id="todo1">
            <div className="check-icon" id="check1"></div>
            <div className="todo-title" id="title1">Designing Navbar</div>
          </div>
          <div className="todo">
            <div className="check-icon"></div>
            <div className="todo-title">Meeting with Elon Musk</div>
          </div>
          <div className="todo">
            <div className="check-icon"></div>
            <div className="todo-title">Go to grocery store</div>
          </div>
          <div className="todo">
            <div className="check-icon"></div>
            <div className="todo-title">Gym</div>
          </div>
        </div> */}
        <button className="add-todo-btn" id="addTodoBtn" onClick={openAddTodo}>
          +
        </button>
      </div>
    </main>
  )
}

export default Todos
