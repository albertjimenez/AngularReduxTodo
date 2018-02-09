import {Component, OnInit} from '@angular/core';
import {NgRedux, select} from "@angular-redux/store";
import {IAppState} from "../store";
import {ADD_TODO, REMOVE_TODO, TOOGLE_TODO} from "../actions/types";
import {ITodo} from "../todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @select() todos;

  model: ITodo = {
    id: 0,
    description: "",
    responsible: "",
    priority: "low",
    isCompleted: false
  };

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.model.description !=='' && this.model.responsible !=='') {
      this.ngRedux.dispatch({
        type: ADD_TODO,
        todo: this.model
      });
    } else {
      alert("Empty");
    }
  }

  toogleTodo(todo: ITodo) {
    this.ngRedux.dispatch({
      type: TOOGLE_TODO,
      id: todo.id
    });
  }

  removeTodo(todo: ITodo) {
    this.ngRedux.dispatch({
      type: REMOVE_TODO,
      id: todo.id
    });
  }
}
