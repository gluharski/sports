import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Highslist from "./components/highlights/Highslist"; // HG Component List
import { HighsProvider } from "./components/highlights/HighsContext"; // HG Context
// import LiveList from "./components/live/LiveList"; // Live Component List
// import { LiveProvider } from "./components/live/LiveContext"; // Live Context
// import Navbar from "./components/navbar/Navbar"; // Navbar
// import Profile from "./components/profile/Profile"; // Profile

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Switch>
          <Route path="/highlights">
            <HighsProvider>
              <Highslist />
            </HighsProvider>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
