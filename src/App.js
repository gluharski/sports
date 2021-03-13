import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Highs
import Highslist from "./components/highlights/Highslist";
import { HighsProvider } from "./components/highlights/HighsContext";

// Live
import LiveList from "./components/live/LiveList";
import { LiveProvider } from "./components/live/LiveContext";

import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <section className="aside-navbar">
          <Navbar />
        </section>

        <section className="main">
          <Switch>
            <Route path="/highlights">
              <HighsProvider>
                <Highslist />
              </HighsProvider>
            </Route>
            <Route path="/live-matches">
              <LiveProvider>
                <LiveList />
              </LiveProvider>
            </Route>
          </Switch>
        </section>

        <section className="search">
          <form>
            <input type="text" />
          </form>
        </section>
      </div>
    </Router>
  );
}

export default App;
