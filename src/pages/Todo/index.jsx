import { useState } from "react";
import styles from "./Todo.module.css";

const Todo = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    const todo = {
      text: value,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, todo]);
    setValue("");
  };

  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className={styles.container}>
      <div className={styles["todo-app"]}>
        <div className={styles["todo-header"]}>
          <form onSubmit={handleSubmit} className={styles["add-todo-form"]}>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type="text"
              id={styles["todoInput"]}
              placeholder="Thêm công việc mới..."
              className={styles["todo-input"]}
            />
            <button className={styles["add-btn"]}>
              <span>+</span>
              Thêm
            </button>
          </form>
        </div>

        <div className={styles["todo-list-container"]}>
          <div className={styles["todo-list"]}>
            {todos.map((todo, index) => (
              <div key={index} className={styles["todo-item"]}>
                <p className={todo.completed ? styles.completed : ""}>
                  {todo.text}
                </p>
                <div className={styles["todo-controls"]}>
                  <button
                    onClick={() =>
                      setTodos((prevTodos) =>
                        prevTodos.filter((_, i) => i !== index)
                      )
                    }
                    className={styles["delete-btn"]}
                  >
                    Xoá
                  </button>
                  <button
                    className={`${styles["complete-btn"]} ${
                      todo.completed ? styles.completed : ""
                    }`}
                    onClick={() =>
                      setTodos((prevTodos) =>
                        prevTodos.map((todo, i) =>
                          i === index
                            ? { ...todo, completed: !todo.completed }
                            : todo
                        )
                      )
                    }
                  >
                    Hoàn thành
                  </button>
                </div>
              </div>
            ))}
          </div>

          {todos.length === 0 && (
            <div className={styles["empty-state"]}>
              <div className={styles["empty-icon"]}>📝</div>
              <h3>Chưa có công việc nào</h3>
              <p>Hãy thêm công việc đầu tiên của bạn!</p>
            </div>
          )}
        </div>

        <div className={styles["todo-stats"]}>
          <div className={styles["stats-grid"]}>
            <div className={styles["stat-card"]}>
              <div className={styles["stat-icon"]}>📊</div>
              <div className={styles["stat-info"]}>
                <span className={styles["stat-number"]} id="totalTodos">
                  {totalCount}
                </span>
                <span className={styles["stat-label"]}>Tổng công việc</span>
              </div>
            </div>

            <div className={styles["stat-card"]}>
              <div className={styles["stat-icon"]}>✅</div>
              <div className={styles["stat-info"]}>
                <span className={styles["stat-number"]}>{completedCount}</span>
                <span className={styles["stat-label"]}>
                  Số công việc đã hoàn thành
                </span>
              </div>
            </div>

            <div className={styles["stat-card"]}>
              <div className={styles["stat-icon"]}>📝</div>
              <div className={styles["stat-info"]}>
                <span className={styles["stat-number"]} id="totalTodos">
                  {totalCount - completedCount}
                </span>
                <span className={styles["stat-label"]}>Còn lại</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
