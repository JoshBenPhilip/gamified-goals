import { useContext, useEffect } from "react";
import {
  // signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { Button, Form } from "antd";
import { UserContext } from "../App.js";
import "./Login2.css";

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
    <>
      <div className="background">
        <loginSection>
          <h1 className="title">GAMIFIED GOALS</h1>
          <Button
            type="primary"
            className="googleLogin"
            onClick={handleGoogleLogin}
          >
            Google Login
          </Button>
        </loginSection>
      </div>
    </>
  );
}
