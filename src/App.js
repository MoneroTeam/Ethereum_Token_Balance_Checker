import React from "react";
import MainView from "./views/MainView";
import "fomantic-ui-css/semantic.min.css";
import "./App.scss";
import { Container } from "semantic-ui-react";
export default function App() {
  return (
    <Container className="main">
      <MainView />
    </Container>
  );
}
