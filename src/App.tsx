import "./styles.css";

import React from "react";

import { Header } from "./companents/app-bar/AppBar";
import { NewsLine } from "./companents/news-line/news-line";
import { MainBlock } from "./pages/main/main-block";
import { useDataTodo } from "./utils/hooks/useDataTodo";

const App: React.FC = () => {
  const { news } = useDataTodo();
  return (
    <div className="App">
      <Header />
      <MainBlock />
      {news && <NewsLine />}
    </div>
  );
};

export default App;
