import React, { createContext, useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Menubar from "./components/navigation/Menubar";
import { connectAuth } from "./connectAuth";
import "./App.css";

// Ant Design Layout components
const { Header, Content, Footer } = Layout;

// Lazy-loading components for better performance
const HomePage = lazy(() => import("./pages/home-page/HomePage"));
const Login2 = lazy(() => import("./pages/login-page/Login2"));

// Creating context to pass user data throughout the app
export const UserContext = createContext(null);

// Component to handle route protection based on user authentication
function ProtectedRoute({ user, children }) {
  return user ? children : <Login2 />;
}

// Main App Component
export default function App() {
  // State to hold user information
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      {/* Providing user state via context */}
      <UserContext.Provider value={{ user, setUser, connectAuth }}>
        <Layout>
          {/* Menubar at the top */}
          <Menubar />
          {/* Main content */}
          <Content>
            {/* Suspense for lazy-loaded components */}
            <Suspense fallback={<div>Loading...</div>}>
              {/* Application Routes */}
              <Routes>
                <Route path="/login" element={<Login2 />} />
                <Route
                  path="/"
                  element={
                    <ProtectedRoute user={user}>
                      <HomePage />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </Suspense>
          </Content>
          {/* Footer */}
          <Footer>&copy; 2022, SoulWorks LLC.</Footer>
        </Layout>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
