import React, {Component} from 'react';

class ExampleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {buttonClicked: false, message: null};
  }
  render() {
    return (
      <div className="exampleComponent">
        <h1>EXAMPLE COMPONENT</h1>
        <p>This is the Example component, you can play with it to start understanding React. Check it out!</p>
        <p>Check the browser console to see the lifecycle hooks working!</p>
        <button onClick={this.handleClick.bind(this)}>Click to change component state!</button> <br /> <br />
        <button onClick={this.useProp.bind(this)}>
          Click to see the <code>props</code> working!
        </button>
        <h2>
          {this.props.textProp} : {this.state.message}
        </h2>
      </div>
    );
  }

  handleClick() {
    let newMessage = !this.state.clicked ? 'YOU HAVE CLICKED THE BUTTON!' : 'YOU REGRET :-(';
    this.setState({message: newMessage, clicked: !this.state.clicked});
  }

  useProp() {
    //this will execute the function passed as a prop to this component
    this.props.functionProp();
  }

  componentDidMount() {
    console.log(
      'componentDidMount: Executed just after the component executes the render() method. Here you can call APIs and update the component state in consequence.'
    );
  }

  componentWillUnmount() {}
}

export default ExampleComponent;
