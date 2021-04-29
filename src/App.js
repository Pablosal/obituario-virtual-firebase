import "./App.css";
import "./Utils/ConsumirFechas";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PaginaDeInicio from "./FrontPage/Pages/PaginaDeInicio";
import PersonalPage from "./CondolenciasPage/pages/PersonalPage";
import Navbar from "./Navbar/Navbar";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
      </div>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <PaginaDeInicio />
          </div>
        </Route>
        <Route exact path="/:id">
          <PersonalPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
