import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
//importing your awesome components!
import ExampleComponent from './exampleComponent';

class App extends Component {
  render() {
    let text = "I'm a text prop, you can pass any javascript object as a prop, even functions! Also ";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the EUREKA test project!</h1>
        </header>
        <p className="App-intro">
          To get started, edit the <code>src/exampleComponent.js</code> and save to reload.
        </p>
        <p className="App-intro">
          This project has been created with the create-react-app package, we just created an example component to help
          you if you're new in React.
        </p>

        <ExampleComponent textProp={text} functionProp={this.anExampleFunction.bind(this)} />
      </div>
    );
  }

  anExampleFunction() {
    //you can do interesting stuff here! Think about it...
    alert(
      'This function has been passed as a prop! Actually this code has been executed from the parent component context!'
    );
  }
}

export default App;
