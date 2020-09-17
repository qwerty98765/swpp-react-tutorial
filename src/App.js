import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './containers/TodoList/TodoList';
import NewTodo from './containers/NewTodo/NewTodo';
import TodoDetail from './components/TodoDetail/TodoDetail';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          < Route path='/todos' exact render={() => <TodoList title="My TODOs!" />} />
          <Route path='/todos/:id' exact component={TodoDetail}/> 
          {/* exact를 빼면 꼭 /todos 라는 주소 말고도 이 아래 주소들도 이것으로 처리해준다. */}
          <Route path='/new-todo' exact component={NewTodo} />
          <Redirect exact from='/' to='/todos' />
          <Route render={() => <h1>Not Found</h1>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
