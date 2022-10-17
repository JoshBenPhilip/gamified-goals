import { useContext, useEffect } from "react";
import {
  // signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { Button, Form } from "antd";
import { UserContext } from "../App.js";
import "./Login.css";

//Function for Google Login and In-app Login
export default function Login() {
  const { user, setUser, connectAuth } = useContext(UserContext);

  //In-app Login (Username and Password)
  // const handleLogin = ({ email, password }) => {
  //   const auth = connectAuth();
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((res) => setUser(res.user))
  //     .catch(console.error);
  // };

  // login with Firebase Auth using popup
  const handleGoogleLogin = () => {
    const auth = connectAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => setUser(res.user))
      .catch(console.error);
  };

  // When Auth State changed set user to user
  useEffect(() => {
    onAuthStateChanged(connectAuth(), (u) => {
      setUser(u);
    });
  }, [user]);

  // The actual visuals
  return (
    <div className="background">
      <h2 className="title">GAMIFIED GOALS</h2>
      <h2 className="title">Gamify Your Goals</h2>
      <div>
        <img alt="rpg character dwarves" src="/ggDwarves.png" height="100px" />
        {/* <img
          height="100px"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkF7sfIsCpoazLfaoUolQvPTRAuUwoUo2_RA&usqp=CAU"
          alt="rpg character cleric"
        /> */}
      </div>
      <Form
        style={{
          padding: "1em",
        }}
      >
        {/* Image with dwarves and text underneath */}
        <Form.Item wrapperCol={{ span: 16, offset: 8 }}></Form.Item>
      </Form>
      {/* Cleric and login button */}
      <Form
        style={{
          padding: "1em",
        }}
      >
        <h2 className="title">Gamify Your Life</h2>
        <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
          <Button type="primary" onClick={handleGoogleLogin}>
            Google Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
