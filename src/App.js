import { Layout } from "antd";
import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Login2 from "./components/Login2";
import Menubar from "./components/Menubar";
import { connectAuth } from "./connectAuth";
import "./App.css";

const { Header, Content } = Layout;

export const UserContext = createContext(null);

export default function App() {
  const [user, setUser] = useState(null);
  console.log(user);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser, connectAuth }}>
        <Layout>
          <Menubar />
          <Content>
            <Routes>
              <Route path="/login" element={<Login2 />} />
              <Route path="/" element={!user ? <Login2 /> : <HomePage />} />
            </Routes>
          </Content>
        </Layout>
        <Layout.Footer>&copy; 2022, SoulWorks LLC.</Layout.Footer>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
