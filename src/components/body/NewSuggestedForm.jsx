import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewSuggestedForm(){
  let _name = null;
  let _eyeColor = null;

  function handleNewSuggestedForm(event){
    event.preventDefault();
    props.onNewSuggestedCreation({name: _name.value, eyeColor: _eyeColor.value, id: v4()});
    _name.value = '';
    _name.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewSuggestedForm}>
        <input
          type='text'
          placeholder='Enter Name'
          ref={(input) => {_name = input;}} />
        <input
          type='text'
          placeholder='Enter Eye Color'
          ref={(input) => {_eyeColor = input;}} />
        <button type='submit'>Enter Friend</button>
      </form>
    </div>
  )

}

NewSuggestedForm.propTypes = {
  onNewSuggestedCreation: PropTypes.func
};

export default NewSuggestedForm;
