import React from 'react';
import ReactDOM from "react-dom/client";
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Invoices from "./routes/invoices";
import Invoice from './routes/invoice';
import './App.css'
import Blogs from './routes/Blogs';
import SingleBlog from './routes/SingleBlog';
const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      {/* <Route path="blogs" element={<Blogs />} />
      <Route path="blog/:slug" element={<SingleBlog/>} /> */}
      <Route path="invoices" element={<Invoices />}>
        <Route path=":invoiceId" element={<Invoice />} />
      </Route>
    </Routes>
  </HashRouter>
);
