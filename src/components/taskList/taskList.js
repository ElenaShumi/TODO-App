import React, { Component } from "react";

import Task from "../task/task";
import './taskList.css';

export default class TaskList extends Component {


    render() {
        const { todos, onDeleted, onToggleCompleted, onItemEditing } = this.props;

        const elements = todos.map ((item) => {
            const { id } = item;
    
            return (
                <Task key={id}
                    { ...item } 
                    onDeleted={() => onDeleted(id)} 
                    onToggleCompleted={() => onToggleCompleted(id)}
                    onItemEditing={ onItemEditing }
                />
            );
        });
    
        return (
            <ul className="todo-list">
                { elements }
            </ul>
        );
    }   
};
