import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {NgRedux, NgReduxModule} from '@angular-redux/store';
import {IAppState, INITIAL_STATE, rootReducer} from './store';

import {AppComponent} from './app.component';
import {TodoOverviewComponent} from './todo-overview/todo-overview.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {FormsModule} from "@angular/forms";
import {ADD_TODO} from "./actions/types";

@NgModule({
  declarations: [
    AppComponent,
    TodoOverviewComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule, NgReduxModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }

}
