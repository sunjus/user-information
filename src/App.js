import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Users from "./components/Users/Users";
import Card from "./components/Card/Card";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Users />
          </Route>
          <Route path="/:id">
            <Card />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
