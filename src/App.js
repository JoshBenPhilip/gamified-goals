import { Layout } from "antd";
import { Header } from "antd/lib/layout/layout";
import HomePage from "./components/HomePage";

const styles = {
  header: {
    position: "fixed",
    zIndex: 10,
    width: "100%",
    color: "white",
  },
  content: {
    padding: "0 50px",
    marginTop: 64,
  },
};

export default function App() {
  return (
    <div className="App">
      <h1>Gamified Goals</h1>
      <Header>Gamified Goals</Header>
      <HomePage />
    </div>
  );
}
