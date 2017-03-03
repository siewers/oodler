import React, { Component } from 'react';
import { Container, Header, Segment, Form, TextArea, Button, Icon, Message } from 'semantic-ui-react';

export default class Oodle extends Component {

    process(text) {
        console.log("oodle: " + text);
    }

    render() {
        return (
            <Message>
                <Message.Header>Oodled result</Message.Header>
                <p>{this.props.text}</p>
            </Message>
        );
    }
}