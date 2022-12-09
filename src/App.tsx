import { useGameContext } from "hooks";
import { Game, Welcome } from "components";

function App() {
  const { mode } = useGameContext();

  if (!mode) return <Welcome />;

  return <Game />;
}

export default App;
