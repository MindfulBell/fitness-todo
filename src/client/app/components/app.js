import React, {Component} from 'react';
require("../../public/css/style.scss");

import InputBar from './input_bar';
import ExerciseList from '../containers/exercise_list';


export default class App extends Component {

  render() {
    return (
      <div>
        <InputBar />
        <ExerciseList />
      </div>
    );
  }
}

