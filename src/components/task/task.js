import React, { Component } from "react";

import './task.css';

export default class Task extends Component {

    state = {
        label: '',
        editing: false
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { id, onItemEditing } = this.props

        onItemEditing(this.state.label, id);

        this.setState({
            label: '',
            editing: false
        });

    };

    onToggleEditing = () => {
        this.setState(({ editing, label }) => {
            return {
                editing: !editing,
                label: this.props.label
            };
        });
    };

    render() {
        const { label, id, onDeleted, onToggleCompleted, completed } = this.props;
        const { editing } = this.state;

        return (
            <li className={ completed ? 'completed' : editing ? 'editing' : '' }>
                <div className="view">
                    <input className="toggle" 
                                type="checkbox"
                                onClick={ onToggleCompleted } 
                                id={`checkbox ${id}`}
                    />
                    <label htmlFor={`checkbox ${id}`}>
                        <span className="description"> {label} </span> 
                        <span className="created">created 5 minutes ago</span>
                    </label>
                    <button 
                        className="icon icon-edit"
                        onClick={this.onToggleEditing}>
                    </button>
                    <button 
                        className="icon icon-destroy"
                        onClick={onDeleted}>
                    </button>
                </div>
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text" 
                        className="edit" 
                        value={this.state.label}
                        onChange={this.onLabelChange}>   
                    </input>
                </form>
            </li>
        );
    };
}