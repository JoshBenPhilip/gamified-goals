import { useContext, useEffect } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { Button, Form, Input } from "antd";
import { UserContext } from "../App";

// const firebaseConfig = {
//   apiKey: "AIzaSyBrTbTLdYjniZeZAfVBLfYoqM2S9dqDHgU",
//   authDomain: "gamified-goals-3583e.firebaseapp.com",
//   projectId: "gamified-goals-3583e",
//   storageBucket: "gamified-goals-3583e.appspot.com",
//   messagingSenderId: "517535690767",
//   appId: "1:517535690767:web:178987e19653a19077737a",
// };

// const connectAuth = () => {
//   const app = initializeApp(firebaseConfig); //connect to firebase
//   return getAuth(app); // connect to firebase/auth
// };

export default function Login() {
  const { user, setUser, connectAuth } = useContext(UserContext);
  const handleLogin = ({ email, password }) => {
    const auth = connectAuth();
    // login with Firebase Auth
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => setUser(res.user))
      .catch(console.error);
  };
  const handleGoogleLogin = () => {
    const auth = connectAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => setUser(res.user))
      .catch(console.error);
  };

  useEffect(() => {
    onAuthStateChanged(connectAuth(), (u) => {
      setUser(u);
    });
  }, [user]);

  return (
    <section style={{ padding: "2em" }}>
      <Form
        onFinish={handleLogin}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        {/* <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please enter a valid email" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item> */}
        <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
          <Button onClick={handleGoogleLogin}>Google Login</Button>
        </Form.Item>
      </Form>
    </section>
  );
}
