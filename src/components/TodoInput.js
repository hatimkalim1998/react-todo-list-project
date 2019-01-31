import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handlChange, handlSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handlSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book" />
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add a todo item"
              value={item}
              onChange={handlChange}
            />
          </div>
          <button
            type="submit"
            className={
              editItem
                ? "btn btn-success btn-block mt-3"
                : "btn btn-primary btn-block mt-3"
            }
          >
            {editItem ? "Edit item" : "Add item"}
          </button>
        </form>
      </div>
    );
  }
}
