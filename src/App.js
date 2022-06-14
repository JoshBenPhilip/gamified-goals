import { Layout } from "antd";
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
    <Layout>
      <h1>Gamify</h1>
      <Layout.Header style={styles.header}>Gamified Goals</Layout.Header>
      <Layout.Content style={styles.content}>
        <HomePage />
      </Layout.Content>
      <Layout.Footer>&copy; 2022, SoulWorks LLC.</Layout.Footer>
    </Layout>
  );
}
