import React from "react";
import { Redirect } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Author from "./features/author/Author";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import { StyledNavLink } from "./styled";

const App = () => (
    <BrowserRouter basename="/todo-list-react">
        <nav>
            <ul>
                <li><StyledNavLink to="/zadania">Zadania</StyledNavLink></li>
                <li><StyledNavLink to="/author">O Autorze</StyledNavLink></li>
            </ul>
        </nav>
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