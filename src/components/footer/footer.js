import React from "react";

import './footer.css';
import TasksFilter from "../tasksFilter";

const Footer = ( {itemsLeft, filter, onFilterChange, onClearCompleted} ) => {
    return (
        <footer className="footer">
            <span className="todo-count">{itemsLeft} items left </span>
            <TasksFilter 
                filter={filter}
                onFilterChange={onFilterChange} />
            <button 
                className="clear-completed"
                onClick={onClearCompleted}>
                    Clear completed
            </button>
        </footer>
    );
};

export default Footer;