import "./styles.css";
import React, { useState } from "react";
import { InputTodo } from "./components/inputTodo";
import { IncompleteTodos } from "./components/incompleteTodos";
import { CompleteTodos } from "./components/completeTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompTodos, setIncompTodos] = useState([]);
  const [compTodos, setcompTodos] = useState([]);
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
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <IncompleteTodos
        Todos={incompTodos}
        onClickComp={onClickComp}
        onClickDel={onClickDel}
      />
      <CompleteTodos Todos={compTodos} onClickBack={onClickBack} />
    </>
  );
};
