import "./App.css";

import Highslist from "./components/highlights/Highslist";
import { HighsProvider } from "./components/highlights/HighsContext";

function App() {
  return (
    <HighsProvider>
      <Highslist />
    </HighsProvider>
  );
}

export default App;
