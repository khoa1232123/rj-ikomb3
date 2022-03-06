import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import Layout from "./views/Layout";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </HashRouter>
    </div>
  );
}

export default App;
