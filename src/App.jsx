import React, { useState } from "react";
import Products from "./Components/Products";
import Loading from "./Components/Loading";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const handleLogin = () => setIsLogin(!isLogin);
  
  return (
    <>
      {isLogin ? (
        <Products/>
      ) : (
        <Login/>
      )}
    </>
  );
}
