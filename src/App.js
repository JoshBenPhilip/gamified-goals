import "./App.css";
import HomePage from "./components/HomePage";

export default function App() {
  return (
    <div className="App">
      <h1>Gamified Goals</h1>
      <Login />
      <HomePage />
      <EnterNewTask />
      <CompleteTasK />
    </div>
  );
}
