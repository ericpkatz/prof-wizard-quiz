import React from 'react';

export default ({ onSubmit, onChange, question, value })=> {
    const { name, choices } = question;
    return (
      <form onSubmit={ onSubmit }>
        <h1>{ name }</h1> 
        <select value={ value } onChange={ onChange }>
          <option value=''>---</option>
          {
            choices.map( choice => <option value={ choice.value } key={ choice.value }>{ choice.label }</option>)
          }
        </select>
        <br />
        <button>Save</button>
      </form>
    );
  }
