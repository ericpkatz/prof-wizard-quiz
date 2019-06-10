import React, {Component} from 'react'
import questions from '../data/questions'
import createForm from './createForm';
import _SelectForm from './SelectForm';
import _RadioForm from './RadioForm';
const RadioForm = createForm(_RadioForm);
const SelectForm = createForm(_SelectForm);
import axios from 'axios';
import Result from './Result';
import sortHouse from './sortHouse';

export default class Questions extends Component {
  constructor(){
    super();
    this.state = {
      questions,
      idx: 0,
      answers: []
    };
    this.next = this.next.bind(this);
  }
  next(answer){
    this.setState({ idx: this.state.idx + 1, answers: [...this.state.answers, answer]});
  }
  async componentDidMount(){
    const response = await axios.get('/api/questions');
    this.setState({ questions: response.data });

  }
  render () {
    const { questions, idx, answers } = this.state;
    const { next } = this;
    if(answers.length === questions.length){
      return <Result house={sortHouse(answers)}/>;
    }
    return (
      <div>
      {
        questions.map( (question, _idx) => {
          if(_idx === idx){
            return (
              <div key={ _idx }>
                {
                  _idx % 2 === 0 ? (
                    <RadioForm next={ next } question={ question }/>
                  ): (
                    <SelectForm next={ next } question={ question }/>
                  )
                }
              </div>
            );
          }
        })
      }
      </div>
    )
  }
}
