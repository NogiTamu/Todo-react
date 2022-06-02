import "./styles.css";
import React from "react";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="Todo入力" />
        <button>追加</button>
      </div>

      <div>
        <p>未完了</p>
        <ul>
          <li>アナルファック</li>
          <button>完了</button>
          <button>削除</button>
        </ul>
      </div>

      <div>
        <p>完了</p>
        <ul>
          <li>アナルファック</li>
          <button>戻す</button>
        </ul>
      </div>
    </>
  );
};
