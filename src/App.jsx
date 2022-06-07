import "./styles.css";
import React, { useState } from "react";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompTodos, setIncompTodos] = useState([]);
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

  const onClickDel = (index) => {
    const newTodos = [...incompTodos];
    newTodos.splice(index, 1);
    setIncompTodos(newTodos);
  };

  const onClickComp = (index) => {
    const newInCompTodos = [...incompTodos];
    newInCompTodos.splice(index, 1);
    setIncompTodos(newInCompTodos);
    const newCompTodos = [...compTodos, incompTodos[index]];

    setIncompTodos(newInCompTodos);
    setcompTodos(newCompTodos);
  };

  const onClickBack = (index) => {
    const newCompTodos = [...compTodos];
    newCompTodos.splice(index, 1);
    const newInCompTodos = [...incompTodos, compTodos[index]];
    setcompTodos(newCompTodos);
    setIncompTodos(newInCompTodos);
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

        {incompTodos.map((todo, index) => {
          return (
            <>
              <ul key={todo} className="todo-li">
                <li>{todo}</li>
                <button onClick={() => onClickComp(index)}>完了</button>
                <button onClick={() => onClickDel(index)}>削除</button>
              </ul>
            </>
          );
        })}
      </div>

      <div className="complete-area">
        <p className="title">完了</p>
        {compTodos.map((todo, index) => {
          return (
            <>
              <ul key={todo} className="todo-li">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </ul>
            </>
          );
        })}
      </div>
    </>
  );
};
