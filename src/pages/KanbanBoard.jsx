import React, { useState } from "react";

const taskDatas = {
  todo: {
    name: "Todo",
    items: [
      {
        id: 1,
        title: "Task 1",
        description: "Description 1",
      },
      {
        id: 2,
        title: "Task 2",
        description: "Description 2",
      },
    ],
  },
  inProgress: {
    name: "In Progress",
    items: [
      {
        id: 3,
        title: "Task 3",
        description: "Description 3",
      },
    ],
  },
  done: {
    name: "Done",
    items: [
      {
        id: 4,
        title: "Task 4",
        description: "Description 4",
      },
    ],
  },
};

const columnColors = {
  todo: "#00AAFF",
  inProgress: "#FFAA00",
  done: "#00FFAA",
};

const columnCountColors = {
  todo: "#00CCFF",
  inProgress: "#FFCC00",
  done: "#00CCAA",
};

const KanbanBoard = () => {
  const [taskData, setTaskData] = useState(taskDatas);
  const [newTask, setNewTask] = useState('');
  const [newTaskColumn, setNewTaskColumn] = useState('todo');
  const [draggedTask, setDraggedTask] = useState(null);

  const handleAddTask = () => {
    if (newTask.trim() === '') return;

    const newTaskData = {
      id: Date.now().toString(),
      title: newTask,
      description: '',
    };

    const updatedTaskData = {...taskData};

    updatedTaskData[newTaskColumn].items.push(newTaskData);

    setTaskData(updatedTaskData);
    setNewTask('');
  }

  const handleDeleteTask = (columnId, taskId) => {
    const updatedTaskData = {...taskData};

    updatedTaskData[columnId].items = updatedTaskData[columnId].items.filter((item) => item.id !== taskId);

    setTaskData(updatedTaskData);
  }

  const handleDragStart = (columnId, taskData) => {
    setDraggedTask({ columnId, taskData });
  }

  const handleDragOver = (e) => {
    e.preventDefault();
  }

  const handleDragdDrop = (e, columnId) => {
    e.preventDefault();

    if(!draggedTask) return;

    const { columnId: sourceColumnId, taskData: task } = draggedTask;

    if(sourceColumnId === columnId) return;

    const updatedTaskData = {...taskData};

    updatedTaskData[sourceColumnId].items = updatedTaskData[sourceColumnId].items.filter((item) => item.id !== task.id);
    
    updatedTaskData[columnId].items.push(task);

    setTaskData(updatedTaskData);
    setDraggedTask(null);
  }


  return (
    <>
      <h1>Kanban Board</h1>

      <div className="kanban-board-container">
        <div className="kanban-board-input-container">
          <input
            className="kanban-board-input"
            type="text"
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleAddTask();
              }
            }}
          />
          <select className="kanban-board-select" defaultValue="todo" value={newTaskColumn} onChange={(e) => setNewTaskColumn(e.target.value)}>
            {Object.keys(taskData).map((taskItem, index) => {
              return (
                <option key={taskItem} value={taskItem}>
                  {taskData[taskItem].name}
                </option>
              );
            })}
          </select>
          <button className="kanban-board-button" onClick={() => handleAddTask()}>Add Task</button>
        </div>

        <div className="kanban-board-columns-container">
          {Object.keys(taskData).map((taskItem, index) => {
            return (
              <div
                key={taskItem}
                className="kanban-board-column"
                onDragOver={(e) => handleDragOver(e, taskItem)}
                onDrop={(e) => handleDragdDrop(e, taskItem)}
              >
                <div
                  key={taskItem}
                  className="kanban-board-column-header"
                  style={{ backgroundColor: columnColors[taskItem] }}
                >
                  <span className="kanban-board-column-header-title">
                    {taskData[taskItem].name}
                  </span>
                  <span
                    className="kanban-board-column-header-title-count"
                    style={{ backgroundColor: columnCountColors[taskItem] }}
                  >
                    {taskData[taskItem].items.length}
                  </span>
                </div>

                <div className="kanban-board-column-items-container">
                  {taskData[taskItem].length === 0 ? (
                    <div className="kanban-board-column-items-container-empty">
                      <span>No tasks found</span>
                    </div>
                  ) : (
                    <div className="kanban-board-column-items-container-items">
                      {taskData[taskItem].items.map((item) => {
                        return (
                          <div
                            key={item.id}
                            className="kanban-board-column-items-container-item"
                            draggable
                            onDragStart={(e) => handleDragStart(taskItem, item)}
                          >
                            <span className="kanban-board-column-items-container-item-title">
                              <span>{item.title}</span>
                              <span>{item.description}</span>
                            </span>
                            <span
                              className="kanban-board-column-items-container-item-delete"
                              onClick={() =>
                                handleDeleteTask(taskItem, item.id)
                              }
                            >
                              x
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default KanbanBoard;
