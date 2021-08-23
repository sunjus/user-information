import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Users from "./components/Users/Users";
import UserDetail from "./components/UserDetail/UserDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Users />
          </Route>
          <Route path="/:id">
            <UserDetail />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
