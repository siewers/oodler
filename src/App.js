import React, { Component } from 'react';
import Oodle from './Oodle';
import { Container, Header, Segment, Form, TextArea, Button, Icon, Message } from 'semantic-ui-react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      text: "Nothing to oodle"
    }
  }

  oodle(text) {
    this.setState({ text });
  }

  handleChange(e) {
    const text = e.target.value;
    this.oodle(text);
  }

  render() {
    return (
      <Container>
        <Header as="h1">
          Welcome to oodler
        </Header>

        <TextArea placeholder="Enter the text to oodle..." autoHeight autoFocus onChange={this.handleChange.bind(this)} />

        <Oodle text={this.oodle.bind(this)} />

      </Container>
    );
  }

  componentDidMount() { }
}

export default App;
