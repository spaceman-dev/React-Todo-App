import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: "flex"}}>
                <input value={this.state.title} onChange={this.onChange} style={{flex: "10", padding: '5px'}} type="text" name="title" placeholder="Add Todo .."></input>
                <input type="submit" value="Submit" className="btn" style={{flex: "1"}}></input>
            </form>
        )
    }
}
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}