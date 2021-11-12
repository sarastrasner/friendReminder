import axios from 'axios';
import { useState, useEffect } from 'react';


function useAjaxCalls() {
  const URL = 'https://api-js401.herokuapp.com/api/v1/todo';
  const [list, setList] = useState([]);
  
  useEffect(() => {
    reload();
  }, []);

  const reload = async () => {
    await axios.get(URL)
      .then(results => {
        setList(results.data.results);
      })
      .catch((err) => {
        console.error(err)
      });
  }
  const addItem = (item) => {
        axios.post(URL,
      {
        "complete": false,
        "difficulty": item.difficulty,
        "text": item.text,
        "assignee": item.assignee,
        "__v": 0
    },
    )
      .then(results => {
        setList([...list, results.data]);
      })
      .catch((err)=>{
        console.error(err)
      })
  };
  return [URL, list, setList, addItem]
}

export default useAjaxCalls;