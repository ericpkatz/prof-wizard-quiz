import React from 'react';


export default (Form)=> {
  return class StatefulForm extends React.Component{ 
    constructor(){
      super();
      this.state = {
        value: ''
      };
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(ev){
      this.setState( { value: ev.target.value } )
    }
    onSubmit(ev){
      ev.preventDefault();
      this.props.next(this.state.value);

    }
    render(){
      const { value } = this.state;
      const { onChange, onSubmit } = this;
      return (
        <Form {...this.props} onChange={ onChange } onSubmit={ onSubmit }/>
      );
    }
  }
}
