import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 br3 ba b--green bg-lightest-blue' 
        type='text' 
        placeholder='Search Products'
        value={ searchfield }
        onChange= { searchChange }
      />
    </div>
  );
}

export default SearchBox;
