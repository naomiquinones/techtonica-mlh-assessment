import React from 'react';

const SortingButtons = ({sortOrder, setSortOrder}) => {
  return (
    <form className="sort-form">
      <fieldset>
        <legend>Sort the sorting algorithms by:</legend>
        <SortingButton value="a-z" currentSortOrder={sortOrder} setSortOrder={setSortOrder}/>
        <SortingButton value="recently-added" currentSortOrder={sortOrder} setSortOrder={setSortOrder} />
        <SortingButton value="default" currentSortOrder={sortOrder} setSortOrder={setSortOrder} />
      </fieldset>
    </form>
  )
}

const SortingButton = ({value, currentSortOrder, setSortOrder}) => {
  return (
    <label className="sort-label">
      <input type="radio" name="sort-by" className="sort-button" value={value} checked={value === currentSortOrder} 
      onChange={ () => {
        setSortOrder(value);
      }}/> 
      {value}
    </label>
  )
}

export default SortingButtons;