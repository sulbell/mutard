import { useEffect } from "react";
import { initApp } from "./mutad";
import "./mutad.css";

export default function App() {
  useEffect(() => {
    initApp();
  }, []);

  return (
    <>
      <div id="app" className="app"></div>
      <div id="toastWrap" className="toast-wrap"></div>
      <div id="modalRoot"></div>
      <div id="drawerRoot"></div>
    </>
  );
}
