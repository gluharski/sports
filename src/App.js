import "./App.css";

// Highs
import Highslist from "./components/highlights/Highslist";
import { HighsProvider } from "./components/highlights/HighsContext";

// Live
import LiveList from "./components/live/LiveList";
import { LiveProvider } from "./components/live/LiveContext";

function App() {
  return (
    <>
      <HighsProvider>
        <Highslist />
      </HighsProvider>
      <LiveProvider>
        <LiveList />
      </LiveProvider>
    </>
  );
}

export default App;
