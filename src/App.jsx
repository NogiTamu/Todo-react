import "./styles.css";
import React, { useState } from "react";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompTodos, setIncompTodos] = useState(["a", "b"]);
  const [compTodos, setcompTodos] = useState(["c"]);
  const onChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };
  const onClickAdd = () => {
    if (todoText !== "") {
      const newTodos = [...incompTodos, todoText];
      setIncompTodos(newTodos);
      setTodoText("");
    } else {
      return;
    }
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="Todo入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>

      <div className="incomplete-area">
        <p className="title">未完了</p>

        {incompTodos.map((todo) => {
          return (
            <>
              <ul key={todo} className="todo-li">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </ul>
            </>
          );
        })}
      </div>

      <div className="complete-area">
        <p className="title">完了</p>
        {compTodos.map((todo) => {
          return (
            <>
              <ul key={todo} className="todo-li">
                <li>{todo}</li>
                <button>戻す</button>
              </ul>
            </>
          );
        })}
      </div>
    </>
  );
};
