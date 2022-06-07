import React from "react";

export const CompleteTodos = (props) => {
  const { Todos, onClickBack } = props;
  return (
    <>
      <div className="complete-area">
        <p className="title">完了</p>
        {Todos.map((todo, index) => {
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
