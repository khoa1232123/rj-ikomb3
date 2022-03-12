import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Personal, Updatingting } from "./views";
import AuthorDetail from "./views/AuthorDetail";
import Layout from "./views/Layout";

function App() {
  document.title = "Iko - mb3";
  return (
    <div className="App">
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ca-nhan/*" element={<Personal />} />
            <Route path="/chart" element={<Updatingting />} />
            <Route path="/radio" element={<Updatingting />} />
            <Route path="/theo-doi" element={<Updatingting />} />
            <Route path="/author/:id" element={<AuthorDetail />} />
            <Route path="/nhac-moi" element={<Updatingting />} />
            <Route path="/the-loai" element={<Updatingting />} />
            <Route path="/top-100" element={<Updatingting />} />
            <Route path="/video" element={<Updatingting />} />
          </Routes>
        </Layout>
      </HashRouter>
    </div>
  );
}

export default App;
