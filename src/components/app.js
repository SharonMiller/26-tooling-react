'use strict';

import React from 'react';
import { say } from 'cowsay';
import faker from 'faker';

class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      value: null
    };

    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    let fakeContent = faker.fake("{{lorem.paragraph}}");
    let value = say({
      text: fakeContent,
    });
    this.setState({value});
  }
  render(){
    return (
      <React.Fragment>
        <h1>Generate Cowsay Lorem</h1>
        <button onClick={this.updateState}>click me</button>
        <pre>{this.state.value}</pre>
      </React.Fragment>
    )
  }
}


export default App;
