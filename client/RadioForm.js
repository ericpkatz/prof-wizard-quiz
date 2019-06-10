import React from 'react';

  export default ({ onSubmit, value, onChange, question })=> {
    const { name, choices } = question;
    return (
      <form onSubmit={ onSubmit }>
        <h1>{ name }</h1> 
          {
            choices.map( choice => <label key={ choice.value }><input onChange={ onChange } type='radio' name={ name } value={ choice.value }/>{ choice.label }</label>)
          }
        <button>Save</button>
      </form>
    );
  }
