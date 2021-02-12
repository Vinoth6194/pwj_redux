import "./App.css";
import Login from "./components/Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [state, dispatch] = useStateValue();
  return (
    <>
      <div className="App">
        <div>
          {state.user ? `${state.user}, is logged in` : "Not Logged in"}
        </div>

        <Login />
      </div>
    </>
  );
}

export default App;
