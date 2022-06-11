import React from "react";
import { Redirect } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Author from "./features/author/index";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import { Navigation } from "./common/Navigation";

const App = () => (
    <BrowserRouter basename="/todo-list-react">
        <Navigation />
        <Switch>
            <Route path="/zadania/:id">
                <TaskPage/>
            </Route>
            <Route path="/zadania">
                <TasksPage />
            </Route>
            <Route path="/author">
                <Author />
            </Route>
            <Route path="/">
                <Redirect to="/zadania"/>
            </Route>
        </Switch>
    </BrowserRouter>
);
export default App;