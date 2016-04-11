import React, {Component} from 'react';
require("../../public/css/style.scss");

import InputBar from '../containers/input_bar';
import ContainerExerciseList from '../containers/container_exercise_list';


export default class App extends Component {

  render() {
    return (
      <div>
        <InputBar />
        <ContainerExerciseList />
      </div>
    );
  }
}

