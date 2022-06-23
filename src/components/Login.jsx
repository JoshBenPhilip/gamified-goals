import { useContext, useEffect } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { Button, Form, Input, Space } from "antd";
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
    <div style={{ display: "flex", background: "white" }}>
      <section
        className="flex-container"
        style={{
          padding: "10em",
          background: "white",
        }}
      >
        <Form
          onFinish={handleLogin}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ background: "white" }}
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
            <h2
              className="title"
              style={{
                fontSize: "4em",
              }}
            >
              GAMIFIED
            </h2>
            <img
              className="flex-container"
              height="500rem"
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1bebd154-3cec-433f-96a7-8442069ab770/d8ug6vd-0dd12b60-5b39-4e34-9e2f-cd2f22427534.jpg/v1/fill/w_881,h_907,q_70,strp/cosmos_rpg__dwarf_by_olieart_d8ug6vd-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA1NCIsInBhdGgiOiJcL2ZcLzFiZWJkMTU0LTNjZWMtNDMzZi05NmE3LTg0NDIwNjlhYjc3MFwvZDh1ZzZ2ZC0wZGQxMmI2MC01YjM5LTRlMzQtOWUyZi1jZDJmMjI0Mjc1MzQuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ESIsy71osiJ3NfyGR85sCtZ82j30zMUZf8ZLHXmUKP4"
              alt="rpg character dwarves"
            />
            <h2
              style={{
                fontSize: "2em",
              }}
            >
              Gamify Your Goals
            </h2>
          </Form.Item>
        </Form>
      </section>

      <section
        className="flex-container"
        style={{
          padding: "10em",
          background: "white",
        }}
      >
        <Form
          onFinish={handleLogin}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ background: "white" }}
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
            <h2
              className="title"
              style={{
                fontSize: "4em",
              }}
            >
              GOALS
            </h2>
            <img
              className="flex-container"
              height="500rem"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkF7sfIsCpoazLfaoUolQvPTRAuUwoUo2_RA&usqp=CAU"
              alt="rpg character cleric"
            />
            <h2
              style={{
                fontSize: "2em",
              }}
            >
              Gamify Your Life
            </h2>
            <Button type="primary" onClick={handleGoogleLogin}>
              Google Login
            </Button>
          </Form.Item>
        </Form>
      </section>
      <section
        className="flex-container"
        style={{
          padding: "10em",
          background: "white",
        }}
      >
        <Form
          onFinish={handleLogin}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ background: "white" }}
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
            <h2
              className="title"
              style={{
                fontSize: "4em",
              }}
            >
              GAME START
            </h2>
            <img
              className="flex-container"
              height="500rem"
              src="https://i.pinimg.com/564x/61/74/50/61745016c90d1a687dfd0c1e693c9e99.jpg"
              alt="rpg character rouge"
            />
            <h2
              style={{
                fontSize: "2em",
              }}
            >
              Win
            </h2>
          </Form.Item>
        </Form>
      </section>
    </div>
  );
}
