import React from "react";

export const IncompleteTodos = (props) => {
  const { Todos, onClickComp, onClickDel } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了</p>

      {Todos.map((todo, index) => {
        return (
          <ul key={todo} className="todo-li">
            <li>{todo}</li>
            <button onClick={() => onClickComp(index)}>完了</button>
            <button onClick={() => onClickDel(index)}>削除</button>
          </ul>
        );
      })}
    </div>
  );
};
