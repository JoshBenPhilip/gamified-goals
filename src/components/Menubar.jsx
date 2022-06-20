import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "antd";
import {
  PlusCircleOutlined,
  QuestionCircleOutlined,
  HomeOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { signOut } from "firebase/auth";
import { UserContext } from "../App";

const { Item } = Menu;

export default function Menubar() {
  let navigate = useNavigate();

  const { connectAuth } = useContext(UserContext);

  const handleSignOut = () => {
    const auth = connectAuth();
    signOut(auth);
    // navigate("/login");
  };

  return (
    <>
      <Menu theme="dark" mode="horizontal">
        <h1>Gamified Goals</h1>
        <Item
          key="home"
          onClick={() => navigate("/")}
          icon={<HomeOutlined style={{ fontSize: "1.8em", color: "ffddf5" }} />}
        />
        <Item
          key="Logout"
          onClick={handleSignOut}
          icon={<LogoutOutlined style={{ fontSize: "1.8em" }} />}
        />
      </Menu>
    </>
  );
}
