import React from 'react'

const Todos = () => {
  return (
    <main>
      <div class="main-container">
        <div class="activity-title">
          Today
        </div>
        <div class="activity-date">
          1 December 2021
        </div>
        <div class="todos">
          <div class="todo" id="todo1">
            <div class="check-icon" id="check1"></div>
            <div class="todo-title" id="title1">Designing Navbar</div>
          </div>
          <div class="todo">
            <div class="check-icon"></div>
            <div class="todo-title">Meeting with Elon Musk</div>
          </div>
          <div class="todo">
            <div class="check-icon"></div>
            <div class="todo-title">Go to grocery store</div>
          </div>
          <div class="todo">
            <div class="check-icon"></div>
            <div class="todo-title">Gym</div>
          </div>
        </div>
        <button class="add-todo-btn" id="addTodoBtn">
          +
        </button>
      </div>
    </main>
  )
}

export default Todos
