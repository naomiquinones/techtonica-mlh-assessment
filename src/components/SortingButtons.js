import React from 'react';

const SortingButtons = () => {
  return (
    <form className="sort-form">
      <fieldset>
        <legend>Sort the sorting algorithms by:</legend>
        <SortingButton sortType="A-Z" />
        <SortingButton sortType="Most Recently Added" />
        <SortingButton sortType="Default" />
      </fieldset>
    </form>
  )
}

const SortingButton = props => {
  return (
      <>
        <label className="sort-label">
          <input type="radio" name="sort-by" className="sort-button" id={props.sortType} /> 
          {props.sortType}
        </label>
      </>
  )
}

export default SortingButtons;