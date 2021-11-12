import React, { useState, useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import axios from 'axios';
import useAjaxCalls from './hooks/ajax';
import './todo.scss';
// const URL = 'https://api-js401.herokuapp.com/api/v1/todo';

function ToDo(props) {
  const [URL, list, setList, addItem] = useAjaxCalls();
  const [count, setCount] = useState();

  useEffect(() => {
    setCount(list.filter(item => !item.complete).length);
  }, [list]);

  const toggleComplete = async id => {
    let item = list.filter(i => i._id === id)[0] || {};
    if (item._id) {
      const res = await axios.put(`${URL}/${id}`, { complete: !item.complete });
      let removeId = item._id;
      let newList = list.filter(item => item._id !== removeId);
      setList([...newList, res.data]);
    }
  };
  const deleteItem = id => {
    let item = list.filter(i => i._id === id)[0] || {};
    if (item._id) {
      axios.delete(`${URL}/${item._id}`);
      let removeId = item._id;
      let newList = list.filter(item => item._id !== removeId);
      setList([...newList]);
    }
  };

  return (
    <div className="todo">
      <div className="statusbar">There are {count} Items To Complete</div>
      <section className="todo">
        <div>
          <TodoForm handleSubmit={addItem} />
        </div>

        <div>
          <TodoList
            list={list}
            handleComplete={toggleComplete}
            handleDelete={deleteItem}
          />
        </div>
      </section>
    </div>
  );
}

export default ToDo;
