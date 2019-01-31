import React, { Component } from "react";
import TodoItem from "./TodoItem";
export default class TodoList extends Component {
  render() {
    const { items, clearList, handlDelete, handlEdit } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo list</h3>
        {items.map(item => {
          return (
            <TodoItem
              key={item.id}
              title={item.item}
              handlDelete={() => handlDelete(item.id)}
              handlEdit={() => handlEdit(item.id)}
            />
          );
        })}

        <button
          type="button"
          className="btn btn-danger text-capitalize btn-block mt-5"
          onClick={clearList}
        >
          clear list
        </button>
      </ul>
    );
  }
}
