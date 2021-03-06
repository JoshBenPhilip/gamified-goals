import { Layout } from "antd";
import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Menubar from "./components/Menubar";
import { connectAuth } from "./connectAuth";

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

const { Header, Content } = Layout;

export const UserContext = createContext(null);

export default function App() {
  const [user, setUser] = useState(null);
  console.log(user);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser, connectAuth }}>
        <Layout className="layout">
          <Header>
            <Menubar />
          </Header>
          <Content>
            <Routes>
              {/* <Route path="/" element={<HomePage />} /> */}
              <Route path="/login" element={<Login />} />
              <Route path="/" element={!user ? <Login /> : <HomePage />} />
            </Routes>
          </Content>
        </Layout>
      </UserContext.Provider>
    </BrowserRouter>

    // <Layout>
    //   <h1>Gamify</h1>
    //   <Layout.Header style={styles.header}>Gamified Goals</Layout.Header>
    //   <Layout.Content style={styles.content}>
    //     <HomePage />
    //   </Layout.Content>
    //   <Layout.Footer>&copy; 2022, SoulWorks LLC.</Layout.Footer>
    // </Layout>
  );
}
