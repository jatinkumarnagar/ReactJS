import React, { useState } from "react";
import TodoAppContainer from "./component/TodoAppContainer";
import TodoHeader from "./component/TodoHeader";
import TodoAddItem from "./component/TodoAddItem";
import TodoItem from "./component/TodoItem";
import TodoItems from "./component/TodoItems";
import WelcomeMessage from "./component/WelcomeMessage";

const App = () => {
  const initialTodoItems = [];

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`);
    const newTodoItems = [...todoItems, {
      name: itemName,
      dueDate: itemDueDate,
    }];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter (item => item.name !== todoItemName);
    setTodoItems(newTodoItems);
    console.log(todoItemName);
  };

  return (
    <>
      <TodoAppContainer>
        <TodoHeader />
        <TodoAddItem onNewItem={handleNewItem} />
      </TodoAppContainer>
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </>
  );
};

export default App;
