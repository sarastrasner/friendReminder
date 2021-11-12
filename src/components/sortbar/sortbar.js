import { AppSettingsContext } from '../../context/settings/context';
import React, { useContext } from 'react';
import './sortbar.scss'


function SortBar(props) {
  console.log(props);
  const appSettingsContext = useContext(AppSettingsContext);

  const updateSortMethod = e => {
    e.preventDefault();
    appSettingsContext.setDefaultSort(e.target.value);
  };

  const radioSubmit = e => {
    e.preventDefault();
    props.renderSortMethod();
  };

  return (
    <div id="sortbar">
      <form onSubmit={radioSubmit}>
        <label for="sort">Choose a sort method:</label>
        <input type="radio" onClick={updateSortMethod} value="difficulty" />
        Difficulty
        <input type="radio" onClick={updateSortMethod} value="assignee" />
        Assignee
        <input type="radio" onClick={updateSortMethod} value="status" />
        Status
        <button type="submit">Sort</button>
      </form>
      <div>
        <button value="false">
          Hide completed items
        </button>
      </div>
    </div>
  );
}

export default SortBar;
