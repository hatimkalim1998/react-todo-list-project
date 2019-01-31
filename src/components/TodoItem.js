import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { title, handlDelete, handlEdit } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between">
        <h6>{title}</h6>
        <div className="todo-icon">
          <span onClick={handlEdit} className="mx-2 text-success">
            <i className="fas fa-pen" />
          </span>
          <span onClick={handlDelete} className="mx-2 text-danger">
            <i className="fas fa-trash" />
          </span>
        </div>
      </li>
    );
  }
}
