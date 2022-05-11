import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
// import CadastroCategoria from './pages/Cadastro/Categoria';
import CadastroVideo from './pages/Cadastro/Video';
import HistoryVideos from './pages/Cadastro/Video/Historico';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro/video" element={<CadastroVideo />} />
      <Route path="/cadastro/video/historico" element={<HistoryVideos />} />
      {/* <Route path="/cadastro/categoria" element={<CadastroCategoria />} /> */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>

  </BrowserRouter>,
);
